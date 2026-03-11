'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const navItems = [
  { label: 'Início', href: '#hero', icon: '⚓' },
  { label: 'Sobre', href: '#about', icon: '🗺️' },
  { label: 'Projetos', href: '#ocean', icon: '🏴‍☠️' },
  { label: 'Contato', href: '#contact', icon: '✉️' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Navegação principal">
      <div className={styles.brand}>
        <span className={styles.skull}>☠</span>
        <span className={styles.brandName}>Going Merry</span>
      </div>

      {/* Desktop */}
      <ul className={styles.links} role="list">
        {navItems.map((item) => (
          <li key={item.href}>
            <button
              id={`nav-${item.href.replace('#', '')}`}
              className={styles.link}
              onClick={() => handleNavClick(item.href)}
              aria-label={`Navegar para ${item.label}`}
            >
              <span className={styles.linkIcon}>{item.icon}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Menu mobile">
          {navItems.map((item) => (
            <button
              key={item.href}
              className={styles.mobileLink}
              onClick={() => handleNavClick(item.href)}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
