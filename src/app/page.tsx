'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { Cinzel, Montserrat } from 'next/font/google';
import Globe from './components/Globe';
import Titles from './components/Projects/titles';
import AnimatedCounter from './components/Projects/AnimatedCounter';
import Parallax from './components/Projects/Parallax';
// IMPORTAÇÃO DO NOVO COMPONENTE: ModernSection está em components/Projects/
import ModernSection from './components/Projects/ModernSection'; 
// NOVO: Importar o ParticlesComponent (assumindo que está em components/ParticlesComponent.tsx)
import ParticlesComponent from './components/ParticlesComponent'; 

// --- DEFINIÇÕES FORA DO COMPONENTE PARA MELHOR PERFORMANCE ---

// Tipagem para os dados do projeto
type Project = {
    title: string;
    description: string;
    speed: number;
};

// Fontes
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500'] });

// Dados dos projetos
const projectData: Project[] = [
    { title: "Villages", description: "Next-Gen HMI without driving experience.", speed: 0.5 },
    { title: "Yatchs", description: "Next-Gen HMI without driving experience.", speed: 0.5 },
    { title: "Private Jets", description: "Future of UFC ecosystem.", speed: 0.5 },
    { title: "Concierge", description: "Design language Lincoln Zephyr.", speed: 0.67 },
    { title: "VIP Events", description: "Massive Royal Caribbean eco-system.", speed: 0.8 },
    { title: "Partner Programs", description: "Massive Royal Caribbean eco-system.", speed: 1.2 },
    { title: "Found of Investments", description: "Product for 1M+ sleepers.", speed: 0.8 },
    { title: "Institute", description: "Fantasy Football in global context.", speed: 0.8 }
];

// --- COMPONENTE PRINCIPAL ---

export default function Home() {
    const [btcPrice, setBtcPrice] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBTCPrice = async () => {
            try {
                setError(null);
                const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                if (!res.ok) {
                    throw new Error('Failed to fetch data from CoinGecko');
                }
                const data = await res.json();
                setBtcPrice(
                    data.bitcoin.usd.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })
                );
            } catch (err) {
                setError('Failed to load price.');
                console.error('Erro ao buscar o preço do BTC:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBTCPrice();
        const interval = setInterval(fetchBTCPrice, 30000);
        return () => clearInterval(interval);
    }, []);

    const getBtcDisplayValue = () => {
        if (isLoading) return 'Loading...';
        if (error) return error;
        return btcPrice;
    };

    return (
        <div className={styles.container}>
            {/* SEÇÃO HEADER */}
            <header className={styles.header}>
                <div className={styles.logoMenuContainer}>{/* Logo aqui */}</div>
            </header>

            {/* SEÇÃO MAIN (HERO) */}
            <main className={styles.main}>
                <div className={styles.contents}>
                    <h1>Goldener Pfau</h1>
                    <div className={styles.buttons}>
                        <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                            BY ALEXANDRE A. A.
                        </button>
                    </div>
                </div>
            </main>

            {/* NOVO CÓDIGO: SEÇÃO SERVICES (Tema Dark/Sofisticado com Partículas) */}
            <ModernSection
                id="services"
                theme="dark"
                // MUDANÇA DE CONTEÚDO PARA O LAYOUT DE CELULAR
                title="PERSONALIZED SERVICES"
                subtitle="CURATED EXPERIENCES BEYOND EXPECTATIONS" 
                description="The application is currently under development and will be launched soon, delivering a seamless and premium user experience."
                // MUDANÇA DO BOTÃO: DISCOVER EXPERIENCES -> CONTACT
                buttonText="CONTACT" 
                buttonLink="https://wa.me/48571517218?text=Qualitat%20auf%20Goldbasis"
                // IMAGEM DO CELULAR
                imageSrc="/celularicone.png" 
                imageAlt="App Preview em Celular"
                titleFontClass={cinzel.className}
                bodyFontClass={montserrat.className}
            >
                {/* O slot children aqui pode ser removido, se o 'INQUIRE' for integrado ao botão principal */}
                {/* Se você mantiver o Inquire, ele será o botão secundário. Mudei o texto do botão principal. */}
            </ModernSection>

            {/* NOVO CÓDIGO: SEÇÃO PFAU INSTITUT (Tema Light/Terroso com Mapa) */}
            <ModernSection
                id="institut"
                theme="light"
                title="Pfau Institut"
                subtitle="EMPOWERING COMMUNITIES. BUILDING FUTURES."
                description="Our philanthropic institution is committed to restructuring the infrastructure of underserved regions, with an emphasis on ensuring access to basic sanitation. We also support non-governmental organizations that empower disadvantaged families through education. By providing necessary resources and opportunities, we strive to pave a path towards a brighter future."
                buttonText="LEARN MORE ABOUT OUR IMPACT"
                buttonLink="https://wa.me/48571517218?text=I%20would%20like%20to%20donate%20to%20Pfau%20Institut"
                // IMAGEM DO MAPA (Usando o arquivo IMG_2204.jpg)
                imageSrc="/2204.jpg" 
                imageAlt="Mapa da África Subsaariana"
                titleFontClass={cinzel.className}
                bodyFontClass={montserrat.className}
            />

            {/* SEÇÃO VÍDEO DE FUNDO */}
            <section id="video" className={styles.videoSection}>
                <video src="/indoindo.mp4" autoPlay muted loop className={styles.video} />
            </section>

            {/* SEÇÃO GLOBO E TÍTULOS */}
            <section className={`${styles.globeSection} ${montserrat.className}`}>
                <div className={styles.globeWrapper}>
                    <Globe />
                </div>
                <div className={styles.projectTitlesWrapper}>
                    <Titles data={projectData} setSelectedProject={() => { }} />
                </div>
                <div className={styles.counterWrapper}>
                    <AnimatedCounter />
                </div>
            </section>

            {/* SEÇÃO PARALLAX */}
            <section className={styles.parallaxSection}>
                <Parallax />
            </section>

            {/* SEÇÃO INVESTMENTS */}
            <section className={styles.investmentsSection}>
                {/* Partículas injetadas aqui se você as quer no Investments */}
                
                <div className={styles.tradingViewWrapper}>
                    <iframe
                        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e36ab&symbol=BITSTAMP%3ABTCUSD&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en"
                        allowTransparency={true}
                        allowFullScreen={true}
                        className={styles.tradingViewIframe}
                        style={{ border: 0, overflow: 'hidden' }}
                        sandbox="allow-scripts allow-same-origin allow-popups"
                        title="TradingView Widget"
                    ></iframe>
                </div>

                <div className={styles.investmentsContent}>
                    <h2>INVESTMENTS</h2>
                    <p className={styles.btcPrice}>
                        <span className={styles.btcLabel}>BTC/USD</span>
                        <span className={styles.btcValue}>{getBtcDisplayValue()}</span>
                    </p>
                    <p className={styles.updateInfo}>Live feed • updated every 30 seconds</p>
                    <p className={styles.investmentText}>
                        Our investment division integrates AI, P&L intelligence and real-time financial indicators to optimize capital performance.
                    </p>
                    <p className={styles.investmentText}>
                        A global platform trusted by future-oriented investors and legacy builders.
                    </p>
                    <div className={styles.investmentBadge}>
                        <span>Established 2015</span>
                        <span>Precision. Integrity. Expansion.</span>
                    </div>
                </div>
            </section>

            {/* SEÇÃO FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <button
                        className={styles.footerLogoButton}
                        onClick={() => {
                            document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        aria-label="Scroll to top"
                    >
                        <Image
                            src="/logopfau.png"
                            alt="Goldener Pfau Logo"
                            width={100}
                            height={100}
                            className={styles.footerLogo}
                        />
                    </button>
                    <p className={styles.footerText}>© 2025 Goldener Pfau. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
