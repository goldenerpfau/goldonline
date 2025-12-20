'use client';

import { useEffect, useRef } from 'react';
import styles from './Parallax.module.scss';

const IMAGE_COUNT = 19;
const TOTAL_IMAGES = IMAGE_COUNT * 3;

export default function Parallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const scrollSpeed = useRef(1.2);
  const dragInfluence = useRef(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const getMiddleScroll = () => {
    const container = containerRef.current;
    return container
      ? (container.scrollWidth - container.clientWidth) / 2
      : 0;
  };

  // Autoscroll contínuo para a esquerda
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const middleScroll = getMiddleScroll();
    container.scrollLeft = middleScroll;

    autoScrollRef.current = setInterval(() => {
      const totalScroll = container.scrollWidth;
      const maxScrollLeft = totalScroll - container.clientWidth;

      container.scrollLeft += (scrollSpeed.current + dragInfluence.current);

      // Se chegar próximo ao fim, volta ao meio
      if (container.scrollLeft <= 10 || container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollLeft = getMiddleScroll();
      }

      // Suaviza a influência do arraste
      if (!isDragging.current && dragInfluence.current !== 0) {
        dragInfluence.current *= 0.9;
        if (Math.abs(dragInfluence.current) < 0.05) dragInfluence.current = 0;
      }
    }, 30);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  // Arraste com influência dinâmica
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      container.classList.add(styles.dragging);
      startX.current = e.clientX;
      scrollLeft.current = container.scrollLeft;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.clientX;
      const walk = (x - startX.current) * 1.5;
      container.scrollLeft = scrollLeft.current - walk;

      dragInfluence.current = (walk / 40) * -1;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      container.classList.remove(styles.dragging);
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mouseleave', onMouseUp);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mouseleave', onMouseUp);
    };
  }, []);

  // Scroll por botões com limite central
  const scrollByAmount = (amount: number) => {
    const container = containerRef.current;
    if (!container) return;

    let target = container.scrollLeft + amount;

    // Evita ir para os extremos
    const minScroll = 100;
    const maxScroll = container.scrollWidth - container.clientWidth - 100;
    const middleScroll = getMiddleScroll();

    if (target <= minScroll || target >= maxScroll) {
      target = middleScroll;
    }

    const step = (target - container.scrollLeft) / 20;
    let current = 0;

    const smoothScroll = () => {
      if (current < 20) {
        container.scrollLeft += step;
        current++;
        requestAnimationFrame(smoothScroll);
      }
    };

    requestAnimationFrame(smoothScroll);
  };

  return (
    <div className={styles.parallaxWrapper}>
      <button
        className={`${styles.navButton} ${styles.left}`}
        onClick={() => scrollByAmount(-400)}
      >
        ‹
      </button>

      <section className={styles.parallaxSection} ref={containerRef}>
        {Array.from({ length: TOTAL_IMAGES }).map((_, i) => {
          const index = i % IMAGE_COUNT;
          return (
            <div
              key={i}
              className={styles.imageBlock}
              style={{ backgroundImage: `url(/images/img${index + 1}.jpg)` }}
            />
          );
        })}
      </section>

      <button
        className={`${styles.navButton} ${styles.right}`}
        onClick={() => scrollByAmount(400)}
      >
        ›
      </button>
    </div>
  );
}
