'use client';

import React, { useLayoutEffect, useMemo, useRef, useState, useEffect } from 'react';
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
        image: '/highlights/2.png',
        title: 'Impact, engineered.',
        description: 'Transparent governance. Real outcomes. Zero noise.',
      },
      {
        image: '/highlights/3.png',
        title: 'Membership is the gateway.',
        description: 'Time, clarity, and a structured path from entry to exit.',
      },
    ],
    []
  );

  const baseSlides = (slides?.length ? slides : defaultSlides).slice(0, 3);
  const N = baseSlides.length;

  const loopedSlides = useMemo(() => {
    if (N <= 1) return baseSlides;
    return [baseSlides[N - 1], ...baseSlides, baseSlides[0]];
  }, [baseSlides, N]);

  const [pos, setPos] = useState<number>(() => (N > 1 ? 1 : 0));
  const active = N > 1 ? ((pos - 1 + N) % N) : 0;

  const trackRef = useRef<HTMLDivElement | null>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);

  const snapNoAnim = useRef(false);
  const snappingGuard = useRef(false);

  const clampPos = (v: number) => {
    if (N <= 1) return 0;
    return Math.max(0, Math.min(v, N + 1));
  };

  const snapTo = (p: number) => {
    snapNoAnim.current = true;
    snappingGuard.current = true;
    setPos(p);
  };

  const goTo = (p: number) => setPos(clampPos(p));

  useEffect(() => {
    snapTo(N > 1 ? 1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [N]);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const noAnim = snapNoAnim.current;

    el.style.transition = noAnim ? 'none' : '';
    el.style.transform = `translate3d(${-pos * 100}%, 0, 0)`;

    if (noAnim) {
      snapNoAnim.current = false;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const t = trackRef.current;
          if (!t) return;
          t.style.transition = '';
          snappingGuard.current = false;
        });
      });
    }
  }, [pos]);

  const onTrackTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform') return;
    if (N <= 1) return;
    if (snappingGuard.current) return;

    if (pos === 0) snapTo(N);
    if (pos === N + 1) snapTo(1);
  };

  const beginDrag = (clientX: number) => {
    const el = trackRef.current;
    if (!el || N <= 1) return;

    isDown.current = true;
    startX.current = clientX;
    lastX.current = clientX;

    el.style.transition = 'none';
  };

  const moveDrag = (clientX: number) => {
    if (!isDown.current) return;
    const el = trackRef.current;
    if (!el || N <= 1) return;

    lastX.current = clientX;
    const dx = clientX - startX.current;
    el.style.transform = `translate3d(calc(${-pos * 100}% + ${dx}px), 0, 0)`;
  };

  const endDrag = () => {
    if (!isDown.current) return;
    isDown.current = false;

    const el = trackRef.current;
    if (!el || N <= 1) return;

    const dx = lastX.current - startX.current;
    const threshold = 60;

    el.style.transition = '';

    if (dx < -threshold) goTo(pos + 1);
    else if (dx > threshold) goTo(pos - 1);
    else goTo(pos);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (N <= 1) return;
    beginDrag(e.clientX);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };
  const onPointerMove = (e: React.PointerEvent) => moveDrag(e.clientX);
  const onPointerUp = (e: React.PointerEvent) => {
    endDrag();
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (N <= 1) return;
    const t = e.touches[0];
    if (!t) return;
    beginDrag(t.clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    moveDrag(t.clientX);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    if (t) lastX.current = t.clientX;
    endDrag();
  };

  return (
    <section id={id} className={styles.section}>
      <div className={styles.stars} />
      <div className={styles.vignette} />
      <div className={styles.gridlines} />
      <div className={styles.noise} />

      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <h2 className={styles.topTitle}>Get the highlights.</h2>
          <p className={styles.topSubtitle}>Premium execution — minimal noise, maximum control.</p>
        </div>

        <a className={styles.topLink} href="https://wa.me/48571517218" target="_blank" rel="noreferrer">
          Contact WhatsApp <span className={styles.arrow}>›</span>
        </a>
      </div>

      <div
        className={styles.carousel}
        role="region"
        aria-label="Highlights carousel"
        tabIndex={0}
        style={{ touchAction: 'pan-y' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div className={styles.track} ref={trackRef} onTransitionEnd={onTrackTransitionEnd}>
          {loopedSlides.map((s, i) => {
            const realIndex = N > 1 ? (i - 1 + N) % N : 0;

            return (
              <article
                key={`${i}-${s.image}`}
                className={`${styles.slide} ${realIndex === 0 ? styles.slideIntro : ''}`}
              >
                <header className={styles.slideHeader}>
                  <h3 className={styles.slideTitle}>{s.title}</h3>
                  {s.description && <p className={styles.slideDesc}>{s.description}</p>}
                </header>

                <div className={`${styles.media} ${realIndex === 1 ? styles.mediaShowStars : ''}`}>
                  <div className={styles.mediaStars} />
                  <div className={styles.hud}>
                    <span />
                    <span />
                    <span />
                  </div>

                  {realIndex === 1 ? (
                    <div className={styles.mediaGrid}>
                      <div className={styles.philanthropy}>
                        <div className={styles.pill}>PFAU INSTITUT</div>
                        <h4 className={styles.phTitle}>Ethical capital. Real-world outcomes.</h4>
                        <p className={styles.phText}>
                          Membership is structured to align incentives with responsibility — from due
                          diligence to execution.
                        </p>

                        <ul className={styles.phList}>
                          <li><strong>Documented process</strong> for every step.</li>
                          <li><strong>Transparent allocation</strong> and reporting.</li>
                          <li><strong>Measured impact</strong> through curated initiatives.</li>
                        </ul>

                        <div className={styles.metaRow}>
                          <div className={styles.metaCard}>
                            <p className={styles.metaKicker}>Structure</p>
                            <p className={styles.metaValue}>Process-first</p>
                          </div>
                          <div className={styles.metaCard}>
                            <p className={styles.metaKicker}>Oversight</p>
                            <p className={styles.metaValue}>Logged decisions</p>
                          </div>
                          <div className={styles.metaCard}>
                            <p className={styles.metaKicker}>Reporting</p>
                            <p className={styles.metaValue}>Readable summaries</p>
                          </div>
                        </div>

                        <p className={styles.phNote}>
                          A membership layer designed to keep execution clean — while contributing to
                          measurable, real initiatives.
                        </p>
                      </div>

                      <div className={styles.deviceWrap}>
                        <div className={styles.deviceGlow} />
                        <img className={`${styles.img} ${styles.imgTabletPortrait}`} src={s.image} alt="" draggable={false} />
                      </div>
                    </div>
                  ) : realIndex === 2 ? (
                    <div className={styles.membersGrid}>
                      <div className={styles.membersVisual}>
                        <img className={`${styles.img} ${styles.imgMembership}`} src={s.image} alt="" draggable={false} />
                      </div>

                      <div className={styles.membersCopy}>
                        <div className={styles.pill}>MEMBERS CLUB</div>
                        <h4 className={styles.membersTitle}>Access, curated.</h4>
                        <p className={styles.membersText}>
                          Built for speed with control. A membership layer that keeps everything{' '}
                          <strong>clear</strong>, <strong>documented</strong> and{' '}
                          <strong>repeatable</strong>.
                        </p>

                        <ul className={styles.membersList}>
                          <li><strong>Faster execution:</strong> fewer steps, cleaner approvals.</li>
                          <li><strong>Operator rules:</strong> process-first, not improvisation.</li>
                          <li><strong>Lifecycle clarity:</strong> entry → execution → exit.</li>
                          <li><strong>Governance by default:</strong> logs, rules, traceability.</li>
                        </ul>

                        <div className={styles.membersActions}>
                          <a className={styles.primaryCta} href="https://wa.me/48571517218" target="_blank" rel="noreferrer">
                            Request membership access
                          </a>
                          <span className={styles.secondaryHint}>Direct WhatsApp line.</span>
                        </div>

                        <div className={styles.membersFooter}>
                          <span className={styles.badgeDot} />
                          <p className={styles.membersNote}>Minimal interface. Maximum certainty.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.simpleWrap}>
                      <div className={styles.introStack}>
                        {/* ✅ wrapper que “cropa” o PNG no mobile */}
                        <div className={styles.heroCrop}>
                          <img className={`${styles.img} ${styles.imgHero}`} src={s.image} alt="" draggable={false} />
                        </div>

                        <p className={styles.introNote}>
                          <span className={styles.introDot} aria-hidden="true" />
                          Swipe to explore — Membership → Impact.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.controls} aria-label="Carousel controls">
        <div className={styles.dotsPill}>
          {baseSlides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => goTo(N > 1 ? i + 1 : 0)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
