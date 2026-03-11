'use client';

import React from 'react';
import { Project, IslandType } from '@/types';
import styles from './Island.module.css';

interface IslandProps {
  project: Project;
  boatProgress: number;
  onSelect: (project: Project) => void;
}

/* =========================================================
   SVG ISLANDS — cada tipo desenhado em camadas CSS/SVG
   ========================================================= */

function TropicalIsland(): React.ReactElement {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={styles.islandSvg}>
      {/* Base da ilha / areia */}
      <ellipse cx="100" cy="130" rx="90" ry="28" fill="#C4A96A" />
      <ellipse cx="100" cy="122" rx="80" ry="22" fill="#D4B97A" />

      {/* Terreno verde */}
      <ellipse cx="100" cy="108" rx="70" ry="32" fill="#2E7D32" />
      <ellipse cx="90" cy="95" rx="55" ry="28" fill="#388E3C" />
      <ellipse cx="110" cy="100" rx="48" ry="22" fill="#43A047" />

      {/* Montanha central */}
      <polygon points="100,30 60,105 140,105" fill="#1B5E20" />
      <polygon points="100,30 75,85 125,85" fill="#2E7D32" />
      <polygon points="100,30 85,65 115,65" fill="#388E3C" />
      {/* Pico nevado leve */}
      <polygon points="100,30 90,55 110,55" fill="rgba(255,255,255,0.5)" />

      {/* Palmeiras */}
      {/* Palmeira esquerda */}
      <line x1="50" y1="110" x2="45" y2="68" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="38" cy="63" rx="14" ry="8" fill="#388E3C" transform="rotate(-15 38 63)" />
      <ellipse cx="52" cy="58" rx="13" ry="7" fill="#43A047" transform="rotate(10 52 58)" />
      <ellipse cx="42" cy="55" rx="11" ry="6" fill="#2E7D32" transform="rotate(-30 42 55)" />

      {/* Palmeira direita */}
      <line x1="152" y1="108" x2="156" y2="66" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="163" cy="61" rx="14" ry="8" fill="#388E3C" transform="rotate(15 163 61)" />
      <ellipse cx="148" cy="57" rx="13" ry="7" fill="#43A047" transform="rotate(-10 148 57)" />
      <ellipse cx="160" cy="53" rx="11" ry="6" fill="#2E7D32" transform="rotate(30 160 53)" />

      {/* Água ao redor */}
      <ellipse cx="100" cy="136" rx="92" ry="16" fill="rgba(30,136,229,0.4)" />
      <ellipse cx="100" cy="140" rx="96" ry="12" fill="rgba(30,136,229,0.25)" />

      {/* Reflexo de luz */}
      <ellipse cx="80" cy="85" rx="18" ry="8" fill="rgba(255,255,255,0.08)" transform="rotate(-20 80 85)" />
    </svg>
  );
}

function VolcanicIsland(): React.ReactElement {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={styles.islandSvg}>
      {/* Base rochosa */}
      <ellipse cx="100" cy="135" rx="85" ry="22" fill="#37474F" />
      <ellipse cx="100" cy="125" rx="74" ry="20" fill="#455A64" />

      {/* Terreno vulcânico */}
      <ellipse cx="100" cy="112" rx="65" ry="28" fill="#546E7A" />
      <ellipse cx="95" cy="100" rx="52" ry="24" fill="#607D8B" />

      {/* Cone vulcânico */}
      <polygon points="100,18 55,112 145,112" fill="#37474F" />
      <polygon points="100,18 68,90 132,90" fill="#455A64" />
      <polygon points="100,18 78,70 122,70" fill="#546E7A" />

      {/* Cratera */}
      <ellipse cx="100" cy="22" rx="14" ry="7" fill="#212121" />
      <ellipse cx="100" cy="20" rx="10" ry="5" fill="#1a0a00" />

      {/* Lava escorrendo */}
      <path d="M 95,22 Q 88,50 85,80 Q 82,95 80,112" stroke="#FF6D00" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M 105,23 Q 112,55 116,82 Q 119,98 122,112" stroke="#FF3D00" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Brilho de lava */}
      <path d="M 95,22 Q 88,50 85,80 Q 82,95 80,112" stroke="#FFAB40" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Fumaça/névoa no topo */}
      <ellipse cx="98" cy="14" rx="12" ry="7" fill="rgba(180,180,180,0.3)" />
      <ellipse cx="104" cy="8" rx="9" ry="5" fill="rgba(200,200,200,0.2)" />
      <ellipse cx="100" cy="3" rx="7" ry="4" fill="rgba(220,220,220,0.15)" />

      {/* Água */}
      <ellipse cx="100" cy="140" rx="87" ry="14" fill="rgba(30,136,229,0.35)" />
      <ellipse cx="100" cy="145" rx="91" ry="10" fill="rgba(30,136,229,0.2)" />
    </svg>
  );
}

function SnowyIsland(): React.ReactElement {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={styles.islandSvg}>
      {/* Base de rocha */}
      <ellipse cx="100" cy="135" rx="80" ry="22" fill="#546E7A" />
      <ellipse cx="100" cy="124" rx="70" ry="20" fill="#607D8B" />

      {/* Terreno congelado */}
      <ellipse cx="100" cy="110" rx="60" ry="26" fill="#78909C" />
      <ellipse cx="100" cy="98" rx="50" ry="22" fill="#CFD8DC" />

      {/* Montanha central nevada */}
      <polygon points="100,20 58,108 142,108" fill="#78909C" />
      <polygon points="100,20 70,88 130,88" fill="#90A4AE" />
      <polygon points="100,20 80,68 120,68" fill="#ECEFF1" />
      <polygon points="100,20 88,50 112,50" fill="white" />

      {/* Arbustos nevados */}
      <ellipse cx="55" cy="105" rx="15" ry="9" fill="#B0BEC5" />
      <ellipse cx="55" cy="101" rx="10" ry="7" fill="#ECEFF1" />
      <ellipse cx="148" cy="103" rx="14" ry="8" fill="#B0BEC5" />
      <ellipse cx="148" cy="99" rx="9" ry="6" fill="#ECEFF1" />

      {/* Pinheiros cobertos de neve */}
      <polygon points="68,108 62,82 74,82" fill="#37474F" />
      <polygon points="68,90 60,72 76,72" fill="#455A64" />
      <polygon points="68,90 62,72 74,72" fill="white" opacity="0.6" />
      <polygon points="136,108 130,82 142,82" fill="#37474F" />
      <polygon points="136,90 128,70 144,70" fill="#455A64" />
      <polygon points="136,90 130,70 142,70" fill="white" opacity="0.6" />

      {/* Partículas de neve */}
      <circle cx="75" cy="40" r="2" fill="white" opacity="0.7" />
      <circle cx="125" cy="35" r="1.5" fill="white" opacity="0.6" />
      <circle cx="90" cy="55" r="1.5" fill="white" opacity="0.5" />
      <circle cx="115" cy="48" r="2" fill="white" opacity="0.6" />
      <circle cx="60" cy="65" r="1.5" fill="white" opacity="0.5" />
      <circle cx="140" cy="60" r="1.5" fill="white" opacity="0.5" />

      {/* Água gelada ao redor */}
      <ellipse cx="100" cy="138" rx="82" ry="14" fill="rgba(100, 181, 246, 0.3)" />
      <ellipse cx="100" cy="143" rx="85" ry="10" fill="rgba(30,136,229,0.2)" />
    </svg>
  );
}

function JungleIsland(): React.ReactElement {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={styles.islandSvg}>
      {/* Base da ilha */}
      <ellipse cx="100" cy="135" rx="82" ry="22" fill="#5D4037" />
      <ellipse cx="100" cy="124" rx="72" ry="20" fill="#795548" />

      {/* Terreno denso */}
      <ellipse cx="100" cy="110" rx="65" ry="28" fill="#1B5E20" />
      <ellipse cx="95" cy="98" rx="55" ry="24" fill="#2E7D32" />

      {/* Colinas de selva */}
      <ellipse cx="80" cy="88" rx="38" ry="30" fill="#1B5E20" />
      <ellipse cx="120" cy="90" rx="35" ry="28" fill="#2E7D32" />
      <ellipse cx="100" cy="80" rx="30" ry="26" fill="#33691E" />

      {/* Copas de árvores densas */}
      <ellipse cx="65" cy="72" rx="22" ry="16" fill="#1B5E20" />
      <ellipse cx="85" cy="60" rx="24" ry="18" fill="#2E7D32" />
      <ellipse cx="108" cy="58" rx="26" ry="20" fill="#33691E" />
      <ellipse cx="130" cy="68" rx="22" ry="16" fill="#1B5E20" />
      <ellipse cx="72" cy="58" rx="18" ry="14" fill="#388E3C" />
      <ellipse cx="128" cy="56" rx="18" ry="14" fill="#388E3C" />

      {/* Vegetação de destaque */}
      <ellipse cx="100" cy="48" rx="20" ry="16" fill="#43A047" />
      <ellipse cx="100" cy="42" rx="14" ry="11" fill="#66BB6A" />

      {/* Cachoeira */}
      <path d="M 90,72 Q 88,85 87,100 Q 86,110 85,120" stroke="rgba(100,200,255,0.6)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 93,75 Q 91,88 90,103 Q 89,113 88,122" stroke="rgba(150,220,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Água ao redor */}
      <ellipse cx="100" cy="138" rx="84" ry="14" fill="rgba(30,136,229,0.35)" />
      <ellipse cx="100" cy="143" rx="87" ry="10" fill="rgba(30,136,229,0.2)" />
    </svg>
  );
}

function DesertIsland(): React.ReactElement {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={styles.islandSvg}>
      {/* Base arenosa */}
      <ellipse cx="100" cy="135" rx="80" ry="22" fill="#A0856A" />
      <ellipse cx="100" cy="124" rx="70" ry="20" fill="#BCAAA4" />

      {/* Terreno desértico */}
      <ellipse cx="100" cy="110" rx="62" ry="26" fill="#D7CCC8" />
      <ellipse cx="100" cy="98" rx="52" ry="22" fill="#EFEBE9" />

      {/* Dunas / Rochas */}
      <ellipse cx="75" cy="100" rx="35" ry="20" fill="#BCAAA4" />
      <ellipse cx="128" cy="102" rx="30" ry="18" fill="#D7CCC8" />
      <ellipse cx="100" cy="92" rx="28" ry="16" fill="#EFEBE9" />

      {/* Pilares / arcos de rocha */}
      <rect x="78" y="68" width="10" height="35" rx="5" fill="#795548" />
      <rect x="112" y="72" width="10" height="32" rx="5" fill="#6D4C41" />
      <rect x="95" y="60" width="12" height="40" rx="6" fill="#8D6E63" />

      {/* Cacto */}
      <rect x="55" y="84" width="5" height="28" rx="2.5" fill="#4CAF50" />
      <rect x="45" y="92" width="15" height="4" rx="2" fill="#4CAF50" />
      <rect x="58" y="96" width="12" height="4" rx="2" fill="#4CAF50" />

      {/* Cacto direito */}
      <rect x="140" y="86" width="5" height="26" rx="2.5" fill="#388E3C" />
      <rect x="133" y="93" width="12" height="4" rx="2" fill="#388E3C" />

      {/* Sol quente / estrela de luz */}
      <circle cx="155" cy="32" r="12" fill="#FFD54F" opacity="0.8" />
      <circle cx="155" cy="32" r="8" fill="#FFE082" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={155 + Math.cos(angle * Math.PI / 180) * 14}
          y1={32 + Math.sin(angle * Math.PI / 180) * 14}
          x2={155 + Math.cos(angle * Math.PI / 180) * 20}
          y2={32 + Math.sin(angle * Math.PI / 180) * 20}
          stroke="#FFD54F"
          strokeWidth="2"
          opacity="0.7"
        />
      ))}

      {/* Crânio decorativo */}
      <circle cx="100" cy="72" r="7" fill="#EFEBE9" />
      <circle cx="97" cy="70" r="1.5" fill="#5D4037" />
      <circle cx="103" cy="70" r="1.5" fill="#5D4037" />

      {/* Água */}
      <ellipse cx="100" cy="138" rx="82" ry="14" fill="rgba(30,136,229,0.3)" />
      <ellipse cx="100" cy="143" rx="85" ry="10" fill="rgba(30,136,229,0.18)" />
    </svg>
  );
}

/* =========================================================
   Mapa de componentes por tipo
   ========================================================= */
const ISLAND_RENDERERS: Record<IslandType, () => React.ReactElement> = {
  tropical: TropicalIsland,
  volcanic: VolcanicIsland,
  snowy: SnowyIsland,
  jungle: JungleIsland,
  desert: DesertIsland,
};

/* =========================================================
   MAIN ISLAND COMPONENT
   ========================================================= */
interface IslandProps {
  project: Project;
  projectIndex: number;
  totalProjects: number;
  boatProgress: number;
  onSelect: (project: Project) => void;
}

/* ... renderers ... */

export default function Island({ project, projectIndex, totalProjects, boatProgress, onSelect }: IslandProps) {
  // Progresso relativo a este projeto específico
  const totalScaled = boatProgress * totalProjects;
  const currentGlobalIndex = Math.floor(Math.min(totalScaled, totalProjects - 0.001));
  const segmentProgress = totalScaled % 1;

  // Só renderiza se for a ilha atual, a anterior (saindo) ou a próxima (entrando)
  const isVisible = Math.abs(currentGlobalIndex - projectIndex) <= 1;

  if (!isVisible) return null;

  // Cálculo de distância para efeitos (0 no centro do seu segmento)
  const relativeDist = (currentGlobalIndex - projectIndex) + (segmentProgress - 0.5);

  // A ilha fica fixa no centro (50%), mas pode ter um leve parallax oposto ao barco
  const horizontalPos = 50 - (relativeDist * 40);

  const isActive = Math.abs(relativeDist) < 0.25;
  const opacity = Math.max(0, 1 - Math.abs(relativeDist) * 2);
  const scale = 0.8 + (1 - Math.abs(relativeDist)) * 0.3;

  const IslandRenderer = ISLAND_RENDERERS[project.islandType];

  return (
    <div
      className={styles.islandContainer}
      style={{
        left: `${horizontalPos}%`,
        opacity,
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: isActive ? 25 : 20,
      }}
    >
      <div
        className={`${styles.island} ${isActive ? styles.active : ''}`}
        onClick={() => onSelect(project)}
        role="button"
        aria-label={`Projeto: ${project.name}`}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(project); }}
      >
        {/* Névoa de costa ao redor da base */}
        <div className={styles.shoreEffect}>
          <div className={styles.foam} />
          <div className={styles.ripples} />
        </div>

        {/* Corpo da ilha — SVG inline */}
        <div className={styles.islandBody}>
          <div className={styles.islandWrapper}>
            <IslandRenderer />
          </div>
          {/* Glow de cor temática */}
          <div
            className={styles.colorGlow}
            style={{ background: `radial-gradient(circle, ${project.islandColor}40 0%, transparent 70%)` }}
          />
        </div>

        {/* Label de identificação */}
        {isActive && (
          <div className={styles.info}>
            <div className={styles.logPoseFrame}>
              <span className={styles.islandTitle}>{project.name}</span>
              <span className={styles.clickHint}>ATRACAR NO PORTO ⚓</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
