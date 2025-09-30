'use client';

import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import type { Mesh } from 'three';

/**
 * Componente que renderiza o globo giratório.
 */
function SpinningGlobe() {
  const globeRef = useRef<Mesh>(null!);
  const texture = useTexture('/globe_texture.jpg');

  useFrame((state, delta) => {
    // Rotaciona o globo continuamente no eixo Y
    globeRef.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh ref={globeRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial 
        map={texture} 
        metalness={0.4} 
        roughness={0.7} 
      />
    </mesh>
  );
}

/**
 * Componente principal que configura a cena 3D.
 */
export default function Globe() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Renderiza nada no servidor para evitar erros de hidratação
  }

  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        
        <Stars radius={300} depth={50} count={10000} factor={7} saturation={0} fade speed={2} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
        
        <Suspense fallback={null}>
          <SpinningGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
