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
  slides?: Slide[] | null;
};

function normalizePublicPath(input: string) {
  if (!input) return input;
  let p = input.trim();

  // remove accidental "public/" prefix (Next serves /public as /)
  p = p.replace(/^public\/+/, '/').replace(/^public\/\//, '/');

  // ensure it starts with /
  if (!p.startsWith('/') && !p.startsWith('http')) p = `/${p}`;

  // avoid double slashes
  p = p.replace(/\/{2,}/g, '/');

  return p;
}

export default function ModernSection({ id, slides }: Props) {
  const defaultSlides: Slide[] = useMemo(
    () => [
      {
        image: '/highlights/1.png?v=20251220-13',
        title: 'Built to feel effortless.',
        description: 'One experience. One language. Zero friction.',
      },
      {
        image: '/highlights/2.png?v=20251220-13',
        title: 'Proof over promise.',
        description: 'Impact with governance — tracked, verified, delivered.',
      },
      {
        image: '/highlights/3.png?v=20251220-13',
        title: 'Membership, refined.',
        description: 'Access with structure. Clarity from entry to exit.',
      },
    ],
    []
  );

  const data: Slide[] = useMemo(() => {
    const incoming = Array.isArray(slides) ? slides : [];

    if (incoming.length === 0) {
      return defaultSlides.map((s) => ({
        ...s,
        image: normalizePublicPath(s.image),
      }));
    }

    return incoming.map((s, i) => {
      const fallback = defaultSlides[i] ?? defaultSlides[0];
      return {
        image: normalizePublicPath(s.image || fallback.image),
        title: (s.title && s.title.trim()) || fallback.title,
        description:
          (typeof s.description === 'string' && s.description.trim()) || fallback.description,
      };
    });
  }, [slides, defaultSlides]);

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, data.length - 1);
  const safeIndex = Math.min(index, maxIndex);

  const dragging = useRef(false);
  const startX = useRef(0);
  const delta = useRef(0);
  const moved = useRef(false);

  const goPrev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));
  const goNext = () => setIndex((i) => (i === maxIndex ? 0 : i + 1));

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    moved.current = false;
    startX.current = e.clientX;
    delta.current = 0;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    delta.current = e.clientX - startX.current;
    if (Math.abs(delta.current) > 8) moved.current = true;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);

    const threshold = 70;
    if (delta.current > threshold) goPrev();
    else if (delta.current < -threshold) goNext();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  };

  const isImpactSlide = (img: string) => img.includes('/highlights/2.png');
  const isMembershipSlide = (img: string) => img.includes('/highlights/3.png');

  return (
    <section id={id} className={styles.section}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.gridlines} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <h2 className={styles.topTitle}>Get the highlights.</h2>
          <p className={styles.topSubtitle}>
            Premium execution — minimal noise, maximum control.
          </p>
        </div>

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
        role="region"
        aria-label="Highlights carousel"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className={styles.track} style={{ transform: `translateX(-${safeIndex * 100}%)` }}>
          {data.map((s, i) => (
            <article key={`${id}-slide-${i}`} className={styles.slide} aria-roledescription="slide">
              <header className={styles.slideHeader}>
                <p className={styles.slideTitle}>{s.title}</p>
                {s.description && <p className={styles.slideDesc}>{s.description}</p>}
              </header>

              <div className={`${styles.media} ${isImpactSlide(s.image) ? styles.mediaShowStars : ''}`}>
                <div className={styles.mediaStars} aria-hidden="true" />
                <div className={styles.hud} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                {isImpactSlide(s.image) ? (
                  <div className={styles.mediaGrid}>
                    <div className={styles.philanthropy}>
                      <p className={styles.pill}>Pfau Institut</p>

                      <h3 className={styles.phTitle}>Impact you can verify.</h3>

                      <p className={styles.phText}>
                        No slogans. Just a system built on <strong>governance</strong>, <strong>traceability</strong>,
                        and <strong>measured delivery</strong>.
                      </p>

                      <ul className={styles.phList}>
                        <li>
                          <strong>Governance:</strong> clear rules, documented decisions, audit-ready structure.
                        </li>
                        <li>
                          <strong>Traceability:</strong> actions linked to evidence — outcomes you can validate.
                        </li>
                        <li>
                          <strong>Execution:</strong> partner delivery with checkpoints and accountability.
                        </li>
                      </ul>

                      <div className={styles.metaRow}>
                        <div className={styles.metaCard}>
                          <p className={styles.metaKicker}>Standard</p>
                          <p className={styles.metaValue}>Audit-ready</p>
                        </div>
                        <div className={styles.metaCard}>
                          <p className={styles.metaKicker}>Reporting</p>
                          <p className={styles.metaValue}>Evidence-first</p>
                        </div>
                        <div className={styles.metaCard}>
                          <p className={styles.metaKicker}>Focus</p>
                          <p className={styles.metaValue}>Long-term</p>
                        </div>
                      </div>

                      <p className={styles.phNote}>
                        Responsibility isn’t a statement — it’s a standard.
                      </p>
                    </div>

                    <div className={styles.deviceWrap}>
                      <img
                        className={`${styles.img} ${styles.imgTabletPortrait}`}
                        src={s.image}
                        alt=""
                        draggable={false}
                      />
                      <div className={styles.deviceGlow} aria-hidden="true" />
                    </div>
                  </div>
                ) : isMembershipSlide(s.image) ? (
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

                      <h3 className={styles.membersTitle}>Access, curated.</h3>

                      <p className={styles.membersText}>
                        Built for speed with control.
                        A membership layer that keeps everything <strong>clear</strong>, <strong>documented</strong> and <strong>repeatable</strong>.
                      </p>

                      <ul className={styles.membersList}>
                        <li><strong>Faster execution:</strong> fewer steps, cleaner approvals.</li>
                        <li><strong>Operator rules:</strong> process-first, not improvisation.</li>
                        <li><strong>Lifecycle clarity:</strong> entry → execution → exit.</li>
                        <li><strong>Governance by default:</strong> logs, rules, traceability.</li>
                      </ul>

                      <div className={styles.membersActions}>
                        <a
                          className={styles.primaryCta}
                          href="https://wa.me/48571517218?text=Hello%20Goldener%20Pfau%20%E2%80%94%20I%20want%20membership%20access."
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (moved.current) e.preventDefault();
                          }}
                        >
                          Request membership access
                        </a>

                        <span className={styles.secondaryHint}>Direct WhatsApp line.</span>
                      </div>

                      <div className={styles.membersFooter}>
                        <span className={styles.badgeDot} aria-hidden="true" />
                        <p className={styles.membersNote}>
                          Minimal interface. Maximum certainty.
                        </p>
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
          ))}
        </div>
      </div>

      {data.length > 1 && (
        <div className={styles.controls}>
          <div className={styles.dotsPill} aria-label="Slides">
            {data.map((_, i) => (
              <button
                key={`${id}-dot-${i}`}
                type="button"
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
