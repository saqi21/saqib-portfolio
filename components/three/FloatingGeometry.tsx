'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  visible?: boolean;
}

function RotatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.1;
  });

  return (
    <Float speed={2} floatIntensity={1} rotationIntensity={0.2}>
      <mesh ref={meshRef} position={[-3.5, 2, -2]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          wireframe
          emissive="#667eea"
          emissiveIntensity={0.5}
          color="#667eea"
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.08;
    meshRef.current.rotation.z = t * 0.12;
  });

  return (
    <Float speed={1.5} floatIntensity={1.2} rotationIntensity={0.3}>
      <mesh ref={meshRef} position={[3.5, -1.5, -1.5]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial
          wireframe
          emissive="#764ba2"
          emissiveIntensity={0.5}
          color="#764ba2"
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function RotatingOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.z = t * 0.05;
  });

  return (
    <Float speed={2.5} floatIntensity={0.8} rotationIntensity={0.15}>
      <mesh ref={meshRef} position={[-2.5, -2.5, -1]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          wireframe
          emissive="#667eea"
          emissiveIntensity={0.4}
          color="#667eea"
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function RotatingSmallIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.12;
    meshRef.current.rotation.y = t * 0.18;
  });

  return (
    <Float speed={1.8} floatIntensity={1.5} rotationIntensity={0.25}>
      <mesh ref={meshRef} position={[3, 2.5, -2.5]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          wireframe
          emissive="#764ba2"
          emissiveIntensity={0.4}
          color="#764ba2"
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry({ visible = true }: FloatingGeometryProps) {
  if (!visible) return null;

  return (
    <group>
      <RotatingIcosahedron />
      <RotatingTorus />
      <RotatingOctahedron />
      <RotatingSmallIcosahedron />
    </group>
  );
}
