'use client';

import { characters } from '@/data/characters';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-label="Sobre mim">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>⚓ O Log Pose da Minha Jornada ⚓</span>
          <h2 className={styles.title}>Quem é o Capitão deste Código?</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>
              Sou um entusiasta da web que navega pelos mares do desenvolvimento em busca do "One Piece" 
              da tecnologia: o código perfeito, performático e escalável.
            </p>
            <p>
              Minha aventura começou há alguns anos, explorando o East Blue do HTML e CSS. Hoje, 
              sou o capitão de projetos robustos em Next.js e TypeScript, sempre pronto para enfrentar 
              tempestades de bugs e conquistar novas ilhas de conhecimento.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>5+</span>
                <span className={styles.statLabel}>Anos de Experiência</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20+</span>
                <span className={styles.statLabel}>Ilhas (Projetos)</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>∞</span>
                <span className={styles.statLabel}>Café Consumido</span>
              </div>
            </div>
          </div>

          <div className={styles.crew}>
            <h3 className={styles.crewTitle}>Minha Tripulação de Skills</h3>
            <div className={styles.crewList}>
              {characters.map((char) => (
                <div key={char.id} className={styles.crewMember} style={{ borderColor: char.color }}>
                  <span className={styles.crewEmoji}>{char.emoji}</span>
                  <div className={styles.crewInfo}>
                    <span className={styles.crewName}>{char.name}</span>
                    <span className={styles.crewRole}>{char.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
