'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Boat.module.css';

interface BoatProps {
  progress: number;
  numProjects: number;
}

export default function Boat({ progress, numProjects }: BoatProps) {
  const boatRef = useRef<HTMLDivElement>(null);

  // Progresso dentro do segmento atual (0 a 1)
  const totalScaled = progress * numProjects;
  const currentIndex = Math.floor(Math.min(totalScaled, numProjects - 0.001));
  const segmentProgress = totalScaled % 1;

  // Mapeia 0->1 do segmento para -20% -> 120% da tela
  const targetPos = -20 + segmentProgress * 140;

  const displayPos = useRef<number>(targetPos);
  const lastIndex = useRef<number>(currentIndex);
  const animFrameRef = useRef<number>(0);

  const [renderPos, setRenderPos] = useState<number>(targetPos);
  const [tilt, setTilt] = useState<number>(0);
  const [speedIntensity, setSpeedIntensity] = useState<number>(0);

  useEffect(() => {
    let lastTime: number = performance.now();

    const animate = (now: number): void => {
      const dt: number = Math.min(now - lastTime, 50);
      lastTime = now;

      // Se mudamos de ilha/segmento, "teleporta" a referência para evitar lerp cruzando a tela
      if (currentIndex !== lastIndex.current) {
        displayPos.current = targetPos;
        lastIndex.current = currentIndex;
      }

      const current: number = displayPos.current;
      const lerpFactor: number = 1 - Math.pow(0.01, dt / 1000);
      const newPos: number = current + (targetPos - current) * lerpFactor;

      const speed: number = newPos - current;
      const newTilt: number = Math.max(-12, Math.min(12, speed * 80));
      const intensity: number = Math.min(1, Math.abs(speed) * 50);

      displayPos.current = newPos;
      setRenderPos(newPos);
      setTilt(newTilt);
      setSpeedIntensity(intensity);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [targetPos, currentIndex]);

  // Balanço suave de ondas (senoide baseado na posição para dar continuidade)
  const bobOffset: number = renderPos * 0.1;

  return (
    <div
      ref={boatRef}
      className={styles.boatContainer}
      style={{
        left: `${renderPos}%`,
      }}
    >
      {/* Esteira (wake) em V atrás do barco */}
      <div
        className={styles.wakeV}
        style={{ opacity: 0.3 + speedIntensity * 0.5 }}
      >
        <div className={styles.wakeLeft} />
        <div className={styles.wakeRight} />
      </div>

      <div
        className={styles.boat}
        style={{
          transform: `rotate(${tilt}deg)`,
        }}
      >
        {/* Going Merry Image */}
        <div className={styles.merryWrapper}>
          <img
            src="/assets/going-merry.png"
            alt="Going Merry"
            className={styles.merryImage}
          />

          {/* Reflexo na água — espelhado e com blur */}
          <div className={styles.reflectionContainer}>
            <img
              src="/assets/going-merry.png"
              alt=""
              aria-hidden="true"
              className={styles.merryReflection}
            />
          </div>
        </div>

        {/* Espuma + bolhas na base */}
        <div className={styles.wakeContainer}>
          <div
            className={styles.wake}
            style={{ transform: `scaleX(${1 + speedIntensity * 0.6})` }}
          />
          <div
            className={styles.wakeSecondary}
            style={{ opacity: 0.1 + speedIntensity * 0.4 }}
          />
          <div className={styles.bubbles} />
        </div>
      </div>

      {/* Sombra submersa */}
      <div className={styles.shadow} />
    </div>
  );
}
