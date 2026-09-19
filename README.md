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
│   │   ├── HeroCarousel.tsx       # Roleta 3D de personagens (protótipo, ver seção Páginas)
│   │   ├── HeroInfoPanel.tsx      # Painel de nome + história com digitação (protótipo)
│   │   ├── PageHeader.tsx         # Header de página com título, descrição e breadcrumb
│   │   ├── PlayerCard.tsx         # Card de jogador com status ativo/ausente
│   │   ├── SidebarNav.tsx         # Sidebar com suporte a subitems colapsáveis
│   │   ├── StoryCard.tsx          # Card de evento de lore
│   │   └── ThemeToggleBar.tsx     # Barra fixa no rodapé: troca a paleta de cores (Padrão / Lilás-Roxo)
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
│   │   ├── Sobre.tsx              # Sobre a campanha, heróis ativos, regras de mesa
│   │   └── personagens_teste.tsx  # Roleta 3D de heróis (protótipo/WIP)
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
| `/personagens_teste` | personagens_teste | Protótipo: roleta 3D de personagens (WIP, sem dados reais ainda) |

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

### `/personagens_teste` — Roleta de Heróis (protótipo)

Vitrine experimental de personagens em formato de "roleta" 3D, acessível pelo menu em **Personagens → Roleta (Teste)**. Ainda não tem dados reais — cada carta é um placeholder mostrando só o texto **"Herói"**, servindo de base visual para quando os personagens forem definidos.

A página (`src/pages/personagens_teste.tsx`) guarda o índice do personagem em foco (`active`) e repassa para dois componentes: `HeroCarousel.tsx` (a roleta) e `HeroInfoPanel.tsx` (o painel de nome + história abaixo dela).

**Layout — `HeroCarousel.tsx`:**
- As cartas (proporção 5:7, estilo carta de tarot) ficam dispostas em arco usando `perspective` CSS: a carta em foco fica maior, centralizada e elevada, com borda dourada e brilho; as cartas ao redor ficam menores, giradas em `rotateY` e escurecidas, dando a impressão de profundidade.
- Abaixo das cartas há uma base circular (`radial-gradient` + dois anéis girando em `animate-[spin_..s_linear_infinite]`, um em cada sentido) simulando um círculo de invocação — as cartas parecem pairar 40px acima dela.
- O componente tem `overflow-x-hidden` porque as cartas dos extremos saem propositalmente da largura do container para o efeito de leque; sem isso, em telas estreitas o navegador cria scroll horizontal.
- É controlado de fora: recebe `total`, `active` e `onChange`, não guarda o índice em foco sozinho.

**Comportamento — `HeroCarousel.tsx`:**
- Setas `<`/`>` (ou clicar numa carta lateral) chamam `onChange` com o novo índice. A troca não reordena o DOM — cada carta recalcula seu próprio deslocamento (`transform`/`opacity`/`filter`) e a mudança anima via `transition` CSS de **800ms** (`cubic-bezier(0.22, 1, 0.36, 1)`), então a carta que sai do centro desliza suavemente para a lateral enquanto a próxima assume a frente.
- A distância "circular" entre cartas é calculada em `getOffset()`, que sempre retorna o caminho mais curto (ex: da carta 7 para a carta 1 anda +1, não -6), permitindo dar a volta na roleta nos dois sentidos.

**Painel de história — `HeroInfoPanel.tsx`:**
- Mostra o nome do herói em foco (placeholder `Herói I`..`Herói VII`, numeral romano) numa barra superior, e abaixo o campo **História** com um lorem ipsum fixo.
- O texto da história é revelado caractere a caractere (efeito de digitação, com cursor piscando `|` enquanto digita) e a caixa cresce de altura acompanhando o texto — a altura real do conteúdo é medida via `ref.scrollHeight` e animada com `transition: height`, então o crescimento é sempre suave, nunca um salto brusco.
- Sempre que `active` muda, o painel inteiro (nome + história) fecha por completo (altura → 0, ~420ms) antes de trocar o conteúdo; só depois de fechado ele troca para o novo nome, zera o texto digitado e reabre digitando a história do personagem em foco.
- Cliques rápidos nas setas cancelam a troca pendente e reagendam para o índice mais recente, então o painel nunca fica "preso" mostrando um personagem que já não está mais em foco.

**Para customizar:**
- `HeroCarousel.tsx` → `DEPTH_STYLES` (deslocamento/escala/rotação/opacidade/desfoque por distância da carta em foco), `TRANSITION` (duração/curva da troca de carta), `w-[13.5rem] sm:w-[16.5rem]` (tamanho das cartas, `aspect-[5/7]` deriva a altura).
- `HeroInfoPanel.tsx` → `HISTORIA_PLACEHOLDER` (texto), `CHARS_PER_TICK`/`TICK_MS` (velocidade da digitação), `CLOSE_MS` (duração do fechamento antes de trocar de personagem).
- Quando os personagens forem definidos, o próximo passo é passar dados reais (nome, classe, imagem, história) para os dois componentes por props — similar ao `cards` de `AlbumFigurinhas.tsx` — no lugar dos placeholders fixos.

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

### Paleta alternativa "Lilás / Roxo"

Barra fixa no rodapé (`ThemeToggleBar.tsx`, renderizada uma vez em `App.tsx`, visível em todas as páginas) com 2 botões para trocar a paleta de cores do site inteiro:

- **Padrão** — a paleta laranja/dourada de sempre.
- **Lilás / Roxo** — mesma estrutura, tons de lilás/roxo no lugar do laranja/dourado/vermelho, incluindo os fundos (sidebar, cards, background).

**Como funciona:** o botão só troca um atributo `data-theme="lilac"` no `<html>` e salva a escolha em `localStorage` (`fundo-da-grota-theme`). Nenhum componente precisa saber qual tema está ativo — todas as cores (inclusive os `--background`/`--card`/`--primary` etc. do shadcn) são CSS custom properties redefinidas em bloco só para esse atributo, em `src/index.css`:

```css
:root[data-theme="lilac"] {
  --fundo-da-grota-orange: 274 70% 60%;
  /* ...resto das variáveis, incluindo --background, --card, --primary etc. */
}
```

Um script inline em `index.html` aplica o atributo salvo antes do React montar, pra não piscar a paleta errada ao carregar a página (FOUC).

**Exceção proposital:** no Álbum ([AlbumFigurinhas.tsx](src/pages/AlbumFigurinhas.tsx)), a borda dourada dos heróis jogáveis ativos (`heroi: true`) funciona como selo de status e **não muda** com o tema — ela usa uma variável própria e fixa, `--pc-hero-gold`, definida uma única vez em `:root` e nunca redefinida no bloco `[data-theme="lilac"]`. A borda dos demais personagens do álbum (NPCs, ex-heróis) continua usando `--fundo-da-grota-ash`/`--fundo-da-grota-orange` normalmente, então essa sim muda com o tema.

**Para adicionar um terceiro tema:** duplique o bloco `:root[data-theme="..."]` com um novo valor de atributo, defina as mesmas variáveis com a nova paleta, e adicione um terceiro botão em `ThemeToggleBar.tsx` chamando `escolher("nome-do-tema")`.

---

## Deploy

Recomendado via **Vercel** ou **Netlify**:
- Build command: `npm run build`
- Output directory: `dist`
