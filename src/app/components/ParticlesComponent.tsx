'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

type Props = {
  id?: string;
  particleColor?: string;
  linkColor?: string;
  className?: string; // ex.: styles.particlesBackground (precisa ocupar toda a área)
};

export default function ParticlesComponent({
  id = 'pfauParticles',
  particleColor = '#f8bf00',
  linkColor = '#f8bf00',
  className,
}: Props) {
  const [ready, setReady] = useState(false);

  // v3+: inicializa o engine uma única vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(() => ({
  fpsLimit: 60,
  detectRetina: true,
  background: { color: 'transparent' },
  fullScreen: { enable: false }, // usamos nosso container
  particles: {
    number: { value: 90, density: { enable: true, area: 800 } }, // mais nós => mais linhas
    color: { value: particleColor },
    links: {
      enable: true,
      color: linkColor,
      distance: 220,        // ↑ conecta nós mais distantes -> mais linhas na tela
      opacity: 0.6,         // linhas mais visíveis
      width: 1.1,           // um pouco mais espessas
    },
    move: {
      enable: true,
      speed: 0.6,           // movimento mais elegante (menos “ruído”)
      outModes: { default: 'bounce' },
    },
    opacity: { value: 0.28 }, // <<< CORRIGIDO (0–1): pontos bem discretos
    size: { value: { min: 1, max: 2 } }, // pontos menores para destacar as linhas
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: false },
    },
    modes: { repulse: { distance: 120, duration: 0.4 } },
  },
}), [particleColor, linkColor]);


  // Só renderiza o <Particles> após o engine estar pronto
  return (
    <div className={className}>
      {ready && <Particles id={id} options={options} />}
    </div>
  );
}
