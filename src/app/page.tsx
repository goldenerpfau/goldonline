'use client';

import Image from 'next/image';
import { useEffect, type MouseEvent } from 'react';
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
  { src: '/images/img26.jpg', title: 'Private mobility', tag: 'Mobility', alt: 'Goldener Pfau private mobility visual' },
  { src: '/images/img23.jpg', title: 'Architectural living', tag: 'Architecture', alt: 'Goldener Pfau architectural lifestyle visual' },
  { src: '/images/img22.jpg', title: 'Nautical horizon', tag: 'Yachts', alt: 'Goldener Pfau nautical lifestyle visual' },
  { src: '/images/img25.jpg', title: 'Aviation access', tag: 'Aviation', alt: 'Goldener Pfau private aviation visual' },
  { src: '/images/img9.jpg', title: 'Quiet hospitality', tag: 'Stays', alt: 'Goldener Pfau hospitality lifestyle visual' },
  { src: '/images/img28.jpg', title: 'Curated arrivals', tag: 'Lifestyle', alt: 'Goldener Pfau curated lifestyle visual' },
  { src: '/images/img24.jpg', title: 'Private perspective', tag: 'Residences', alt: 'Goldener Pfau residential lifestyle visual' },
  { src: '/images/img27.jpg', title: 'Coastal expression', tag: 'Concierge', alt: 'Goldener Pfau coastal lifestyle visual' },
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

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" onClick={scrollToTop} aria-label="Goldener Pfau home">
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
          href="mailto:contact@goldenerpfau.com?subject=Private%20access%20request%20-%20Goldener%20Pfau"
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
            <a className={styles.primaryButton} href="mailto:contact@goldenerpfau.com?subject=Private%20access%20request%20-%20Goldener%20Pfau">
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
        <div className={styles.processHeader} data-reveal>
          <p className={styles.eyebrow}>Private access</p>
          <h2>Private protocol for exceptional arrangements.</h2>
          <p>
            A controlled path for residences, mobility, aviation, stays, assets and concierge requests — handled with discretion from first brief to final confirmation.
          </p>
        </div>

        <div className={styles.protocolGrid}>
          {privateAccess.map((item, index) => (
            <article
              key={item.title}
              className={styles.protocolCard}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className={styles.protocolNumber}>{item.number}</span>
              <div>
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

        <div className={styles.fundScene} data-reveal>
          <div className={styles.fundSceneTop}>
            <div className={styles.fundSceneHeading}>
              <span>Pfau Fund</span>
              <strong>Private allocation</strong>
            </div>
            <p>Access-oriented concept · Asset-backed view · Cross-market logic</p>
          </div>

          <div className={styles.fundGraphStage}>
            <svg className={styles.fundGraph} viewBox="0 0 800 430" aria-hidden="true">
              <defs>
                <linearGradient id="pfauLineLuxury" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(215, 180, 106, 0.22)" />
                  <stop offset="24%" stopColor="rgba(215, 180, 106, 0.74)" />
                  <stop offset="68%" stopColor="rgba(255, 236, 168, 1)" />
                  <stop offset="100%" stopColor="rgba(255, 236, 168, 0.55)" />
                </linearGradient>
                <linearGradient id="pfauAreaLuxury" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(215, 180, 106, 0.14)" />
                  <stop offset="100%" stopColor="rgba(215, 180, 106, 0.00)" />
                </linearGradient>
                <filter id="pfauLineGlowLuxury">
                  <feGaussianBlur stdDeviation="5.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path className={styles.fundGridLine} d="M74 344 H734" />
              <path className={styles.fundGridLine} d="M74 276 H734" />
              <path className={styles.fundGridLine} d="M74 208 H734" />
              <path className={styles.fundGridLine} d="M74 140 H734" />
              <path className={styles.fundGridLine} d="M74 72 H734" />

              <path className={styles.fundAxisLine} d="M74 38 V364" />
              <path className={styles.fundAxisLine} d="M74 364 H734" />

              <path className={styles.fundAreaFill} d="M96 330 C132 326 164 312 204 286 C244 260 276 248 320 224 C362 202 398 180 444 154 C488 128 528 106 572 88 C618 70 658 58 706 48 L706 364 L96 364 Z" />
              <path className={styles.fundTrendGlow} d="M96 330 C132 326 164 312 204 286 C244 260 276 248 320 224 C362 202 398 180 444 154 C488 128 528 106 572 88 C618 70 658 58 706 48" filter="url(#pfauLineGlowLuxury)" />
              <path className={styles.fundTrendLine} d="M96 330 C132 326 164 312 204 286 C244 260 276 248 320 224 C362 202 398 180 444 154 C488 128 528 106 572 88 C618 70 658 58 706 48" />

              <circle className={styles.fundGraphPoint} cx="96" cy="330" r="6" />
              <circle className={styles.fundGraphPoint} cx="204" cy="286" r="6" />
              <circle className={styles.fundGraphPoint} cx="320" cy="224" r="6" />
              <circle className={styles.fundGraphPoint} cx="444" cy="154" r="6" />
              <circle className={styles.fundGraphPoint} cx="572" cy="88" r="6" />
              <circle className={styles.fundGraphPoint} cx="706" cy="48" r="7" />

              <circle className={styles.fundTravelGlow} r="9">
                <animateMotion dur="3.8s" begin=".2s" fill="freeze" path="M96 330 C132 326 164 312 204 286 C244 260 276 248 320 224 C362 202 398 180 444 154 C488 128 528 106 572 88 C618 70 658 58 706 48" />
              </circle>
              <circle className={styles.fundTravelDot} r="5">
                <animateMotion dur="3.8s" begin=".2s" fill="freeze" path="M96 330 C132 326 164 312 204 286 C244 260 276 248 320 224 C362 202 398 180 444 154 C488 128 528 106 572 88 C618 70 658 58 706 48" />
              </circle>
            </svg>

            <div className={styles.fundSignalChip + ' ' + styles.fundChipGold}>Gold</div>
            <div className={styles.fundSignalChip + ' ' + styles.fundChipRealEstate}>Real Estate</div>
            <div className={styles.fundSignalChip + ' ' + styles.fundChipVehicles}>Vehicles</div>
            <div className={styles.fundSignalChip + ' ' + styles.fundChipBTC}>BTC</div>
            <div className={styles.fundSignalChip + ' ' + styles.fundChipETH}>ETH</div>
            <div className={styles.fundSignalChip + ' ' + styles.fundChipUSD}>USD</div>
          </div>

          <div className={styles.fundSummaryStrip}>
            <div>
              <small>Pfau Fund</small>
              <strong>Disciplined private allocation</strong>
            </div>
            <p>Long-term logic · Real-world and digital exposure</p>
          </div>

          <div className={styles.fundNotes}>
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
          <div className={styles.galleryCopy}>
            <p className={styles.eyebrow}>Visual story</p>
            <h2>A quieter expression of mobility, architecture and private lifestyle.</h2>
            <p>
              A more editorial visual rhythm: selected frames that express atmosphere, movement, presence and private access without visual excess.
            </p>
          </div>
          <div className={styles.galleryMeta}>
            <span>Goldener Pfau</span>
            <p>Mobility · Architecture · Lifestyle · Concierge</p>
          </div>
        </div>

        <div className={styles.galleryMosaic} data-reveal>
          {gallery.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className={`${styles.galleryCard} ${styles[`galleryCard${index + 1}`]}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption>
                <span>{item.tag}</span>
                <strong>{item.title}</strong>
              </figcaption>
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
          <h2>Private access, discreetly arranged.</h2>
          <p>
            Send your request directly to Goldener Pfau. We handle each inquiry privately, with clear next steps for tailored access, refined coordination or selected partnership opportunities.
          </p>
        </div>
        <div className={styles.ctaActions}>
          {/* WHATSAPP: replace 0000000000000 with the official Goldener Pfau WhatsApp number, including country code. */}
          <a className={styles.primaryButton} href="https://wa.me/0000000000000" target="_blank" rel="noreferrer">Request via WhatsApp</a>
          <a className={styles.secondaryButton} href="mailto:contact@goldenerpfau.com?subject=Private%20access%20request%20-%20Goldener%20Pfau">Contact by email</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="/" onClick={scrollToTop} aria-label="Back to top">
          <Image src="/logopfau.png" alt="Goldener Pfau symbol" width={44} height={44} />
        </a>
        <strong>Goldener Pfau</strong>
        <p>Goldener Pfau Qualität auf Goldbasis · Private luxury concierge, assets, travel and investment-oriented access.</p>
      </footer>
    </main>
  );
}


 