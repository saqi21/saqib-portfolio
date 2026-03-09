'use client';

import { Suspense, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

interface SceneProps {
  children: ReactNode;
}

export default function Scene({ children }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#764ba2" />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
