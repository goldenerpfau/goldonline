'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import styles from './page.module.scss';

type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate',
    description: 'Private villas, residences and investment-grade property opportunities handled with discretion.',
    image: '/images/img12.jpg',
    featured: true,
  },
  {
    id: 'private-cars',
    slug: 'private-cars',
    title: 'Private Cars',
    description: 'Premium rentals, acquisitions and mobility coordination across selected destinations.',
    image: '/images/img1.jpg',
  },
  {
    id: 'yachts-boats',
    slug: 'yachts-boats',
    title: 'Yachts & Boats',
    description: 'Coastal access, yacht arrangements and nautical opportunities through a curated network.',
    image: '/images/img14.jpg',
  },
  {
    id: 'private-jets',
    slug: 'private-jets',
    title: 'Private Jets',
    description: 'Aviation requests coordinated through selected operators with controlled execution.',
    image: '/images/img19.jpg',
    featured: true,
  },
  {
    id: 'hotels-stays',
    slug: 'hotels-stays',
    title: 'Hotels & Stays',
    description: 'Premium stays, private villas and hospitality arrangements for business and leisure.',
    image: '/images/img18.jpg',
  },
  {
    id: 'concierge',
    slug: 'concierge',
    title: 'Concierge',
    description: 'Bespoke reservations, experiences and personal assistance without operational noise.',
    image: '/images/img4.jpg',
  },
  {
    id: 'investments',
    slug: 'investments',
    title: 'Investments',
    description: 'Private allocation thinking through Pfau Fund and selected real-world asset exposure.',
    image: '/images/gold-texture.jpg',
  },
  {
    id: 'global-assistance',
    slug: 'global-assistance',
    title: 'Global Assistance',
    description: 'Cross-border coordination for clients moving between countries, assets and appointments.',
    image: '/images/img17.jpg',
  },
];

const privateAccess = [
  {
    number: '01',
    title: 'Private Request',
    text: 'A direct request is received with destination, asset category, timing, preferences and operational constraints.',
  },
  {
    number: '02',
    title: 'Curated Selection',
    text: 'The request is filtered through selected partners, verified availability and a refined shortlist.',
  },
  {
    number: '03',
    title: 'Discreet Coordination',
    text: 'Terms, logistics, schedules and local execution are coordinated privately before confirmation.',
  },
  {
    number: '04',
    title: 'Confirmation & Delivery',
    text: 'The arrangement is confirmed with clear next steps, controlled communication and premium handling.',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    text: 'Support remains available for changes, additional requests and cross-category coordination.',
  },
];

const fundAssets = ['Gold', 'Real Estate', 'Vehicles', 'BTC', 'ETH', 'USD'];

const fundPrinciples = [
  ['Asset-backed thesis', 'Exposure anchored in tangible value, scarcity, liquidity and long-term utility.'],
  ['Private allocation logic', 'A curated structure for selected clients seeking alternative positioning.'],
  ['Cross-market view', 'Real-world and digital assets considered through a disciplined private framework.'],
];

const platformHighlights = [
  { src: '/highlights/1.png', label: 'Goldener Pfau private platform preview one' },
  { src: '/highlights/2.png', label: 'Goldener Pfau private platform preview two' },
  { src: '/highlights/3.png', label: 'Goldener Pfau private platform preview three' },
];

const reachMarkets = ['Europe', 'Middle East', 'Americas', 'Private network'];

const reachCapabilities = [
  'Residences',
  'Aviation',
  'Yachts',
  'Hotels',
  'Mobility',
  'Concierge',
  'Asset access',
];

const gallery = [
  '/images/img15.jpg',
  '/images/img12.jpg',
  '/images/img14.jpg',
  '/images/img19.jpg',
  '/images/img9.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
  '/images/img11.jpg',
];

const trustItems = [
  ['Registered company structure', 'Goldener Pfau operates through a formal European company framework.'],
  ['Professional handling', 'Requests are managed through structured communication, documented steps and clear coordination.'],
  ['Tailored assistance', 'Each case is evaluated individually instead of being pushed into a generic package.'],
  ['Private network', 'Access is developed through selected operators, property contacts and specialist partners.'],
  ['Discreet communication', 'Client information, routes, preferences and transaction details are handled privately.'],
  ['Cross-category service', 'Travel, mobility, property, stays, assets and concierge can be coordinated from one private desk.'],
];

export default function Home() {
  useEffect(() => {
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
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Goldener Pfau home">
          <span className={styles.brandMark}>
            <Image src="/logopfau.png" alt="Goldener Pfau symbol" width={34} height={34} priority />
          </span>
          <span className={styles.brandName}>Goldener Pfau</span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#platform">Platform</a>
          <a href="#fund">Pfau Fund</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className={styles.headerCta}
          href="mailto:contact@goldenerpfau.com?subject=Private%20request%20-%20Goldener%20Pfau"
        >
          Private Access
        </a>
      </header>

      <section id="top" className={styles.hero}>
        <video className={styles.heroVideo} src="/indoindo.mp4" autoPlay muted loop playsInline />
        <div className={styles.heroVeil} />
        <div className={styles.heroTexture} />
        <div className={styles.heroInner} data-reveal>
          <p className={styles.eyebrow}>Goldener Pfau Qualität auf Goldbasis · Private luxury coordination</p>
          <h1>Exceptional access, privately arranged.</h1>
          <p className={styles.heroCopy}>
            A discreet international desk for residences, mobility, yachts, aviation, premium stays, concierge requests and private allocation strategy.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="mailto:contact@goldenerpfau.com?subject=Private%20request%20-%20Goldener%20Pfau">
              Start a private request
            </a>
            <a className={styles.secondaryButton} href="#services">Explore the universe</a>
          </div>
        </div>
        <aside className={styles.heroSignal} aria-label="Goldener Pfau positioning" data-reveal>
          <span>Private desk</span>
          <strong>Assets · Travel · Stays · Investments</strong>
          <p>Selected access. Controlled coordination. Quiet execution.</p>
        </aside>
      </section>

      <section id="services" className={styles.sectionBlock}>
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.eyebrow}>Service universe</p>
          <h2>One private standard across premium categories.</h2>
          <p>
            Each service is structured as an access layer: discreet intake, curated options, verified coordination and refined delivery.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <article
              className={`${styles.serviceCard} ${service.featured ? styles.serviceWide : ''}`}
              key={service.id}
              data-reveal
              style={{ transitionDelay: `${Math.min(index * 55, 260)}ms` }}
            >
              <Image src={service.image} alt={`${service.title} service`} fill sizes="(max-width: 768px) 100vw, 50vw" />
              <div className={styles.serviceOverlay} />
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="platform" className={styles.platformSection}>
        <div className={styles.platformText} data-reveal>
          <p className={styles.eyebrow}>Private platform</p>
          <h2>A controlled interface for access, bookings and requests.</h2>
          <p>
            The platform is prepared to centralize private catalogues, concierge requests, booking history, Pfau Fund visibility, asset access and user profiles.
          </p>
          <div className={styles.featureList}>
            <span>Bookings</span>
            <span>Private catalogue</span>
            <span>Concierge requests</span>
            <span>Pfau Fund area</span>
            <span>Asset access</span>
            <span>Request history</span>
          </div>
        </div>
        <div className={styles.deviceStage} data-reveal>
          <div className={styles.highlightStage}>
            {platformHighlights.map((item, index) => (
              <div
                className={styles.platformSlide}
                key={item.src}
                style={{ animationDelay: `${index * 4}s` }}
              >
                <Image src={item.src} alt={item.label} fill sizes="(max-width: 768px) 92vw, (max-width: 1180px) 82vw, 1040px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reachSection}>
        <div className={styles.reachCopy} data-reveal>
          <p className={styles.eyebrow}>International reach</p>

          <h2 className={styles.reachTitle}>
            <span>Private reach.</span>
            <span>Global orchestration.</span>
          </h2>

          <p>
            Goldener Pfau connects selected markets, trusted relationships and premium access through one discreet international desk.
          </p>

          <div className={styles.reachMarkets}>
            {reachMarkets.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className={styles.capabilityMatrix}>
            {reachCapabilities.map((item) => (
              <span key={item}>{item}</span>
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
            <strong>Discretion · Access · Execution</strong>
            <span>Selected markets · trusted relationships · premium coordination</span>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processIntro} data-reveal>
          <p className={styles.eyebrow}>Private access</p>
          <h2>From private request to refined execution.</h2>
          <p>
            A discreet editorial-style process for clients who expect clarity, privacy and premium coordination from the first message.
          </p>

          <div className={styles.processMeta}>
            <span>Private brief</span>
            <span>Curated access</span>
            <span>Controlled execution</span>
          </div>
        </div>

        <div className={styles.processFlow}>
          {privateAccess.map((item, index) => (
            <article
              key={item.title}
              className={`${styles.flowCard} ${index === 0 ? styles.flowCardFeatured : ''}`}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className={styles.flowCardTop}>
                <span className={styles.flowNumber}>{item.number}</span>
                <span className={styles.flowLine} aria-hidden="true" />
              </div>

              <div className={styles.flowCardBody}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="fund" className={styles.fundSection}>
        <div className={styles.fundIntro} data-reveal>
          <p className={styles.eyebrow}>Investments · Pfau Fund</p>
          <h2>Private allocation philosophy for real-world and digital exposure.</h2>
          <p>
            Pfau Fund is positioned as an access-oriented private allocation concept: disciplined, diversified and anchored in long-term asset logic rather than short-term promises.
          </p>
          <p className={styles.disclaimer}>
            Investment information is presented for informational purposes only and does not constitute financial advice, guarantee of return or public offering.
          </p>
        </div>
        <div className={styles.fundExperience} data-reveal>
          <div className={styles.fundPhone}>
            <div className={styles.fundPhoneScreen}>
              <div className={styles.fundUiTop}>
                <span>Pfau Fund</span>
                <strong>Private allocation</strong>
              </div>
              <div className={styles.allocationRing} aria-hidden="true" />
              <div className={styles.assetList}>
                {fundAssets.map((asset) => <span key={asset}>{asset}</span>)}
              </div>
            </div>
          </div>
          <div className={styles.fundCards}>
            {fundPrinciples.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader} data-reveal>
          <p className={styles.eyebrow}>Visual story</p>
          <h2>A quieter expression of mobility, architecture and private lifestyle.</h2>
        </div>
        <div className={styles.galleryGrid} data-reveal>
          {gallery.map((src, index) => (
            <figure key={`${src}-${index}`}>
              <Image src={src} alt="Goldener Pfau lifestyle visual" fill sizes="(max-width: 768px) 50vw, 25vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={styles.sectionHeader} data-reveal>
          <p className={styles.eyebrow}>Trust & positioning</p>
          <h2>Built for clients who value privacy, structure and credible execution.</h2>
          <p>
            The brand is designed around formal company presence, professional handling, controlled communication and cross-category premium service.
          </p>
        </div>
        <div className={styles.trustGrid}>
          {trustItems.map(([title, text], index) => (
            <article key={title} data-reveal style={{ transitionDelay: `${index * 55}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.ctaSection} data-reveal>
        <div>
          <p className={styles.eyebrow}>Direct contact</p>
          <h2>Private requests, discreetly handled.</h2>
          <p>
            Share your request with Goldener Pfau directly. We respond privately with the next steps for tailored access, coordination or partnership discussions.
          </p>
        </div>
        <div className={styles.ctaActions}>
          {/* WHATSAPP: replace 0000000000000 with the official Goldener Pfau WhatsApp number, including country code. */}
          <a className={styles.primaryButton} href="https://wa.me/0000000000000" target="_blank" rel="noreferrer">WhatsApp request</a>
          <a className={styles.secondaryButton} href="mailto:contact@goldenerpfau.com?subject=Private%20request%20-%20Goldener%20Pfau">Email Goldener Pfau</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <Image src="/logopfau.png" alt="Goldener Pfau symbol" width={44} height={44} />
        <strong>Goldener Pfau</strong>
        <p>Goldener Pfau Qualität auf Goldbasis · Private luxury concierge, assets, travel and investment-oriented access.</p>
      </footer>
    </main>
  );
}
