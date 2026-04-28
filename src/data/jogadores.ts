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
    nome: "Henrique",
    personagens: ["Dungeon Master", "Ragnar"],
    bio: "Arquiteto do mundo e mestre da mesa. Quando não está destruindo os planos dos jogadores, encarna Ragnar com uma dedicação suspeita.",
    avatar: "🐉",
    ativo: true,
  },
  {
    id: 2,
    nome: "Leonardo",
    personagens: ["Adrik", "Leomir", "Oggam"],
    bio: "Veterano de múltiplos personagens — um vivo, um inativo e um que não sobreviveu para contar a história. Especialista em escolhas que parecem ótimas na hora.",
    avatar: "⚒️",
    ativo: true,
  },
  {
    id: 3,
    nome: "João Pedro",
    personagens: ["Mason", "Iorin"],
    bio: "Nosso 'Bárbaro', que na verdade é um Patrulheiro. Mestre em criar personagens que desafiam as expectativas e surpreendem a todos — inclusive ele mesmo. Gosta de se transformar em peixe?",
    avatar: "🐺",
    ativo: true,
  },
  {
    id: 4,
    nome: "Giovani",
    personagens: ["Iluvathar", "Yasura"],
    bio: "O sábio que o grupo até se perde com tanta sabedoria.",
    avatar: "🌳",
    ativo: true,
  },
   {
    id: 5,
    nome: "Robert",
    personagens: ["Salazar", "Mordekai", "Geraz", "Fávaro"],
    bio: "Quanto mais joga com o grupo, mais percebemos o quanto é louco. Especialista em criar personagens, pois todos morrem.",
    avatar: "🎩",
    ativo: true,
  },
   {
    id: 6,
    nome: "Guilherme",
    personagens: ["Shadow"],
    bio: "Estressado por natureza, curte jogadas arriscadas e mirabolantes. Seu personagem é tão misterioso quanto ele — e tão propenso a morrer quanto os outros.",
    avatar: "🐾",
    ativo: false,
  },
     {
    id: 7,
    nome: "Murilo",
    personagens: ["Djakaro"],
    bio: "O cara pe uma icógnita, ninguem sabe seu proximo movimento, excelente ator no jogo, mesmo jogando de clérigo. Gênio.",
    avatar: "🧙‍♂️",
    ativo: true,
  },
];
