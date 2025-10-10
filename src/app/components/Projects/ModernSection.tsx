'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ModernSection.module.scss';
import Image from 'next/image';
import ParticlesComponent from '../ParticlesComponent';

interface ModernSectionProps {
  id: string;
  theme: 'dark' | 'light';
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
  titleFontClass: string;
  bodyFontClass: string;
}

const ModernSection = ({
  id,
  theme,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageSrc,
  imageAlt,
  children,
  titleFontClass,
  bodyFontClass,
}: ModernSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          node.classList.add('isVisible');
          // @ts-ignore
          if ((styles as any).isVisible) node.classList.add((styles as any).isVisible);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Em tema light, mantemos a imagem no wrapper.
  const imageObjectFit: 'cover' | 'contain' = theme === 'light' ? 'cover' : 'contain';

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.modernSection} ${styles[theme]} ${bodyFontClass} isVisible`}
    >
      {/* Partículas */}
      <div className={styles.particlesBackground}>
        <ParticlesComponent
          id={`particles-${id}`}
          particleColor="#FFFFFF"
          linkColor={theme === 'light' ? '#f8bf00' : '#FFFFFF'}
        />
      </div>

      {/* ===== COLUNA ESQUERDA: TEXTO ===== */}
      <div className={styles.textContainer}>
        <h1 className={`${styles.title} ${titleFontClass}`}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.luxuryButton}
          >
            {buttonText}
          </a>

          {secondaryButtonText && secondaryButtonLink && (
            <a
              href={secondaryButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.luxuryButton}
            >
              {secondaryButtonText}
            </a>
          )}

          {children}
        </div>
      </div>

      {/* ===== COLUNA DIREITA: VÍDEO 1200x800 ===== */}
      <div className={styles.mediaRight}>
        {theme === 'dark' ? (
          <video
            src="/iosteste.mp4"
            className={styles.sideVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Goldener Pfau App demo"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 48vw"
            priority={false}
            style={{ objectFit: imageObjectFit }}
          />
        )}
      </div>
    </section>
  );
};

export default ModernSection;
