"use client";

import { useEffect, useState } from "react";
import styles from "./Investments.module.css";

export default function Investments() {
  const [btcPrice, setBtcPrice] = useState(null);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    // Busca do preço do Bitcoin
    const fetchBTCPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
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

  // Animação do número de países (0 até 29)
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 29) {
        setCountries(count + 1);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.investmentsSection}>
      <div className={styles.investmentsContainer}>
        <h2 className={styles.investmentsTitle}>INVESTMENTS</h2>
        <p className={styles.investmentsSubtitle}>
          Secure and diversified financial opportunities for high-net-worth individuals.
        </p>

        {/* Preço do Bitcoin */}
        <div className={styles.btcContainer}>
          <span className={styles.btcLabel}>BTC/USD</span>
          <span className={styles.btcValue}>
            {btcPrice ? `$${btcPrice.toLocaleString("en-US")}` : "Loading..."}
          </span>
          <p className={styles.updateInfo}>Price updates every minute</p>
        </div>

        {/* Seções de Investimento */}
        <div className={styles.investmentOptions}>
          <div className={styles.option}>
            <h3>Hedge Funds & Crypto</h3>
            <p>
              Secure your wealth with high-yield hedge funds and cryptocurrency portfolios,
              managed by top-tier financial experts.
            </p>
          </div>
          <div className={styles.option}>
            <h3>Real Estate Investments</h3>
            <p>
              Invest in luxury properties, commercial assets, and high-value real estate with
              strong returns in global markets.
            </p>
          </div>
          <div className={styles.option}>
            <h3>Alternative Investments</h3>
            <p>
              Diversify your portfolio with art, fine wines, luxury collectibles, and emerging
              financial instruments.
            </p>
          </div>
          <div className={styles.option}>
            <h3>Capital Protection</h3>
            <p>
              Advanced financial structures designed to protect and grow your assets while
              minimizing risk in volatile markets.
            </p>
          </div>
        </div>

        {/* Expansão Global */}
        <div className={styles.globalExpansion}>
          <h3>Operating in</h3>
          <span className={styles.countriesNumber}>{countries}</span>
          <p className={styles.countriesText}>countries worldwide</p>
        </div>
      </div>
    </section>
  );
}
