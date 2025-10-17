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

  const imageObjectFit: 'cover' | 'contain' = theme === 'light' ? 'cover' : 'contain';

  // Fade-in (mantido). A variante pfauCentered neutraliza o gap via CSS.
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

  // Mídia (vídeo no dark / imagem no light)
  const mediaContent =
    theme === 'dark' ? (
      <video
        src="/iosteste.mp4"
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
        width={1200}
        height={800}
        quality={100}
        priority={false}
        style={{ objectFit: imageObjectFit, borderRadius: '18px' }}
      />
    );

  // Classes dinâmicas:
  // - services segue com "centered"
  // - pfau-institut ganha "pfauCentered" (força centralização real)
  const isServices = /services/i.test(id);
  const isPfau = /pfau/i.test(id);

  const classNames = [
    styles.modernSection,
    styles[theme],
    bodyFontClass,
    'isVisible',
    isServices ? styles.centered : '',
    isPfau ? styles.pfauCentered : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} ref={sectionRef} className={classNames}>
      {/* Partículas */}
      <div className={styles.particlesBackground}>
        {theme === 'light' ? (
          <ParticlesComponent id={`particles-${id}`} particleColor="#FFFFFF" linkColor="#f8bf00" />
        ) : (
          <ParticlesComponent id={`particles-${id}`} particleColor="#FFFFFF" linkColor="#FFFFFF" />
        )}
      </div>

      {/* Mídia (fica à esquerda no desktop padrão; em Pfau mantém à direita via .pfauCentered) */}
      <div className={styles.imageContainer}>
        <div className={styles.imageBackgroundSplit} />
        <div className={styles.abstractImageWrapper}>{mediaContent}</div>
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
    </section>
  );
};

export default ModernSection;
