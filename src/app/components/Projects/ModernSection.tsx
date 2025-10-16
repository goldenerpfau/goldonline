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

  // 'cover' p/ mapas/fotos amplas (tema light); 'contain' p/ mock/app (tema dark)
  const imageObjectFit: 'cover' | 'contain' = theme === 'light' ? 'cover' : 'contain';

  // IntersectionObserver — mantém o fade-in
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('isVisible');
            // @ts-ignore — alguns setups exportam styles.isVisible
            if ((styles as any).isVisible) entry.target.classList.add((styles as any).isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // --- MÍDIA (vídeo no dark / imagem no light) ---
  const mediaContent =
    theme === 'dark' ? (
      <video
        src="/iosteste.mp4" // arquivo dentro de /public
        className={styles.videoContent}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Demonstração do App iOS Goldener Pfau"
      />
    ) : (
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        quality={100}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={false}
        style={{ objectFit: imageObjectFit }}
      />
    );

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.modernSection} ${styles[theme]} ${bodyFontClass} isVisible`}
    >
      {/* Partículas no fundo */}
      <div className={styles.particlesBackground}>
        {theme === 'light' ? (
          <ParticlesComponent
            id={`particles-${id}`}
            particleColor="#FFFFFF"
            linkColor="#f8bf00"
          />
        ) : (
          <ParticlesComponent
            id={`particles-${id}`}
            particleColor="#FFFFFF"
            linkColor="#FFFFFF"
          />
        )}
      </div>

      {/* Texto */}
      <div className={styles.textContainer}>
        <h1 className={`${styles.title} ${titleFontClass}`}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.buttonGroup}>
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.luxuryButton}
          >
            {buttonText}
          </a>

          {/* Segundo botão opcional */}
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

          {/* Slot opcional mantendo o estilo */}
          {children &&
            React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child, {
                    className: `${styles.luxuryButton} ${child.props?.className ?? ''}`.trim(),
                  })
                : child
            )}
        </div>
      </div>

      {/* Mídia à direita (vídeo ou imagem) */}
      <div className={styles.imageContainer}>
        <div className={styles.imageBackgroundSplit} />
        <div className={styles.abstractImageWrapper}>{mediaContent}</div>
      </div>
    </section>
  );
};

export default ModernSection;
