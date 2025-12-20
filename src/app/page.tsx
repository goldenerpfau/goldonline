'use client';
import styles from './page.module.scss';
import Image from 'next/image';
import { Cinzel, Montserrat } from 'next/font/google';
import Globe from './components/Globe';
import Titles from './components/Projects/titles';
import AnimatedCounter from './components/Projects/AnimatedCounter';
import Parallax from './components/Projects/Parallax';
import ModernSection from './components/Projects/ModernSection';
import Investments from './components/Investments/Investments';

// =====================
// FONTS
// =====================
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500'] });

// =====================
// PROJECT DATA
// =====================
type Project = {
  title: string;
  description: string;
  speed: number;
};

const projectData: Project[] = [
  { title: 'Villages', description: 'Next-Gen HMI without driving experience.', speed: 0.5 },
  { title: 'Yachts', description: 'Next-Gen HMI without driving experience.', speed: 0.5 },
  { title: 'Private Jets', description: 'Future of UFC ecosystem.', speed: 0.5 },
  { title: 'Concierge', description: 'Design language Lincoln Zephyr.', speed: 0.67 },
  { title: 'VIP Events', description: 'Massive Royal Caribbean ecosystem.', speed: 0.8 },
  { title: 'Partner Programs', description: 'Massive Royal Caribbean ecosystem.', speed: 1.2 },
  { title: 'Fund of Investments', description: 'Product for 1M+ sleepers.', speed: 0.8 },
  { title: 'Institute', description: 'Fantasy Football in global context.', speed: 0.8 },
];

// =====================
// PAGE
// =====================
export default function Home() {
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header} />

      {/* HERO */}
      <main className={styles.main}>
        <div className={styles.contents}>
          <h1 className={`${styles.heroTitle} ${cinzel.className}`}>Goldener Pfau</h1>

          <div className={styles.buttons}>
            <button
              className={`${styles.heroButton} ${montserrat.className}`}
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              BY ALEXANDRE A. A.
            </button>
          </div>
        </div>
      </main>

      {/* SERVICES */}
      <ModernSection
        id="services"
        carouselImages={[
          { src: '/images/carousel/1.jpg' },
          { src: '/images/carousel/2.jpg' },
          { src: '/images/carousel/3.jpg' },
          { src: '/images/carousel/4.jpg' },
          { src: '/images/carousel/5.jpg' },
        ]}
      />

      {/* VIDEO */}
      <section id="video" className={styles.videoSection}>
        <video src="/indoindo.mp4" autoPlay muted loop className={styles.video} />
      </section>

      {/* GLOBE + PROJECTS */}
      <section className={`${styles.globeSection} ${montserrat.className}`}>
        <div className={styles.globeWrapper}>
          <Globe />
        </div>
        <div className={styles.projectTitlesWrapper}>
          <Titles data={projectData} setSelectedProject={() => {}} />
        </div>
        <div className={styles.counterWrapper}>
          <AnimatedCounter />
        </div>
      </section>

      {/* PARALLAX */}
      <section className={styles.parallaxSection}>
        <Parallax />
      </section>

      {/* INVESTMENTS (MODERNO) */}
      <Investments />

      {/* FOOTER */}
      <footer className={styles.footer}>
        <button
          onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <Image src="/logopfau.png" alt="Goldener Pfau Logo" width={90} height={90} />
        </button>
        <p>© 2025 Goldener Pfau. All rights reserved.</p>
      </footer>
    </div>
  );
}
