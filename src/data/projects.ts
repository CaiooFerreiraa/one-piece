import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'dawn-island',
    name: 'Sistema de E-Commerce',
    description:
      'Plataforma completa de e-commerce com autenticação, carrinho, pagamentos e painel admin. Construída com Next.js, Prisma e Stripe.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    islandPosition: 0.15,
    islandColor: '#2ECC71',
    islandType: 'tropical',
  },
  {
    id: 'skypiea',
    name: 'Dashboard Analytics',
    description:
      'Dashboard de analytics em tempo real com gráficos interativos, filtros avançados e exportação de relatórios em PDF.',
    tech: ['React', 'D3.js', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    islandPosition: 0.35,
    islandColor: '#F39C12',
    islandType: 'snowy',
  },
  {
    id: 'water-7',
    name: 'API REST — Microserviços',
    description:
      'Arquitetura de microserviços com Docker, API Gateway, autenticação JWT e mensageria com RabbitMQ.',
    tech: ['Node.js', 'Docker', 'RabbitMQ', 'Redis', 'Nginx'],
    githubUrl: 'https://github.com',
    islandPosition: 0.55,
    islandColor: '#3498DB',
    islandType: 'volcanic',
  },
  {
    id: 'thriller-bark',
    name: 'App Mobile — React Native',
    description:
      'Aplicativo de produtividade com notificações push, modo offline, sincronização em nuvem e tema escuro/claro.',
    tech: ['React Native', 'Expo', 'Firebase', 'Zustand', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    islandPosition: 0.72,
    islandColor: '#9B59B6',
    islandType: 'jungle',
  },
  {
    id: 'marineford',
    name: 'Plataforma de Streaming',
    description:
      'Plataforma de streaming de vídeo com transcodificação, CDN, recomendações por IA e player customizado.',
    tech: ['Next.js', 'FFmpeg', 'AWS S3', 'TensorFlow', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    islandPosition: 0.88,
    islandColor: '#E74C3C',
    islandType: 'desert',
  },
];
