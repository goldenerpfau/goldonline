import Image from 'next/image';
import type { ReactNode } from 'react';
import styles from './legal-shared.module.scss';

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro?: string;
  children: ReactNode;
};

export default function LegalLayout({ eyebrow, title, updated, intro, children }: LegalLayoutProps) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Goldener Pfau home">
          <span className={styles.brandMark}>
            <Image src="/logopfau.png" alt="Goldener Pfau symbol" width={30} height={30} />
          </span>
          <span className={styles.brandName}>Goldener Pfau</span>
        </a>
        <a className={styles.backLink} href="/">← Back to site</a>
      </header>

      <div className={styles.hero}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.updated}>Last updated: {updated}</p>
        {intro ? <p className={styles.intro}>{intro}</p> : null}
      </div>

      <div className={styles.body}>{children}</div>

      <footer className={styles.footer}>
        <strong>Goldener Pfau</strong>
        <nav className={styles.footerLinks} aria-label="Legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/support">Support</a>
        </nav>
        <p className={styles.footerCopy}>Goldener Pfau Sp. z o.o. · KRS 0001054686 · Poland</p>
      </footer>
    </main>
  );
}
