// ModernSection.tsx

'use client'; 

import React, { useEffect, useRef } from 'react';
// Caminho do SCSS ajustado para local (./)
import styles from './ModernSection.module.scss'; 
import Image from 'next/image';
import ParticlesComponent from '../ParticlesComponent'; 


// --- TIPAGEM PARA AS PROPS ---
interface ModernSectionProps {
  id: string;
  theme: 'dark' | 'light';
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string; 
  imageAlt: string;
  children?: React.ReactNode; 
  titleFontClass: string;
  bodyFontClass: string;
}

// --- COMPONENTE PRINCIPAL ---
const ModernSection = ({ 
  id,
  theme,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  children,
  titleFontClass,
  bodyFontClass,
}: ModernSectionProps) => { 
  
  const sectionRef = useRef<HTMLElement>(null);

  // Determina o object-fit dinamicamente: 'cover' para mapas, 'contain' para objetos (celular)
  const imageObjectFit = theme === 'light' ? 'cover' : 'contain';

  // Lógica de Intersection Observer (inalterada)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // --- RENDERIZAÇÃO DO CONTEÚDO DA IMAGEM/VÍDEO ---
  const mediaContent = theme === 'dark' ? (
    // RENDERIZAÇÃO DO VÍDEO MP4 (CELULAR)
    <video
        src="/ios teste.mp4.mp4" // Caminho do vídeo
        className={styles.videoContent} // Classe para preenchimento e object-fit
        autoPlay
        loop
        muted // Essencial para autoPlay funcionar
        playsInline // Boa prática para iOS
        aria-label="Goldener Pfau App Demonstration Video"
    />
  ) : (
    // RENDERIZAÇÃO DA IMAGEM/MAPA (TEMA LIGHT)
    <Image
      src={imageSrc} 
      alt={imageAlt}
      layout="fill"
      objectFit={imageObjectFit} 
      quality={100} 
      sizes="(max-width: 1024px) 100vw, 50vw" 
    />
  );


  return (
    <section
      id={id}
      ref={sectionRef}
      // Combina a classe base com a classe do tema (dark/light)
      className={`${styles.modernSection} ${styles[theme]} ${bodyFontClass}`} 
    >
      {/* Componente de Partículas no Fundo */}
      {theme === 'dark' || theme === 'light' ? (
          <div className={styles.particlesBackground}>
              <ParticlesComponent 
                  id={`particles-${id}`} 
                  // CORREÇÃO: Partículas unificadas para branco (#FFFFFF) em ambos os temas
                  particleColor={"#FFFFFF"} 
                  linkColor={"#FFFFFF"} 
              />
          </div>
      ) : null}

      {/* Container de Texto */}
      <div className={styles.textContainer}>
            {/* Título principal (h1) e Subtítulo (h2) */}
        <h1 className={`${styles.title} ${titleFontClass}`}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.buttonGroup}>
            <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.luxuryButton} // Mantendo a nova classe de luxo
            >
                {buttonText}
            </a>
            {/* Slot para conteúdo extra */}
            {children} 
        </div>
      </div>

      {/* Container de Imagem (com a divisão de fundo) */}
      <div className={styles.imageContainer}>
            {/* Elemento que simula a divisão de cores no fundo (White/Dark) */}
            <div className={styles.imageBackgroundSplit}></div>
        <div className={styles.abstractImageWrapper}>
            {/* INSERINDO O CONTEÚDO DINÂMICO (IMAGEM OU VÍDEO) */}
            {mediaContent}
        </div>
      </div>
    </section>
  );
};

export default ModernSection;