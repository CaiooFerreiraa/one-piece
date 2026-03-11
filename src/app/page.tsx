import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import Ocean from '@/components/Ocean/Ocean';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
      {/* HUD & Navegação */}
      <Navigation />

      {/* Conteúdo Principal Vertical */}
      <div id="scroll-container">
        {/* Parte 1: Início */}
        <Hero />

        {/* Parte 2: Sobre */}
        <About />

        {/* Parte 3: Mar Interativo (Projetos) */}
        <Ocean />

        {/* Parte 4: Contato & Encerramento */}
        <Contact />
      </div>
    </main>
  );
}
