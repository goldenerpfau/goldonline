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
        image: '/highlights/1.png?v=20251220-11',
        title: 'Crafted as a statement. Engineered for effortless prestige.',
        description: 'A seamless experience — refined down to every detail.',
      },
      {
        image: '/highlights/2.png?v=20251220-11',
        title: 'Impact, engineered.',
        description: 'Transparent governance. Real outcomes. Zero noise.',
      },
      {
        image: '/highlights/3.png?v=20251220-11',
        title: 'Membership is the gateway.',
        description: 'Time, clarity, and a structured path from entry to exit.',
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

  // ===== drag (pointer) =====
  const dragging = useRef(false);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    startX.current = e.clientX;
    deltaX.current = 0;

    // evita seleção/drag ghost
    (e.currentTarget as HTMLElement).style.cursor = 'grabbing';
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    deltaX.current = e.clientX - startX.current;
  };

  const finishDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;

    (e.currentTarget as HTMLElement).style.cursor = '';
    e.currentTarget.releasePointerCapture?.(e.pointerId);

    const threshold = 70;

    if (deltaX.current > threshold) {
      setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
    } else if (deltaX.current < -threshold) {
      setIndex((i) => (i === data.length - 1 ? 0 : i + 1));
    }

    deltaX.current = 0;
  };

  // helpers que ignoram querystring (?v=...)
  const stripQuery = (url: string) => url.split('?')[0] ?? url;
  const isImpactSlide = (img: string) => stripQuery(img).endsWith('/highlights/2.png');
  const isMembershipSlide = (img: string) => stripQuery(img).endsWith('/highlights/3.png');

  return (
    <section id={id} className={styles.section}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.topBar}>
        <h2 className={styles.topTitle}>Get the highlights.</h2>

        <a
          className={styles.topLink}
          href="https://wa.me/48571517218?text=Hello%20Goldener%20Pfau%20%E2%80%94%20I%20want%20to%20learn%20more."
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact WhatsApp <span className={styles.arrow} aria-hidden="true">›</span>
        </a>
      </div>

      <div
        className={styles.carousel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishDrag}
        onPointerLeave={finishDrag}
        style={{ touchAction: 'pan-y' }} // permite scroll vertical no mobile e drag horizontal no componente
      >
        <div className={styles.track} style={{ transform: `translateX(-${safeIndex * 100}%)` }}>
          {data.map((s, i) => {
            const impact = isImpactSlide(s.image);
            const membership = isMembershipSlide(s.image);

            return (
              <article key={`${id}-slide-${i}-${s.image}`} className={styles.slide}>
                <header className={styles.slideHeader}>
                  <p className={styles.slideTitle}>{s.title}</p>
                  {s.description && <p className={styles.slideDesc}>{s.description}</p>}
                </header>

                <div className={`${styles.media} ${impact ? styles.mediaShowStars : ''}`}>
                  <div className={styles.mediaStars} aria-hidden="true" />

                  {impact ? (
                    <div className={styles.mediaGrid}>
                      <div className={styles.philanthropy}>
                        <p className={styles.pill}>Pfau Institut</p>

                        <h3 className={styles.phTitle}>Impact with receipts.</h3>

                        <p className={styles.phText}>
                          This is our built-in impact layer: structured initiatives, clear reporting,
                          and accountability by default — designed to scale without losing integrity.
                        </p>

                        <ul className={styles.phList}>
                          <li><strong>Governance:</strong> defined rules, audit-ready processes.</li>
                          <li><strong>Traceability:</strong> decisions and outcomes you can verify.</li>
                          <li><strong>Execution:</strong> partner-led delivery with measurable checkpoints.</li>
                        </ul>

                        <p className={styles.phNote}>
                          Premium should mean more than access — it should mean responsibility.
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
                  ) : membership ? (
                    <div className={styles.membersGrid}>
                      <div className={styles.membersVisual}>
                        <img
                          className={`${styles.img} ${styles.imgMembership}`}
                          src={s.image}
                          alt=""
                          draggable={false}
                        />
                      </div>

                      <div className={styles.membersCopy}>
                        <p className={styles.pill}>Members Club</p>

                        <h3 className={styles.membersTitle}>Access, upgraded.</h3>

                        <p className={styles.membersText}>
                          Membership built to reduce friction and increase leverage — with
                          <strong> clarity</strong>, <strong>control</strong>, and <strong>execution</strong>.
                        </p>

                        <ul className={styles.membersList}>
                          <li><strong>Time leverage:</strong> less friction, faster decisions.</li>
                          <li><strong>Operator layer:</strong> learn inside real frameworks.</li>
                          <li><strong>Lifecycle:</strong> entry → performance → exit, aligned.</li>
                          <li><strong>Oversight:</strong> rules, documentation, governance.</li>
                        </ul>

                        <div className={styles.membersActions}>
                          <a
                            className={styles.primaryCta}
                            href="https://wa.me/48571517218?text=Hello%20Goldener%20Pfau%20%E2%80%94%20I%20want%20membership%20access."
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Request membership access
                          </a>

                          <span className={styles.secondaryHint}>Fast route via WhatsApp.</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.simpleWrap}>
                      <img className={`${styles.img} ${styles.imgHero}`} src={s.image} alt="" draggable={false} />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
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
                type="button"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
