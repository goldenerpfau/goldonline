'use client';

import React, { useMemo, useRef, useState } from 'react';
import styles from './ModernSection.module.scss';

type Slide = {
  image: string;
  title: string;
  description?: string;
};

type Props = {
  id: string;
  slides?: Slide[];
};

export default function ModernSection({ id, slides }: Props) {
  const defaultSlides: Slide[] = useMemo(
    () => [
      {
        image: '/highlights/1.png',
        title: 'Crafted as a statement. Engineered for effortless prestige.',
        description: 'A seamless experience — refined down to every detail.',
      },
      {
        image: '/highlights/2.png?v=20251220-3',
        title: 'Impact, made transparent.',
        description: 'Philanthropy with receipts — and scale.',
      },
      {
        image: '/highlights/3.png',
        title: 'Presence, perfectly framed.',
        description: 'Every moment, captured with intention and clarity.',
      },
    ],
    []
  );

  const data = useMemo(
    () => (slides && slides.length ? slides : defaultSlides),
    [slides, defaultSlides]
  );

  const [index, setIndex] = useState(0);
  const safeIndex = Math.min(index, Math.max(0, data.length - 1));

  const dragging = useRef(false);
  const startX = useRef(0);
  const delta = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    startX.current = e.clientX;
    delta.current = 0;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    delta.current = e.clientX - startX.current;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);

    const threshold = 70;
    if (delta.current > threshold) {
      setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
    } else if (delta.current < -threshold) {
      setIndex((i) => (i === data.length - 1 ? 0 : i + 1));
    }
  };

  const isPhilanthropySlide = (img: string) => img.startsWith('/highlights/2.png');

  return (
    <section id={id} className={styles.section}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.topBar}>
        <h2 className={styles.topTitle}>Get the highlights.</h2>

        <a
          className={styles.topLink}
          href="https://wa.me/48571517218?text=Hello%20Goldener%20Pfau%20%E2%80%94%20I%20want%20to%20talk%20about%20the%20services."
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact via WhatsApp <span className={styles.arrow} aria-hidden="true">›</span>
        </a>
      </div>

      <div
        className={styles.carousel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className={styles.track} style={{ transform: `translateX(-${safeIndex * 100}%)` }}>
          {data.map((s, i) => (
            <article key={`${id}-slide-${i}`} className={styles.slide}>
              <header className={styles.slideHeader}>
                <p className={styles.slideTitle}>{s.title}</p>
                {s.description && <p className={styles.slideDesc}>{s.description}</p>}
              </header>

              {/* ✅ só o slide 2 recebe “modo estrelas fortes por trás do PNG” */}
              <div className={`${styles.media} ${isPhilanthropySlide(s.image) ? styles.mediaShowStars : ''}`}>
                <div className={styles.mediaStars} aria-hidden="true" />

                {isPhilanthropySlide(s.image) ? (
                  <div className={styles.mediaGrid}>
                    <div className={styles.philanthropy}>
                      <p className={styles.pill}>Pfau Institut</p>

                      <h3 className={styles.phTitle}>Private access. Public good.</h3>

                      <p className={styles.phText}>
                        Our philanthropic arm turns resources into measurable outcomes — focusing on
                        <strong> health</strong>, <strong>housing</strong>, <strong>water</strong>, and{' '}
                        <strong>education</strong>. We fund pilots with local partners, publish receipts,
                        and scale what proves effective.
                      </p>

                      <ul className={styles.phList}>
                        <li>Transparent reporting, quarterly.</li>
                        <li>Direct impact routes — no noise.</li>
                        <li>Built to expand responsibly, globally.</li>
                      </ul>

                      <p className={styles.phNote}>
                        A luxury brand should do more than serve — it should leave a footprint worth keeping.
                      </p>
                    </div>

                    <div className={styles.deviceWrap}>
                      <img
                        className={`${styles.img} ${styles.imgTabletPortrait}`}
                        src={s.image}
                        alt=""
                        draggable={false}
                      />
                    </div>
                  </div>
                ) : (
                  <img className={styles.img} src={s.image} alt="" draggable={false} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {data.length > 1 && (
        <div className={styles.controls}>
          <div className={styles.dotsPill} aria-label="Slides">
            {data.map((_, i) => (
              <button
                key={`${id}-dot-${i}`}
                className={`${styles.dot} ${i === safeIndex ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
