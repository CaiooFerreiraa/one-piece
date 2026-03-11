import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'One Piece Portfolio — Desbravando os Mares do Código',
  description:
    'Portfólio interativo temático de One Piece. Navegue pelo oceano e descubra projetos de desenvolvimento web como se fossem ilhas a conquistar.',
  keywords: ['portfólio', 'desenvolvedor', 'one piece', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Desenvolvedor' }],
  openGraph: {
    title: 'One Piece Portfolio',
    description: 'Desbravando os mares do código',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
