'use client';

import { useEffect, useRef, useState } from 'react';
// If you don't have a CSS module type definition, add this file:
// a:\cancun\goldmenu\src\app\components\Projects\animatedCounter.module.scss.d.ts
// declare const styles: { [key: string]: string }; export default styles;
import styles from './AnimatedCounter.module.scss'; // ✅ Nome corrigido




export default function AnimatedCounter() {
  const [countryCount, setCountryCount] = useState(0);
  const [continentCount, setContinentCount] = useState(0);
  const [hourCount, setHourCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
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
    <span ref={ref} className={styles.counter}>

      {countryCount} Countries | Available on {continentCount} Continents | {hourCount}/7 Global Support 
    </span>
  );
}
