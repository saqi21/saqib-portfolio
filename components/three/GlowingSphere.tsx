'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();

    // Slow rotation
    meshRef.current.rotation.x = t * 0.1;
    meshRef.current.rotation.y = t * 0.15;

    // Pulsing scale oscillation
    const pulse = 1 + Math.sin(t * 0.8) * 0.05;
    meshRef.current.scale.setScalar(pulse);

    // Sync light intensity with pulse
    if (lightRef.current) {
      lightRef.current.intensity = 1.5 + Math.sin(t * 0.8) * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#667eea"
          emissive="#764ba2"
          emissiveIntensity={0.4}
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={0.2}
        />
      </mesh>
      {/* Inner point light for glow effect */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 0]}
        color="#667eea"
        intensity={1.5}
        distance={8}
        decay={2}
      />
    </group>
  );
}
