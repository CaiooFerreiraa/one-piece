'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulação de envio
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="contact" className={styles.contact} aria-label="Contato">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>✉️ Envie Seu Den Den Mushi ✉️</span>
          <h2 className={styles.title}>Vamos Conversar?</h2>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <span className={styles.icon}>🍾</span>
            <div className={styles.formHeaderText}>
              <h3 className={styles.formTitle}>Mensagem na Garrafa</h3>
              <p className={styles.formSubtitle}>O mar trará sua mensagem até meu navio.</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Nautic (Nome)</label>
              <input id="name" type="text" className={styles.input} placeholder="Como te chamam nos mares?" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Log (E-mail)</label>
              <input id="email" type="email" className={styles.input} placeholder="exemplo@gmail.com" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Mensagem</label>
              <textarea id="message" className={styles.textarea} rows={5} placeholder="O que você deseja compartilhar?" required />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
              {status === 'idle' && '🌊 Lançar Mensagem'}
              {status === 'sending' && '🚢 Navegando...'}
              {status === 'success' && '✅ Mensagem Entregue!'}
            </button>
          </form>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>X / Twitter</a>
        </div>

        <footer className={styles.footer}>
          <p>© 2026 Nakama Developer — Feito com Next.js e muita aventura.</p>
        </footer>
      </div>
    </section>
  );
}
