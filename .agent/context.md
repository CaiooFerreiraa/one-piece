# Contexto do Projeto

## Visão Geral
- **Nome:** One Piece Interactive Portfolio
- **Descrição:** Portfólio interativo temático de One Piece com um barco (Going Merry) navegando entre ilhas que representam projetos, animado pelo scroll do usuário.
- **Stack:** Next.js 14 (App Router), TypeScript, CSS Modules, Framer Motion, GSAP (ScrollTrigger)
- **Iniciado em:** 2026-03-10
- **Última atualização:** 2026-03-10 (bugfix)

## Arquitetura

```
repositorio-one-piece/
├── .agent/
│   └── context.md
├── src/
│   ├── app/                    # Next.js App Router (presentation layer)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/             # Componentes reutilizáveis de UI
│   │   ├── Ocean/              # Cena oceânica com barco e animações de scroll
│   │   ├── Island/             # Ilhas (projetos) com tooltip e info
│   │   ├── Boat/               # Barco Pirata animado
│   │   ├── Navigation/         # Menu de navegação temático
│   │   ├── Hero/               # Seção inicial (Sunrise/título)
│   │   ├── About/              # Seção sobre mim
│   │   └── Contact/            # Seção de contato
│   │   ├── Contact/            # Seção de contato
│   ├── data/                   # Dados estáticos (projetos, personagens)
│   │   ├── projects.ts
│   │   └── characters.ts
│   ├── hooks/                  # Hooks customizados
│   │   ├── useScrollProgress.ts
│   │   └── useBoatPosition.ts
│   ├── styles/                 # Design tokens e variáveis globais
│   │   └── tokens.css
│   └── types/                  # Tipagens TypeScript
│       └── index.ts
├── public/
│   └── assets/                 # Imagens, SVGs, fontes
└── package.json
```

## Decisões Arquiteturais

- **Next.js App Router**: Escolhido pela performance, SEO e simplicidade de roteamento
- **GSAP ScrollTrigger**: Biblioteca mais robusta para animações baseadas em scroll — o barco se move em sincronia com o scroll
- **CSS Modules + Design Tokens**: Evita conflitos de estilos e centraliza valores de cores/espaçamentos
- **HTML5 Canvas (opcional)**: Pode ser usado para o oceano animado, com fallback CSS

## Design System (Tokens)

- **Cores primárias:** Azul oceano (#0A2463), dourado (#FFD700), vermelho Luffy (#CC2936)
- **Fontes:** 'Pirata One' (títulos), 'Inter' (corpo)
- **Animações:** ondas em loop (CSS), barco sincronizado ao scroll (GSAP)

## Componentes e Módulos

### Ocean Scene (principal)
- Canvas ou div com gradiente oceânico
- Camadas: céu, nuvens, horizonte, ondas, barco, espuma
- O barco se move da esquerda para direita conforme scroll avança

### Island (projeto)
- Elemento SVG/PNG de ilha tropical
- Ao barco se aproximar, surge nome do projeto e tooltip
- Click abre modal com detalhes do projeto

### Boat
- SVG animado do Going Merry (ou barco pirata genérico)
- Animação de balanço (sway) contínua
- Posição X driven pelo scroll progress (0% → 100%)

### Characters
- Silhuetas/ilustrações dos personagens Mugiwara
- Decorativos no background das ilhas

## Padrões Adotados

- Componentes funcionais com TypeScript estrito
- Hooks customizados para lógica de animação
- Nenhum valor de cor/espaçamento hardcoded — usar CSS variables
- Estados de loading para assets externos

## Histórico de Alterações

| Data | Arquivo(s) | Descrição da Mudança |
|------|------------|----------------------|
| 2026-03-10 | .agent/context.md | Criação inicial do contexto do projeto |
| 2026-03-10 | src/* | Implementação completa da estrutura do portfólio (Hero, Ocean, Boat, Island, About, Contact) |
| 2026-03-10 | src/app/globals.css | Corrigido caminho de import de `tokens.css` |
| 2026-03-10 | src/components/Boat | Substituído barco CSS pela imagem estilizada do Going Merry |
| 2026-03-10 | src/components/Boat/Boat.tsx | Navegação com lerp suave, tilt dinâmico e wake proporcional à velocidade |
| 2026-03-10 | src/components/Boat/Boat.module.css | Wake em V-shape, reflexo com fade, espuma radial |
| 2026-03-10 | src/components/Island/* | Ilhas redesenhadas em SVG puro (tropical, vulcânica, nevada, selva, deserto). Removido uso de islandImage |
| 2026-03-10 | src/types/index.ts | Adicionado IslandType, removido islandImage de Project |
| 2026-03-10 | src/data/projects.ts | Atualizado para usar islandType ao invés de islandImage |
| 2026-03-10 | src/components/Ocean/Ocean.module.css | Horizonte e superfície do oceano ajustados para ilhas distantes (top 48%, horizonte em 52%) |
| 2026-03-11 | src/components/* | Ajustado posicionamento vertical do barco (55%) e ilhas (50%) para reduzir a distância entre eles e melhorar a imersão. |
