'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Investments.module.scss';

// --- Dados para as opções de investimento ---
const investmentOptionsData = [
  {
    title: 'Hedge Funds & Crypto',
    description: 'Secure your wealth with high-yield hedge funds and cryptocurrency portfolios, managed by top-tier financial experts.',
  },
  {
    title: 'Real Estate Investments',
    description: 'Invest in luxury properties, commercial assets, and high-value real estate with strong returns in global markets.',
  },
  {
    title: 'Alternative Investments',
    description: 'Diversify your portfolio with art, fine wines, luxury collectibles, and emerging financial instruments.',
  },
  {
    title: 'Capital Protection',
    description: 'Advanced financial structures designed to protect and grow your assets while minimizing risk in volatile markets.',
  },
];

// --- Subcomponente Reutilizável para Animar Números ---
type AnimatedNumberProps = {
  endValue: number;
  duration?: number;
};

function AnimatedNumber({ endValue, duration = 2500 }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
            const currentProgress = Math.min(progress / duration, 1);
            const easedProgress = easeOutCubic(currentProgress);
            setCount(Math.floor(easedProgress * endValue));
            if (currentProgress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect(); // Anima apenas uma vez
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endValue, duration]);

  return <span ref={ref} className={styles.countriesNumber}>{count}</span>;
}

// --- Componente Principal ---
export default function Investments() {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchBTCPrice = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        const data = await response.json();
        setBtcPrice(data.bitcoin.usd);
      } catch (error) {
        console.error("Error fetching BTC price:", error);
      }
    };

    fetchBTCPrice();
    const interval = setInterval(fetchBTCPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.investmentsSection}>
      <div className={styles.investmentsContainer}>
        <h2 className={styles.investmentsTitle}>INVESTMENTS</h2>
        <p className={styles.investmentsSubtitle}>
          Secure and diversified financial opportunities for high-net-worth individuals.
        </p>

        <div className={styles.btcContainer}>
          <span className={styles.btcLabel}>BTC/USD</span>
          <span className={styles.btcValue}>
            {btcPrice ? `$${btcPrice.toLocaleString("en-US")}` : "Loading..."}
          </span>
          <p className={styles.updateInfo}>Price updates every minute</p>
        </div>

        <div className={styles.investmentOptions}>
          {investmentOptionsData.map((option) => (
            <div key={option.title} className={styles.option}>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.globalExpansion}>
          <h3>Operating in</h3>
          <AnimatedNumber endValue={29} />
          <p className={styles.countriesText}>countries worldwide</p>
        </div>
      </div>
    </section>
  );
}