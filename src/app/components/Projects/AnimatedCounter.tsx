'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedCounter.module.scss';

export default function AnimatedCounter() {
  const [countryCount, setCountryCount] = useState(0);
  const [continentCount, setContinentCount] = useState(0);
  const [hourCount, setHourCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) setHasAnimated(true);
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let currentCountries = 0;
    let currentContinents = 0;
    let currentHours = 0;

    const targetCountries = 31;
    const targetContinents = 3;
    const targetHours = 24;

    const intervalCountries = setInterval(() => {
      currentCountries += 1;
      if (currentCountries >= targetCountries) {
        currentCountries = targetCountries;
        clearInterval(intervalCountries);
      }
      setCountryCount(currentCountries);
    }, 40);

    const intervalContinents = setInterval(() => {
      currentContinents += 1;
      if (currentContinents >= targetContinents) {
        currentContinents = targetContinents;
        clearInterval(intervalContinents);
      }
      setContinentCount(currentContinents);
    }, 600);

    const intervalHours = setInterval(() => {
      currentHours += 1;
      if (currentHours >= targetHours) {
        currentHours = targetHours;
        clearInterval(intervalHours);
      }
      setHourCount(currentHours);
    }, 60);

    return () => {
      clearInterval(intervalCountries);
      clearInterval(intervalContinents);
      clearInterval(intervalHours);
    };
  }, [hasAnimated]);

  return (
    <div ref={ref} className={styles.counter} aria-label="Global availability metrics">
      <span className={styles.metric}>
        <span className={styles.value}>{countryCount}</span>&nbsp;<span className={styles.label}>Countries</span>
      </span>

      <span className={styles.sep}>·</span>

      <span className={styles.metric}>
        <span className={styles.label}>Available on</span>&nbsp;<span className={styles.value}>{continentCount}</span>&nbsp;<span className={styles.label}>Continents</span>
      </span>

      <span className={styles.sep}>·</span>

      <span className={styles.metric}>
        <span className={styles.value}>{hourCount}/7</span>&nbsp;<span className={styles.label}>Global Support</span>
      </span>
    </div>
  );
}
