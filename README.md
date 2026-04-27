# HELLFIRE WIKI

Wiki estática para a campanha de D&D **Hellfire**. Centraliza heróis, NPCs, álbum de retratos, histórias por temporada, mapas, jogadores e uma referência completa de regras D&D 5e com regras da mesa — tudo num único lugar com visual dark temático.

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI e componentização |
| TypeScript | 6 | Tipagem estática |
| Vite | 8 | Build e dev server |
| Tailwind CSS | 4 | Estilização utilitária (`@tailwindcss/vite`) |
| React Router DOM | 7 | Roteamento client-side |
| Lucide React | — | Ícones |
| shadcn/ui (base) | — | Componentes Card e Badge |
| clsx + tailwind-merge | — | Composição de classes |

---

## Instalação e uso

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run build    # build de produção
npm run preview  # visualizar build local
npm run lint     # lint com ESLint
```

---

## Estrutura do projeto

```
hellfire-wiki/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge.tsx          # Badge com variantes: hellfire, gold, destructive…
│   │   │   └── card.tsx           # Card com glow ao hover
│   │   ├── CharacterCard.tsx      # Card reutilizável para Heróis e NPCs
│   │   ├── PageHeader.tsx         # Header de página com título, descrição e breadcrumb
│   │   ├── PlayerCard.tsx         # Card de jogador com status ativo/ausente
│   │   ├── SidebarNav.tsx         # Sidebar com suporte a subitems colapsáveis
│   │   └── StoryCard.tsx          # Card de evento de lore
│   ├── data/
│   │   ├── historias.ts           # Eventos de lore do mundo
│   │   ├── jogadores.ts           # Players da mesa
│   │   ├── mapas.ts               # Regiões + contadores (temporadas, regiões exploradas)
│   │   └── personagens.ts         # Heróis (PCs) e NPCs
│   ├── lib/
│   │   └── utils.ts               # Helper cn() para composição de classes
│   ├── pages/
│   │   ├── Home.tsx               # Landing page com stats e navegação rápida
│   │   ├── AlbumFigurinhas.tsx    # Painel de retratos com lightbox
│   │   ├── PersonagensPCs.tsx     # Grid de heróis
│   │   ├── PersonagensNPCs.tsx    # Grid de NPCs
│   │   ├── Jogadores.tsx          # Grid de players
│   │   ├── Historias.tsx          # Histórias separadas por temporada + Lore Geral
│   │   ├── Mapas.tsx              # Regiões exploradas
│   │   ├── Regras.tsx             # Referência rápida D&D 5e + regras da mesa (8 abas)
│   │   └── Sobre.tsx              # Sobre a campanha, regras, convenções
│   ├── App.tsx                    # Layout raiz: sidebar + rotas
│   ├── index.css                  # Tema global e configuração Tailwind v4
│   ├── main.tsx                   # Entry point React
│   └── vite-env.d.ts              # Tipos Vite
├── CAMPANHA.md                    # Questionário para popular o site com dados reais
├── vite.config.ts
├── tsconfig.app.json
└── package.json
```

---

## Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Stats da campanha + navegação rápida |
| `/personagens` | — | Redireciona para `/personagens/pcs` |
| `/personagens/pcs` | PersonagensPCs | Grid de heróis jogadores |
| `/personagens/npcs` | PersonagensNPCs | Grid de NPCs relevantes |
| `/album` | AlbumFigurinhas | Álbum de figurinhas com retratos dos personagens |
| `/jogadores` | Jogadores | Cards dos players da mesa |
| `/historias` | Historias | Histórias por temporada + Lore Geral |
| `/mapas` | Mapas | Regiões exploradas de Ark |
| `/sobre` | Sobre | Campanha, sistema, regras de mesa |

---

## Páginas

### `/` — Home

Landing page da wiki. Exibe:

- **Hero** com título animado, subtítulo e tagline da campanha
- **6 cards de stats** calculados automaticamente dos arquivos de dados:
  - Heróis, NPCs, Histórias, Jogadores ativos, Regiões exploradas, Temporadas
- **Grid de navegação rápida** com cards clicáveis para cada seção

---

### `/personagens/pcs` — Heróis

Grid de personagens jogadores. Cada card exibe:
- Ícone, nome e raça
- Badge de classe (cor varia por tipo) e badge de status (Vivo / MIA / Morto)
- Descrição biográfica, habilidades e origem

---

### `/personagens/npcs` — NPCs

Mesma estrutura dos heróis, mas para NPCs relevantes da campanha — aliados, vilões e figuras neutras.

---

### `/album` — Painel de Personagens

Galeria visual com retratos dos heróis e figuras da campanha. Cada card exibe:
- Retrato do personagem (imagem PNG em `src/assets/`)
- Nome e classe sobrepostos no gradiente inferior
- Zoom suave ao passar o mouse
- **Lightbox**: clicar na imagem abre o retrato em tamanho completo
  - Fechar clicando fora da imagem, no botão ✕ ou pressionando `Escape`
  - Cards sem imagem não são clicáveis

---

### `/jogadores` — Jogadores

Grid dos players da mesa. Cada card exibe:
- Avatar (emoji), nome e bio curta
- Badge Ativo / Ausente
- Lista de personagens associados

---

### `/historias` — Histórias

Histórias organizadas por temporada com abas de navegação. Funcionalidades:
- Uma aba por temporada (`Temporada 1`, `Temporada 2`, etc.) — geradas automaticamente pelos dados
- Aba **Lore Geral** para eventos históricos fora das temporadas (`temporada: null`)
- Contador de eventos por aba

---

### `/mapas` — Mapas

Catálogo de regiões do mundo. Cada card exibe nome, descrição e status de exploração.

---

### `/sobre` — Sobre

Página estática com informações sobre a campanha: premissa, sistema, regras de mesa, convenções de lore.

---

## Como adicionar dados

### Heróis / NPCs — `src/data/personagens.ts`

```ts
// Campos do objeto Personagem
{
  id: number;
  nome: string;
  classe: string;
  raca: string;
  origem: string;
  descricao: string;
  habilidades: string[];
  status: "Vivo" | "Morto" | "MIA" | "Aliado" | "Desconhecido";
  icon: string;  // emoji
}
```

### Histórias — `src/data/historias.ts`

```ts
{
  id: number;
  titulo: string;
  dataIngame: string;           // ex: "Ano 1250 — Era das Chamas"
  resumo: string;
  tags: string[];               // ex: ["#Guerra", "#Traição"]
  personagensEnvolvidos: string[];
  temporada: number | null;     // número da temporada, ou null para Lore Geral
}
```

O número total de abas na página de Histórias é controlado por `temporadas` em `src/data/mapas.ts`.

### Álbum de Figurinhas — `src/pages/AlbumFigurinhas.tsx`

1. Adicione a imagem PNG em `src/assets/NomeDoPersonagem.png`
2. Importe no topo do arquivo:
   ```ts
   import NomeImg from "@/assets/NomeDoPersonagem.png";
   ```
3. Adicione ao array `cards`:
   ```ts
   { id: 7, nome: "Nome", classe: "Classe", tipo: "Herói", raridade: "raro", icon: "🗡️", imagem: NomeImg }
   ```

### Mapas — `src/data/mapas.ts`

- `temporadas` e `regioesExploradas`: editar manualmente (contadores da Home)
- `regioes[]`: adicionar objetos `{ nome, descricao, status }`

---

## Tema visual

Paleta infernal baseada em CSS custom properties definidas em `src/index.css`:

| Variável | Cor | Uso |
|---|---|---|
| `--hellfire-orange` | Laranja quente | Bordas, destaques, links ativos |
| `--hellfire-gold` | Dourado | Títulos, textos de destaque |
| `--hellfire-red` | Vermelho escuro | Elementos de perigo, efeitos |
| `--hellfire-charcoal` | Cinza carvão | Sidebar, fundos |
| `--hellfire-ash` | Cinza médio | Divisores, bordas sutis |
| `--hellfire-ember` | Laranja apagado | Detalhes secundários |

Tipografia:
- **Cinzel** (Google Fonts) — títulos e cabeçalhos, estilo épico/romano
- **Crimson Pro** (Google Fonts) — corpo de texto, legível e elegante

Animações customizadas: `animate-ember-glow`, `animate-fade-in-up`, `animate-flame-flicker`.

---

## Deploy

Recomendado via **Vercel** ou **Netlify** — aponte para o repositório com:
- Build command: `npm run build`
- Output directory: `dist`
