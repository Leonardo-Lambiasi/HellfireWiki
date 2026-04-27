export interface Jogador {
  id: number;
  nome: string;
  personagens: string[];
  bio: string;
  avatar: string;
  ativo: boolean;
}

export const jogadores: Jogador[] = [
  {
    id: 1,
    nome: "Henrique Riserio",
    personagens: ["Dungeon Master", "Ragnar Wolfside"],
    bio: "Arquiteto do mundo e mestre da mesa. Quando não está destruindo os planos dos jogadores, encarna Ragnar com uma dedicação suspeita.",
    avatar: "🐉",
    ativo: true,
  },
  {
    id: 2,
    nome: "Leonardo Lambiasi",
    personagens: ["Adrik Lahabrea", "Leomir Holdheck", "Oggam"],
    bio: "Veterano de múltiplos personagens — um vivo, um inativo e um que não sobreviveu para contar a história. Especialista em escolhas que parecem ótimas na hora.",
    avatar: "⚒️",
    ativo: true,
  },
];
