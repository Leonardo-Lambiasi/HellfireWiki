export type Status = "Vivo" | "Morto" | "MIA" | "Aliado" | "Desconhecido";

export interface Personagem {
  id: number;
  nome: string;
  classe: string;
  raca: string;
  origem: string;
  descricao: string;
  habilidades: string[];
  status: Status;
  icon: string;
}

export const herois: Personagem[] = [
  {
    id: 1,
    nome: "Iorin Stenson",
    classe: "Barbaro/Patrulheiro",
    raca: "Humano (Nortenho)",
    origem: "Virmir, Clãs do Norte — Jarl de Virmir",
    descricao:
      "Jarl de Virmir e líder respeitado entre os Clãs do Norte, Iorin é um guerreiro nato e homem de honra inabalável. Expulsou as forças de Nilfgard de suas terras e buscou, mesmo contra a vontade de muitos, um tratado de paz com os orcs. Viveu dez anos em exílio no continente antes de retornar ao Norte com mais sabedoria, aliados e um propósito renovado. É a força, o escudo e o braço da party.",
    habilidades: [
      "Mestre em armas múltiplas (arco, machado, espada e escudo)",
      "Liderança — inspira respeito e lealdade",
      "Sobrevivência — patrulheiro nato",
      "Estratégia — pensa à frente e planeja",
      "Resiliência — suporta provações sem se quebrar",
    ],
    status: "Vivo",
    icon: "🐺",
  },
  {
    id: 2,
    nome: "Fávaro",
    classe: "Mago (Arcanista)",
    raca: "Humano",
    origem: "Oxenfurt — ex-aluno expulso da Universidade",
    descricao:
      "Expulso da Universidade de Oxenfurt por métodos não ortodoxos, Fávaro mergulhou no submundo, conduziu combates clandestinos entre criaturas mágicas e participou de rituais proibidos — incluindo necromânticos. Após morrer em combate contra os Cavaleiros do Caos e ser ressuscitado pelo clérigo Djakaro, dedicou sua vida a exterminar a magia necromântica. Cafajeste, sarcástico e brilhante.",
    habilidades: [
      "Magia Arcana — mestre em feitiços ofensivos e de controle",
      "Conhecimento Obscuro — rituais proibidos e línguas antigas",
      "Criatividade Tática — usa o ambiente e recursos ao máximo",
      "Blefe e Artimanha — mestre em jogos de azar e manipulação",
      "Sobrevivência nas ruas — viveu nos becos mais perigosos de Oxenfurt",
    ],
    status: "Vivo",
    icon: "🎩",
  },
  {
    id: 3,
    nome: "Shadow",
    classe: "Ladino (Assassino)",
    raca: "Drow (Elfo Escuro)",
    origem: "Mezoberranzam — cresceu órfão nas ruas",
    descricao:
      "Shadow cresceu órfão nas ruas de Mezoberranzam, sobrevivendo entre criminosos e traidores. Foi capturado pelos Cavaleiros da Rosa Flamejante e submetido a torturas e experimentos cruéis, escapando apenas graças ao sacrifício de seus melhores amigos Drake e Lylith. Desde então, vaga pelo mundo em busca de poder e vingança, carregando uma lista de nomes que jamais serão esquecidos.",
    habilidades: [
      "Furtividade — move-se nas sombras como se fosse parte delas",
      "Lâmina Silenciosa — ataques furtivos causam estragos devastadores",
      "Acrobacia — mestre em saltos, escaladas e manobras impossíveis",
      "Ladinagem — especialista em abrir fechaduras e infiltrações",
      "Resistência Drow — visão no escuro superior, resistência a magias",
    ],
    status: "Desconhecido",
    icon: "🐾",
  },
  {
    id: 4,
    nome: "Iluvathar",
    classe: "Clérigo",
    raca: "Meio-elfo",
    origem: "High Forest — Clérigo de Ein-Sof-Sefirot",
    descricao:
      "Uma das figuras mais respeitadas e temidas de Ark, Iluvathar é diplomata, estrategista e homem de profunda fé. Liderou a defesa da High Forest contra Nilfgard, confrontou pessoalmente o Imperador Radovan e tornou-se um símbolo de esperança para refugiados e não-humanos em todo o mundo. Seu verdadeiro poder reside não na força, mas na busca inabalável pelo equilíbrio.",
    habilidades: [
      "Magia Divina — cura, proteção, luz e purificação",
      "Estratégia — mestre em táticas militares e planejamento político",
      "Diplomacia — vasta rede de contatos em todos os reinos de Ark",
      "Conhecimento — profundo saber sobre história, religião e magia",
      "Liderança — inspira lealdade e esperança em aliados",
    ],
    status: "Vivo",
    icon: "🌳",
  },
  {
    id: 5,
    nome: "Adrik Lahabrea",
    classe: "Guerreiro (Lanceiro)",
    raca: "Anão",
    origem: "Khazak — Casa Lahabrea (Renegado), seguidor de Moradin",
    descricao:
      "Expurgado de sua nobre casa após um erro imperdoável e testemunha da queda de Khazak para Ancalagon, o Dragão Vermelho, Adrik carrega vergonha e ódio como combustível. Vagou pelo mundo como mercenário, sempre buscando expurgar a magia negra e reconquistar, com seu próprio mérito, o direito de voltar para casa. Pensa que honra se conquista, não se herda.",
    habilidades: [
      "Lanceiro — uso magistral de lanças em formação ou duelos",
      "Escudo — defesa sólida e domínio de bloqueios e investidas",
      "Combate Pesado — especialista em armaduras e armas pesadas",
      "Estratégia de Campo — usa o terreno e o caos a seu favor",
      "Detecção de Magia — instinto para identificar magia corrupta",
    ],
    status: "Vivo",
    icon: "⚒️",
  },
];

export const npcs: Personagem[] = [];
