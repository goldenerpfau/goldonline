'use client'; 

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import React from 'react';
import { MoveDirection } from "@tsparticles/engine";

// --- TIPAGEM ---
interface ParticlesComponentProps {
    id: string;
    // Removendo 'backgroundColor' pois definimos 'transparent'
    particleColor: string; 
    linkColor: string;
}

// CORREÇÃO: Desestruturando as props { id, particleColor, linkColor }
// Isso resolve o erro de sintaxe e o uso incorreto de 'props.' dentro de useMemo
const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id, particleColor, linkColor }) => { 

  const [init, setInit] = useState(false);

  // Inicializa o engine do tsParticles (deve rodar apenas uma vez)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // CORREÇÃO: Tipando o container como 'any' ou o tipo correto do tsParticles
  const particlesLoaded = (container: any) => { 
    // console.log(container); 
  };

  // Ajustando as opções
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", 
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: {
          // Usando a prop desestruturada
          value: particleColor, 
        },
        links: {
          // Usando a prop desestruturada
          color: linkColor, 
          distance: 180,
          enable: true,
          opacity: 0.3,
          width: 1,
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        },
        number: {
          density: { enable: true },
          value: 120, 
        },
        opacity: { value: 0.8 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    // Dependências do useMemo usando as variáveis desestruturadas
    [particleColor, linkColor] 
  );

 // ... (Seu código até a Linha 94)

  if (!init) {
    return null; 
  }

  // LINHA 95 CORRIGIDA: Removendo o prop 'init' ou mudando-o
  return <Particles id={id} options={options} />; 
  // OU tente a prop 'onParticlesLoaded' (dependendo da sua versão do tsparticles):
  // return <Particles id={id} loaded={particlesLoaded} options={options} />;
}

export default ParticlesComponent;