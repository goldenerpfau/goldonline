'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import styles from './page.module.scss';
import { LOCALES, getDictionary, type Locale } from './i18n/translations';

type Service = {
  id: keyof ReturnType<typeof getDictionary>['services']['items'];
  slug: string;
  image: string;
  featured?: boolean;
  status: 'live' | 'soon';
};

// status reflects what is actually bookable today: Real Estate and Private Cars are
// live end-to-end; every other category is coordinated by request while we complete
// each market's operational and regulatory prerequisites. Keep this in sync with the
// app/backend's Configuration.categoryLaunch flags rather than editorializing per launch.
// Titles and descriptions live in ./i18n/translations.ts, keyed by `id`.
const services: Service[] = [
  { id: 'real-estate', slug: 'real-estate', image: '/images/img12.jpg', featured: true, status: 'live' },
  { id: 'private-cars', slug: 'private-cars', image: '/images/img1.jpg', status: 'live' },
  { id: 'yachts-boats', slug: 'yachts-boats', image: '/images/img14.jpg', status: 'soon' },
  { id: 'private-jets', slug: 'private-jets', image: '/images/img19.jpg', featured: true, status: 'soon' },
  { id: 'hotels-stays', slug: 'hotels-stays', image: '/images/img18.jpg', status: 'soon' },
  { id: 'concierge', slug: 'concierge', image: '/images/img4.jpg', status: 'soon' },
  { id: 'membership', slug: 'membership', image: '/images/gold-texture.jpg', status: 'live' },
  { id: 'global-assistance', slug: 'global-assistance', image: '/images/img17.jpg', status: 'soon' },
];

const platformShowcaseImages = ['/images/img29.jpg', '/images/img30.jpg', '/images/img31.jpg', '/images/img32.jpg', '/images/img33.jpg', '/images/img34.jpg', '/images/img35.jpg'];

const membershipPeekImages = ['/images/img53.jpg', '/images/img51.jpg', '/images/img52.jpg'];

const galleryImages = [
  { src: '/images/img26.jpg' },
  { src: '/images/img23.jpg' },
  { src: '/images/img22.jpg' },
  { src: '/images/img25.jpg' },
  { src: '/images/img9.jpg' },
  { src: '/images/img28.jpg' },
  { src: '/images/img24.jpg' },
  { src: '/images/img27.jpg' },
];

const LOCALE_STORAGE_KEY = 'gp-locale';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const dict = getDictionary(locale);
  const [activeScreen, setActiveScreen] = useState(0);
  const [revealsEnabled, setRevealsEnabled] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [filmPaused, setFilmPaused] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setFilmPaused(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    if (filmPaused) video.pause();
    else video.play().catch(() => setFilmPaused(true));
  }, [filmPaused]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      if (timer) clearInterval(timer);
      if (!preference.matches) {
        timer = setInterval(() => {
          if (!document.hidden) setActiveScreen((screen) => (screen + 1) % platformShowcaseImages.length);
        }, 4500);
      }
    };
    sync();
    preference.addEventListener('change', sync);
    return () => { if (timer) clearInterval(timer); preference.removeEventListener('change', sync); };
  }, []);


  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored && LOCALES.some((item) => item.code === stored)) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const changeLocale = (next: Locale) => {
    setLocale(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  };

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    setRevealsEnabled(true);
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -24px 0px' },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const membershipCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = membershipCanvasRef.current;
    const ctx = canvas?.getContext('2d');
    const parent = canvas?.parentElement;
    if (!canvas || !ctx || !parent) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let raf = 0;

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    const seedNodes = () => {
      const count = width < 640 ? 16 : 32;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    };

    resize();

    const LINK_DIST = 150;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(215, 180, 106, ${(1 - dist / LINK_DIST) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.fillStyle = 'rgba(255, 236, 168, .55)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    draw();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <main className={styles.page} data-enhanced={revealsEnabled}>

      <section id="top" className={styles.hero}>
        <video ref={heroVideoRef} className={styles.heroVideo} src="/indoindo.mp4" poster="/hero-poster.jpg" autoPlay muted loop playsInline aria-hidden="true" />
        <div className={styles.heroVeil} />
        <label className={styles.heroLanguage}>
          <span className={styles.srOnly}>{dict.languageSwitcher.ariaLabel}</span>
          <select aria-label={dict.languageSwitcher.ariaLabel} value={locale} onChange={(event) => changeLocale(event.target.value as Locale)}>
            {LOCALES.map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}
          </select>
        </label>
        
        <div className={styles.heroInner}>
          <h1 className={styles.heroSignature}><span>Goldener Pfau</span><span>Qualität auf Goldbasis</span></h1>
          <p className={styles.heroCopy}>{dict.hero.copy}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#services">{dict.hero.ctaSecondary}<span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section id="services" className={styles.sectionBlock}>
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.eyebrow}>{dict.services.eyebrow}</p>
          <h2>{dict.services.title}</h2>
          <p>{dict.services.copy}</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const copy = dict.services.items[service.id];
            return (
              <article
                className={`${styles.serviceCard} ${service.featured ? styles.serviceWide : ''}`}
                key={service.id}
                data-reveal
                style={{ transitionDelay: `${Math.min(index * 55, 260)}ms` }}
              >
                <Image src={service.image} alt={`${copy.title} service`} fill sizes="(max-width: 768px) 100vw, 50vw" />
                <div className={styles.serviceOverlay} />
                <span
                  className={`${styles.serviceStatus} ${service.status === 'live' ? styles.serviceStatusLive : styles.serviceStatusSoon}`}
                >
                  {service.status === 'live' ? dict.services.statusLive : dict.services.statusSoon}
                </span>
                <div className={styles.serviceContent}>
                  <h3>{copy.title}</h3>
                  <p>{copy.description}</p>
                </div>
              </article>
            );
          })}
          <article
            className={`${styles.serviceCard} ${styles.serviceWide} ${styles.serviceBrand}`}
            data-reveal
            style={{ transitionDelay: '280ms' }}
          >
            <video className={styles.serviceBrandVideo} src="/indoindo.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          </article>
        </div>
      </section>

      <section id="platform" className={styles.platformSection}>
        <div className={styles.platformText} data-reveal>
          <p className={styles.eyebrow}>{dict.platform.eyebrow}</p>
          <h2>{dict.platform.title}</h2>
          <p>{dict.platform.copy}</p>
          <div className={styles.featureList}>
            {dict.platform.features.map((feature, index) => (
              <span key={index} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>{feature}</span>
            ))}
          </div>
        </div>
        <div className={styles.deviceStage} data-reveal>
          <div className={styles.iphoneMock}>
            <span className={styles.iphoneButtonPower} aria-hidden="true" />
            <span className={styles.iphoneButtonVolUp} aria-hidden="true" />
            <span className={styles.iphoneButtonVolDown} aria-hidden="true" />
            <div className={styles.iphoneFrame}>
              {platformShowcaseImages.map((src, index) => (
                <div
                  className={styles.iphoneSlide}
                  key={src}
                  data-active={index === activeScreen}
                >
                  <Image src={src} alt="" fill sizes="(max-width: 640px) 280px, 320px" />
                </div>
              ))}
            </div>
            <span className={styles.iphoneCaption}>{dict.platform.eyebrow}</span>
          </div>
        </div>
      </section>

      <section className={styles.reachSection}>
        <div className={styles.reachCopy} data-reveal>
          <p className={styles.eyebrow}>{dict.reach.eyebrow}</p>

          <h2 className={styles.reachTitle}>
            <span>{dict.reach.titleLine1}</span>
            <span>{dict.reach.titleLine2}</span>
          </h2>

          <p>{dict.reach.copy}</p>

          <div className={styles.reachMarkets}>
            {dict.reach.markets.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          <div className={styles.capabilityMatrix}>
            {dict.reach.capabilities.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className={styles.reachVisual} data-reveal>
          <div className={styles.transparentAccess}>
            <span className={styles.accessGlow} aria-hidden="true" />
            <span className={styles.accessLineOne} aria-hidden="true"><i /></span>
            <span className={styles.accessLineTwo} aria-hidden="true"><i /></span>
            <span className={styles.accessLineThree} aria-hidden="true"><i /></span>
            <span className={styles.accessLineFour} aria-hidden="true"><i /></span>

            <div className={styles.transparentLogo}>
              <Image
                className={styles.transparentLogoImage}
                /* Add the provided full gold logo image to /public as /logopfau-full.png */
                src="/logopfau-full.png"
                alt="Goldener Pfau"
                width={520}
                height={360}
              />
            </div>
          </div>

          <div className={styles.reachSignature}>
            <strong>{dict.reach.signatureStrong}</strong>
            <span>{dict.reach.signatureCopy}</span>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processHeader} data-reveal>
          <p className={styles.eyebrow}>{dict.process.eyebrow}</p>
          <h2>{dict.process.title}</h2>
          <p>{dict.process.copy}</p>
        </div>

        <div className={styles.protocolGrid}>
          {dict.process.steps.map((item, index) => (
            <article
              key={index}
              className={styles.protocolCard}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className={styles.protocolAccent} aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="membership" className={styles.fundSection}>
        <canvas ref={membershipCanvasRef} className={styles.fundMolecules} aria-hidden="true" />

        <div className={styles.fundIntro} data-reveal>
          <p className={styles.eyebrow}>{dict.membership.eyebrow}</p>
          <span className={styles.fundStatusBadge}>{dict.membership.badge}</span>
          <h2>{dict.membership.title}</h2>
          <p>{dict.membership.intro}</p>
          <p className={styles.disclaimer}>{dict.membership.disclaimer}</p>
        </div>

        <div className={styles.fundVisual} data-reveal style={{ transitionDelay: '100ms' }}>
          <div className={styles.fundVisualMosaic}>
            <div className={`${styles.fundVisualTile} ${styles.fundVisualTileMain}`}>
              <Image
                src={membershipPeekImages[0]}
                alt="Goldener Pfau Membership"
                fill
                sizes="(max-width: 1240px) 56vw, 28vw"
              />
              <div className={styles.fundVisualOverlay} />
            </div>
            <div className={styles.fundVisualTile}>
              <Image src={membershipPeekImages[1]} alt="" fill sizes="(max-width: 1240px) 36vw, 18vw" />
              <div className={styles.fundVisualOverlay} />
            </div>
            <div className={styles.fundVisualTile}>
              <Image src={membershipPeekImages[2]} alt="" fill sizes="(max-width: 1240px) 36vw, 18vw" />
              <div className={styles.fundVisualOverlay} />
            </div>
          </div>
          <div className={styles.fundVisualCaption}>
            <strong>{dict.membership.sceneStrong}</strong>
            <p>{dict.membership.sceneCopy}</p>
          </div>
        </div>

        <div className={styles.fundNotes}>
          {dict.membership.principles.map((item, index) => (
            <article
              key={index}
              data-reveal
              style={{ transitionDelay: `${220 + index * 80}ms` }}
            >
              <span className={styles.fundNoteIndex} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <div className={styles.galleryCopy} data-reveal>
            <p className={styles.eyebrow}>{dict.gallery.eyebrow}</p>
            <h2>{dict.gallery.title}</h2>
            <p>{dict.gallery.copy}</p>
          </div>
          <div className={styles.galleryMeta} data-reveal style={{ transitionDelay: '110ms' }}>
            <span>{dict.gallery.metaLabel}</span>
            <p>{dict.gallery.metaCopy}</p>
          </div>
        </div>

        <div className={styles.galleryMosaic}>
          {galleryImages.map((image, index) => {
            const copy = dict.gallery.items[index];
            return (
              <figure
                key={`${image.src}-${index}`}
                className={`${styles.galleryCard} ${styles[`galleryCard${index + 1}`]}`}
                data-reveal
                style={{ transitionDelay: `${Math.min(index * 90, 520)}ms` }}
              >
                <Image
                  src={image.src}
                  alt={`Goldener Pfau — ${copy.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <figcaption>
                  <span>{copy.tag}</span>
                  <strong>{copy.title}</strong>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.eyebrow}>{dict.trust.eyebrow}</p>
          <h2>{dict.trust.title}</h2>
          <p>{dict.trust.copy}</p>
        </div>
        <div className={styles.trustGrid}>
          {dict.trust.items.map((item, index) => (
            <article key={index} data-reveal style={{ transitionDelay: `${index * 55}ms` }}>
              <span aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.ctaSection} data-reveal>
        <div>
          <p className={styles.eyebrow}>{dict.contact.eyebrow}</p>
          <h2>{dict.contact.title}</h2>
          <p>{dict.contact.copy}</p>
        </div>
        <div className={styles.ctaActions}>
          <a className={styles.primaryButton} href="https://www.instagram.com/goldenerpfau" target="_blank" rel="noreferrer">{dict.contact.instagram}</a>
          <a className={styles.secondaryButton} href="mailto:contact@goldenerpfau.com?subject=Private%20access%20request%20-%20Goldener%20Pfau">{dict.contact.email}</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="/" onClick={scrollToTop} aria-label={dict.nav.backToTopAriaLabel}>
          <Image src="/logopfau.png" alt="Goldener Pfau symbol" width={44} height={44} />
        </a>
        <strong>Goldener Pfau</strong>
        <p>Goldener Pfau Qualität auf Goldbasis · {dict.footer.taglineDescriptor}</p>
        <nav className={styles.chapterNav} aria-label="Main navigation">
          <a href="#services">{dict.nav.services}</a>
          <a href="#platform">{dict.nav.platform}</a>
          <a href="#membership">{dict.nav.membership}</a>
          <a href="#contact">{dict.nav.contact}</a>
        </nav>

        <nav className={styles.footerLinks} aria-label="Legal">
          <a href="/privacy">{dict.footer.privacy}</a>
          <a href="/terms">{dict.footer.terms}</a>
          <a href="/support">{dict.footer.support}</a>
        </nav>
      </footer>
    </main>
  );
}
