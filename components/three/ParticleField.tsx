'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  mousePosition?: { x: number; y: number };
}

export default function ParticleField({
  count = 1500,
  mousePosition = { x: 0, y: 0 },
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const initialPositions = useRef<Float32Array | null>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spherical distribution with radius ~4
      const radius = 4 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);
    }

    return pos;
  }, [count]);

  // Store initial positions for wave effect reference
  useMemo(() => {
    initialPositions.current = new Float32Array(positions);
  }, [positions]);

  useFrame((state) => {
    if (!pointsRef.current || !initialPositions.current) return;

    const time = state.clock.getElapsedTime();

    // Gentle rotation of the entire points group
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;

    const positionAttribute = pointsRef.current.geometry.attributes.position;
    const array = positionAttribute.array as Float32Array;
    const initial = initialPositions.current;

    // Normalized mouse position mapped to 3D space
    const mouseX = mousePosition.x * 3;
    const mouseY = mousePosition.y * 3;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const ix = initial[i3];
      const iy = initial[i3 + 1];
      const iz = initial[i3 + 2];

      // Wave effect on Y axis
      const waveOffset = Math.sin(time * 0.5 + ix * 0.5 + iz * 0.5) * 0.15;
      array[i3 + 1] = iy + waveOffset;

      // Gentle push away from mouse position
      const dx = ix - mouseX;
      const dy = iy - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxInfluence = 2.0;

      if (dist < maxInfluence) {
        const force = (1 - dist / maxInfluence) * 0.3;
        array[i3] = ix + dx * force;
        array[i3 + 1] = iy + waveOffset + dy * force;
      } else {
        array[i3] = ix;
      }

      array[i3 + 2] = iz;
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        transparent
        opacity={0.6}
        color="#667eea"
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}
