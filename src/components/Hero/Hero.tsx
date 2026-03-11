'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = subtitleRef.current;
    if (!el) return;
    const text = el.textContent ?? '';
    el.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Seção inicial">
      {/* Camadas de céu */}
      <div className={styles.sky} aria-hidden="true">
        <div className={styles.sun} />
        <div className={styles.cloud1} />
        <div className={styles.cloud2} />
        <div className={styles.cloud3} />
        <div className={styles.stars} />
      </div>

      {/* Conteúdo central */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span>☠</span> Nakama Developer
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine1}>Desbravando</span>
          <span className={styles.titleLine2}>os Mares</span>
          <span className={styles.titleLine3}>do Código</span>
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Cada projeto é uma ilha para conquistar. Embarque no Going Merry e navegue pelo meu portfólio.
        </p>

        <div className={styles.actions}>
          <button
            id="hero-cta-projects"
            className={styles.btnPrimary}
            onClick={() => document.querySelector('#ocean')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🏴‍☠️ Ver Projetos
          </button>
          <button
            id="hero-cta-about"
            className={styles.btnSecondary}
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🗺️ Sobre Mim
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          className={styles.scrollIndicator}
          onClick={handleScrollDown}
          aria-label="Rolar para baixo"
        >
          <span className={styles.anchor}>⚓</span>
          <span className={styles.scrollText}>Role para navegar</span>
          <span className={styles.scrollArrow}>↓</span>
        </button>
      </div>

      {/* Silhueta de ondas no rodapé do hero */}
      <div className={styles.waveBottom} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="var(--color-ocean-deep)" />
        </svg>
      </div>
    </section>
  );
}
