'use client';

import { useEffect, useState } from 'react';
import styles from './Investments.module.scss';

type Insight = {
  title: string;
  description: string;
  tag: string;
};

const insights: Insight[] = [
  {
    title: 'Crypto & Hedge Strategies',
    description: 'Active portfolio management across BTC, ETH and liquid yield structures — built for volatility, designed for protection.',
    tag: 'CRYPTO',
  },
  {
    title: 'Gold & Capital Preservation',
    description: 'Hard-asset allocation and structured exposure for long-term protection — optimized for downside resilience.',
    tag: 'GOLD',
  },
  {
    title: 'Public Markets (Stocks)',
    description: 'Selective equity exposure with risk controls, tactical entries, and macro-aware positioning.',
    tag: 'STOCKS',
  },
  {
    title: 'Private Mobility Assets',
    description: 'Jets, helicopters and premium mobility assets with usage + value retention logic — not just lifestyle, strategy.',
    tag: 'AVIATION',
  },
  {
    title: 'Yachts, Clubs & Lifestyle Equity',
    description: 'High-end assets and membership ecosystems that preserve access, status and long-term optionality.',
    tag: 'LIFESTYLE',
  },
  {
    title: 'Concierge-Led Deal Flow',
    description: 'Curated opportunities sourced via network — access-first, due-diligence driven.',
    tag: 'CONCIERGE',
  },
];

export default function Investments() {
  const [btc, setBtc] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;

    const fetchBTC = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
          { cache: 'no-store' }
        );
        const data = await res.json();
        if (!alive) return;
        setBtc(data?.bitcoin?.usd ?? null);
      } catch {
        if (!alive) return;
        setBtc(null);
      }
    };

    fetchBTC();
    const t = setInterval(fetchBTC, 60000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  return (
    <section className={styles.section} id="investments">
      <div className={styles.chart} aria-hidden="true">
        <iframe
          src="https://s.tradingview.com/widgetembed/?symbol=BITSTAMP%3ABTCUSD&interval=1&theme=dark"
          className={styles.iframe}
          allowFullScreen
          title="TradingView BTCUSD"
        />
        <div className={styles.chartOverlay} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>INVESTMENTS</div>
          <h2 className={styles.title}>Markets, assets and access — engineered for scale.</h2>

          <div className={styles.priceRow}>
            <span className={styles.pair}>BTC / USD</span>
            <span className={styles.price}>
              {btc ? `$${btc.toLocaleString('en-US')}` : 'Loading...'}
            </span>
            <span className={styles.micro}>Updates every minute</span>
          </div>
        </div>

        <div className={styles.grid}>
          {insights.map((it) => (
            <article key={it.title} className={styles.card}>
              <div className={styles.tag}>{it.tag}</div>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardText}>{it.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
