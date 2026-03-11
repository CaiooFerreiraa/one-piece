export type IslandType = 'tropical' | 'volcanic' | 'snowy' | 'jungle' | 'desert';

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  islandPosition: number; // 0 to 1 (progress on the path)
  islandColor: string;
  islandType: IslandType;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  emoji: string;
  color: string;
}

export interface ScrollProgress {
  progress: number;
  direction: 'up' | 'down';
}
