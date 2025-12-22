'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import type { Mesh } from 'three';

function SpinningGlobe() {
  const globeRef = useRef<Mesh>(null!);
  const texture = useTexture('/globe_texture.jpg');

  useFrame((_, delta) => {
    // Rotação suave — suficiente para dar vida sem pesar no mobile
    globeRef.current.rotation.y += delta * 0.08;
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} metalness={0.35} roughness={0.75} />
    </mesh>
  );
}

export default function Globe() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();

    // Safari antigo não tem addEventListener no MediaQueryList
    // @ts-ignore
    if (mq.addEventListener) mq.addEventListener('change', update);
    // @ts-ignore
    else mq.addListener(update);

    return () => {
      // @ts-ignore
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      // @ts-ignore
      else mq.removeListener(update);
    };
  }, []);

  const dpr = useMemo(() => {
    if (!isClient) return 1;
    const device = window.devicePixelRatio || 1;
    // Limita o custo no mobile sem “embassar” demais
    return Math.min(device, isMobile ? 1.25 : 1.75);
  }, [isClient, isMobile]);

  if (!isClient) return null;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: 320,
        margin: 0,
        padding: 0,
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={dpr}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{
          width: '100%',
          height: '100%',
          // No mobile, evita travar o scroll por causa do gesto no canvas
          pointerEvents: isMobile ? 'none' : 'auto',
          touchAction: isMobile ? 'auto' : 'none',
        }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <Stars
          radius={250}
          depth={50}
          count={isMobile ? 4500 : 10000}
          factor={isMobile ? 6 : 7}
          saturation={0}
          fade
          speed={isMobile ? 0.8 : 1.2}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isMobile}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
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
