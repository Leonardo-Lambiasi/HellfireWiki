# FUNDO DA GROTA WIKI

Wiki estática para a campanha de D&D **Fundo da Grota**. Centraliza heróis, NPCs, álbum de retratos com zoom, histórias por temporada, mapas, jogadores e referência completa de regras D&D 5e com regras da mesa — tudo num único lugar com visual dark temático.

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
fundo-da-grota-wiki/
├── public/
│   ├── favicon.svg
│   └── portraits/              # Retratos dos personagens (PNG/JPEG)
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge.tsx          # Badge com variantes: fundo-da-grota, gold, destructive…
│   │   │   └── card.tsx           # Card com glow ao hover
│   │   ├── CharacterCard.tsx      # Card reutilizável para Heróis
│   │   ├── GlobalSearch.tsx       # Barra de pesquisa global (sidebar) com dropdown
│   │   ├── PageHeader.tsx         # Header de página com título, descrição e breadcrumb
│   │   ├── PlayerCard.tsx         # Card de jogador com status ativo/ausente
│   │   ├── SidebarNav.tsx         # Sidebar com suporte a subitems colapsáveis
│   │   └── StoryCard.tsx          # Card de evento de lore
│   ├── data/
│   │   ├── historias.ts           # Eventos de lore por temporada e lore geral
│   │   ├── jogadores.ts           # Players da mesa
│   │   ├── mapas.ts               # Regiões + total de temporadas
│   │   └── personagens.ts         # Heróis (PCs) e NPCs
│   ├── lib/
│   │   └── utils.ts               # Helper cn() para composição de classes
│   ├── pages/
│   │   ├── Home.tsx               # Landing page com stats e navegação rápida
│   │   ├── AlbumFigurinhas.tsx    # Painel de retratos com lightbox + zoom
│   │   ├── PersonagensPCs.tsx     # Grid de heróis com busca
│   │   ├── PersonagensNPCs.tsx    # Grid de NPCs com busca
│   │   ├── Jogadores.tsx          # Grid de players
│   │   ├── Historias.tsx          # Histórias por temporada + Lore Geral com busca
│   │   ├── Mapas.tsx              # Regiões de Ark com busca
│   │   ├── Regras.tsx             # Referência rápida D&D 5e + regras da mesa (8 abas)
│   │   └── Sobre.tsx              # Sobre a campanha, heróis ativos, regras de mesa
│   ├── App.tsx                    # Layout raiz: sidebar + rotas
│   ├── index.css                  # Tema global e configuração Tailwind v4
│   ├── main.tsx                   # Entry point React
│   └── vite-env.d.ts              # Tipos Vite
├── QUESTIONARIO.md                # Guia para popular o site com dados reais
├── RESUMO_CONTEUDO.md             # Snapshot do conteúdo atual do site
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
| `/personagens/pcs` | PersonagensPCs | Grid de heróis com busca |
| `/personagens/npcs` | PersonagensNPCs | Grid de NPCs com busca |
| `/album` | AlbumFigurinhas | Álbum de retratos com lightbox e zoom |
| `/jogadores` | Jogadores | Cards dos players da mesa |
| `/historias` | Historias | Histórias por temporada + Lore Geral com busca |
| `/mapas` | Mapas | Regiões de Ark com busca |
| `/regras` | Regras | Referência D&D 5e + regras da mesa |
| `/sobre` | Sobre | Campanha, heróis ativos, sessões e regras de casa |

---

## Páginas

### `/` — Home

Landing page da wiki. Exibe:

- **Hero** com título animado e tagline da campanha
- **6 cards de stats** calculados automaticamente dos arquivos de dados:
  - Heróis, NPCs, Histórias, Jogadores ativos, Regiões, Temporadas
  - Stats com valor `0` exibem `—` em vez de um zero solto
- **Grid de navegação rápida** com cards clicáveis para cada seção

---

### `/personagens/pcs` — Heróis

Grid de personagens jogadores com barra de busca. Cada card exibe:
- Ícone, nome e raça
- Badge de classe (cor varia por tipo) e badge de status (Vivo / MIA / Morto / Desconhecido)
- Descrição biográfica e origem

Busca filtra por: nome, classe, raça, origem, descrição, status.

---

### `/personagens/npcs` — NPCs

Mesma estrutura dos heróis, para NPCs relevantes da campanha. Busca filtra por: nome, classe, raça, origem, descrição.

---

### `/album` — Painel de Personagens

Galeria visual com retratos. Cada card exibe:
- Retrato do personagem (imagem em `public/portraits/`)
- Nome e classe sobrepostos no gradiente inferior
- **Borda dourada** para heróis ativos (`heroi: true`)
- Imagens carregadas com `loading="lazy"`

**Lightbox** ao clicar:
- Scroll do mouse → zoom progressivo até 5×
- Duplo-clique → zoom para 2.5× ou reseta
- Arrastar → pan da imagem quando ampliada
- Botão ⊡ → reseta zoom | Tecla `0` → reseta zoom
- Tecla `Escape` → fecha | Clicar fora → fecha (só sem zoom)

---

### `/jogadores` — Jogadores

Grid dos players da mesa. Cada card exibe:
- Avatar (emoji), nome e bio
- Badge Ativo / Ausente
- Lista de personagens associados

---

### `/historias` — Histórias

Histórias organizadas por temporada. Funcionalidades:
- Abas por temporada geradas automaticamente por `temporadas` em `mapas.ts`
- Aba **Lore Geral** para eventos históricos (`temporada: null`)
- **Busca** — ao digitar 2+ caracteres, substitui as abas e filtra em todas as histórias
- Botão X para limpar busca e voltar às abas

---

### `/mapas` — Mapas

Catálogo de regiões do mundo com busca por nome e descrição. Placeholder para mapas visuais.

---

### `/regras` — Regras

Referência D&D 5e com **8 abas** e animação de fade ao trocar:
- Atributos · Combate · Movimento · Condições · Ambiente · Domínio · Armas · Regras da Mesa

---

### `/sobre` — Sobre

Informações sobre a campanha:
- Premissa da campanha
- Heróis ativos (filtrado por `status === "Vivo"`)
- Cards de sessões (frequência, horário, temporadas, tom, mortes)
- Regras da casa
- Sobre esta wiki

---

## Como adicionar dados

### Heróis / NPCs — `src/data/personagens.ts`

```ts
{
  id: number;
  nome: string;
  classe: string;
  raca: string;
  origem: string;
  descricao: string;
  status: "Vivo" | "Morto" | "MIA" | "Aliado" | "Desconhecido";
  icon: string;  // emoji
}
```

### Histórias — `src/data/historias.ts`

```ts
{
  id: number;
  titulo: string;
  dataIngame: string;        // ex: "Ano 1250 — Era das Chamas"
  resumo: string;
  temporada: number | null;  // número da temporada, ou null para Lore Geral
}
```

O número de abas em Histórias é controlado por `temporadas` em `src/data/mapas.ts`.

### Regiões — `src/data/mapas.ts`

```ts
{ nome: string; descricao: string; }
```

### Álbum — `src/pages/AlbumFigurinhas.tsx`

1. Coloque o arquivo em `public/portraits/NomeDoPersonagem.png`
2. Adicione ao array `cards`:
```ts
{ id: N, nome: "Nome", classe: "Classe", icon: "emoji", imagem: "/portraits/NomeDoPersonagem.png", heroi: true }
// heroi: true → borda dourada (apenas para heróis ativos)
```

---

## Pesquisa

### Global (sidebar)
`GlobalSearch.tsx` — busca em tempo real em todas as fontes de dados:
- Heróis, NPCs, Histórias, Regiões, Jogadores
- Mínimo 2 caracteres para exibir resultados
- Dropdown com categoria (Herói / NPC / História / Região / Jogador)
- Clicar navega para a página correspondente

### Por página
Disponível em: Heróis, NPCs, Histórias, Mapas.

---

## Tema visual

Paleta infernal baseada em CSS custom properties definidas em `src/index.css`:

| Variável | Uso |
|---|---|
| `--fundo-da-grota-orange` | Bordas, destaques, links ativos |
| `--fundo-da-grota-gold` | Títulos, textos de destaque |
| `--fundo-da-grota-red` | Elementos de perigo |
| `--fundo-da-grota-charcoal` | Sidebar, fundos |
| `--fundo-da-grota-ash` | Divisores, bordas sutis |
| `--fundo-da-grota-ember` | Detalhes secundários |

Tipografia: **Cinzel** (títulos) · **Crimson Pro** (corpo)

Animações: `animate-ember-glow` · `animate-fade-in-up` · `animate-flame-flicker`

---

## Deploy

Recomendado via **Vercel** ou **Netlify**:
- Build command: `npm run build`
- Output directory: `dist`
