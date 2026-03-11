'use client';

import { useRef, useEffect, useState } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { projects } from '@/data/projects';
import Island from '@/components/Island/Island';
import Boat from '@/components/Boat/Boat';
import styles from './Ocean.module.css';
import { Project } from '@/types';

export default function Ocean() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // O progresso da cena do oceano começa depois do hero e sobre/about
  // Vamos usar scroll relativo à seção
  const [oceanProgress, setOceanProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const calculateProgress = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      // Progress dentro da seção: 0 quando entra em tela, 1 quando sai
      const entered = -rect.top;
      const total = sectionHeight - viewportHeight;
      const p = total > 0 ? Math.min(Math.max(entered / total, 0), 1) : 0;
      setOceanProgress(p);
    };

    window.addEventListener('scroll', calculateProgress, { passive: true });
    calculateProgress();
    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <section id="ocean" ref={sectionRef} className={styles.ocean} aria-label="Seção de projetos — Oceano">
      {/* Sticky canvas de animação */}
      <div className={styles.sticky}>
        {/* Fundo oceânico */}
        <div className={styles.background} aria-hidden="true">
          <div className={styles.skyGradient} />
          <div className={styles.horizonGlow} />
        </div>

        {/* Camada de nuvens e névoa (Mist) */}
        <div className={styles.cloudsLayer} aria-hidden="true">
          <div className={styles.cloudA} />
          <div className={styles.cloudB} />
          <div className={styles.cloudC} />
          <div className={styles.mistOverlay} />
        </div>

        {/* Camada de partículas e névoa atmosférica */}
        <div className={styles.atmosphere} aria-hidden="true" />

        {/* Caminho do oceano */}
        <div className={styles.oceanSurface} aria-hidden="true">
          <div className={styles.wave1} />
          <div className={styles.wave2} />
          <div className={styles.wave3} />
        </div>

        {/* Ilhas posicionadas no caminho */}
        <div className={styles.pathLayer} aria-hidden="false">
          {projects.map((project, index) => (
            <Island
              key={project.id}
              project={project}
              projectIndex={index}
              totalProjects={projects.length}
              boatProgress={oceanProgress}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Barco */}
        <Boat progress={oceanProgress} numProjects={projects.length} />

        {/* HUD — progress */}
        <div className={styles.hud} aria-label="Progresso da viagem">
          <span className={styles.hudLabel}>⚓ Progresso da Rota</span>
          <div className={styles.progressBar} role="progressbar" aria-valuenow={Math.round(oceanProgress * 100)} aria-valuemin={0} aria-valuemax={100}>
            <div className={styles.progressFill} style={{ width: `${oceanProgress * 100}%` }} />
            <span className={styles.progressShip} style={{ left: `${oceanProgress * 100}%` }}>⛵</span>
          </div>
          <span className={styles.hudValue}>{Math.round(oceanProgress * 100)}%</span>
        </div>

        {/* Legenda de scroll */}
        {oceanProgress < 0.05 && (
          <div className={styles.scrollHint} aria-live="polite">
            <span>📜 Role para navegar pelo oceano</span>
          </div>
        )}
      </div>

      {/* Modal de projeto selecionado */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

/* ---- Modal inline ---- */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={`Detalhes do projeto ${project.name}`}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Fechar modal">✕</button>

        <div className={styles.modalIslandBadge} style={{ background: project.islandColor }}>
          🏝️
        </div>

        <h2 className={styles.modalTitle}>{project.name}</h2>
        <p className={styles.modalDesc}>{project.description}</p>

        <div className={styles.techList}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>

        <div className={styles.modalActions}>
          {project.githubUrl && (
            <a id={`project-github-${project.id}`} href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.modalBtnGithub}>
              ⚙️ GitHub
            </a>
          )}
          {project.liveUrl && (
            <a id={`project-live-${project.id}`} href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.modalBtnLive}>
              🌐 Ver Online
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
