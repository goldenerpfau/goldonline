'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Adiciona tipagem JSX para R3F
import '@react-three/fiber';

function SpinningGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/globe_texture.jpg');

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} metalness={0.4} roughness={0.7} />
    </mesh>
  );
}

export default function Globe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <primitive object={new THREE.AmbientLight(0xffffff, 1)} />
        <Stars radius={300} depth={50} count={1000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} />
        <SpinningGlobe />
      </Canvas>
    </div>
  );
}
