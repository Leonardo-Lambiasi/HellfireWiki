export type Status = "Vivo" | "Morto" | "MIA" | "Aliado" | "Desconhecido";

export interface Personagem {
  id: number;
  nome: string;
  classe: string;
  raca: string;
  origem: string;
  descricao: string;
  status: Status;
  icon: string;
}

export const herois: Personagem[] = [
  {
    id: 1,
    nome: "Iorin",
    classe: "Bárbaro / Patrulheiro",
    raca: "Humano (Nortenho)",
    origem: "Virmir, Clãs do Norte — Jarl de Virmir",
    descricao:
      "Jarl de Virmir e líder respeitado entre os Clãs do Norte, Iorin é um guerreiro nato e homem de honra inabalável. Expulsou as forças de Nilfgard de suas terras e buscou, mesmo contra a vontade de muitos, um tratado de paz com os orcs. Viveu dez anos em exílio no continente antes de retornar ao Norte com mais sabedoria, aliados e um propósito renovado. É a força, o escudo e o braço da party.",
    status: "Vivo",
    icon: "🐺",
  },
  {
    id: 2,
    nome: "Fávaro",
    classe: "Mago",
    raca: "Humano",
    origem: "Oxenfurt — ex-aluno expulso da Universidade",
    descricao:
      "Expulso da Universidade de Oxenfurt por métodos não ortodoxos, Fávaro mergulhou no submundo, conduziu combates clandestinos entre criaturas mágicas e participou de rituais proibidos — incluindo necromânticos. Após morrer em combate contra os Cavaleiros do Caos e ser ressuscitado pelo clérigo Djakaro, dedicou sua vida a exterminar a magia necromântica. Cafajeste, sarcástico e brilhante.",
    status: "Vivo",
    icon: "🎩",
  },
  {
    id: 4,
    nome: "Iluvathar",
    classe: "Clérigo",
    raca: "Meio-elfo",
    origem: "High Forest — Clérigo de Ein-Sof-Sefirot",
    descricao:
      "Uma das figuras mais respeitadas e temidas de Ark, Iluvathar é diplomata, estrategista e homem de profunda fé. Liderou a defesa da High Forest contra Nilfgard, confrontou pessoalmente o Imperador Radovan e tornou-se um símbolo de esperança para refugiados e não-humanos em todo o mundo. Seu verdadeiro poder reside não na força, mas na busca inabalável pelo equilíbrio.",
    status: "Vivo",
    icon: "🌳",
  },
  {
    id: 5,
    nome: "Adrik",
    classe: "Guerreiro",
    raca: "Anão",
    origem: "Khazak — Casa Lahabrea (Renegado), seguidor de Moradin",
    descricao:
      "Expurgado de sua nobre casa após um erro imperdoável e testemunha da queda de Khazak para Ancalagon, o Dragão Vermelho, Adrik carrega vergonha e ódio como combustível. Vagou pelo mundo como mercenário, sempre buscando expurgar a magia negra e reconquistar, com seu próprio mérito, o direito de voltar para casa. Pensa que honra se conquista, não se herda.",
    status: "Vivo",
    icon: "⚒️",
  },
  {
    id: 3,
    nome: "Djakaro",
    classe: "Clérigo",
    raca: "Anão",
    origem: "Nildaf — fortaleza subterrânea, devoto de Moradin",
    descricao:
      "Nascido nas profundezas de Nildaf, Djakaro sempre foi diferente — um sonhador que unia forja e magia rúnica, buscando ir além da tradição. Após uma avalanche devastar sua comunidade, partiu em busca de redenção, isolando-se por anos até descobrir o Hammer of the Forgefather, uma relíquia ancestral de Moradin. Por meio de uma visão profética que revelou a ascensão de forças sombrias, compreendeu seu verdadeiro propósito: não apenas criar, mas proteger. Retornou ao mundo como defensor da ordem, forjando armas sagradas e enfrentando o caos. Ressuscitou Fávaro após este cair diante dos Cavaleiros do Caos, provando que suas mãos não servem apenas à destruição, mas à vida.",
    status: "Vivo",
    icon: "⛪",
  },
    {
    id: 7,
    nome: "Shadow",
    classe: "Ladino ",
    raca: "Drow ",
    origem: "Mezoberranzam — cresceu órfão nas ruas",
    descricao:
      "Shadow cresceu órfão nas ruas de Mezoberranzam, sobrevivendo entre criminosos e traidores. Foi capturado pelos Cavaleiros da Rosa Flamejante e submetido a torturas e experimentos cruéis, escapando apenas graças ao sacrifício de seus melhores amigos Drake e Lylith. Desde então, vaga pelo mundo em busca de poder e vingança, carregando uma lista de nomes que jamais serão esquecidos.",
    status: "Desconhecido",
    icon: "🐾",
  },
  {
    id: 6,
    nome: "Oggam Vambag",
    classe: "Bárbaro",
    raca: "Orc",
    origem: "Clã Koongan — terras geladas do norte, Passagem Glacial",
    descricao:
      "Guerreiro do clã Koongan, forjado nas terras congeladas onde apenas os fortes sobrevivem. Foi deixado para trás após uma batalha brutal, despertou sozinho num mundo mais hostil do que lembrava. Em sua jornada, testemunhou rituais sombrios e começou a mudar — onde antes via apenas força e sobrevivência, passou a enxergar empatia, proteção e significado. Em seu último ato, lutou por algo maior do que ele mesmo, tentando provar que os orcs podiam escolher um caminho diferente. E foi nesse momento que caiu. Sua morte não foi em vão.",
    status: "Morto",
    icon: "🪓",
  },
];

export const npcs: Personagem[] = [
  // ── Gangue do Sirocco ────────────────────────────────────────────────────────
  {
    id: 101,
    nome: "Sirocco",
    classe: "Ladino",
    raca: "Desconhecida",
    origem: "Gangue do Sirocco — Líder",
    descricao:
      "Líder da Gangue do Sirocco. Controla operações e contatos no submundo com mão de ferro. Sua identidade e origem são mantidas em segredo absoluto — poucos que tentaram descobrir voltaram para contar.",
    status: "Vivo",
    icon: "🐍",
  },
  {
    id: 102,
    nome: "Suutha",
    classe: "Guerreiro",
    raca: "Desconhecida",
    origem: "Gangue do Sirocco — Braço direito",
    descricao:
      "Braço direito de Sirocco. Responsável pela execução das ordens e pelo combate direto quando a gangue precisa demonstrar força. Leal ao líder acima de qualquer outra coisa.",
    status: "Vivo",
    icon: "⚔️",
  },
  {
    id: 103,
    nome: "Gunarsh",
    classe: "Bárbaro",
    raca: "Orc",
    origem: "Gangue do Sirocco — Linha de frente",
    descricao:
      "Orc bárbaro da Gangue do Sirocco. Representa a força bruta da organização — usado para intimidação e combate pesado quando palavras não são suficientes.",
    status: "Vivo",
    icon: "💪",
  },
  {
    id: 104,
    nome: "Caesar",
    classe: "Guerreiro",
    raca: "Humano",
    origem: "Ex-nilfgaardiano — Gangue do Sirocco",
    descricao:
      "Antigo soldado de Nilfgaard que encontrou seu lugar na Gangue do Sirocco. Serve como ponte entre o crime organizado e as estruturas militares nilfgaardianas, fornecendo acesso e informação privilegiada.",
    status: "Vivo",
    icon: "🎖️",
  },
  {
    id: 105,
    nome: "Sarah",
    classe: "Desconhecida",
    raca: "Desconhecida",
    origem: "Gangue do Sirocco",
    descricao:
      "Membro da Gangue do Sirocco com uma relação pessoal com Iorin. Seu papel exato na organização e os detalhes de sua ligação com o Jarl do Norte ainda não foram revelados.",
    status: "Desconhecido",
    icon: "🌹",
  },
  {
    id: 106,
    nome: "Bolgrin",
    classe: "Artificer",
    raca: "Gnomo",
    origem: "Gangue do Sirocco — Suporte técnico",
    descricao:
      "Gnomo responsável pela inteligência e suporte técnico da Gangue do Sirocco. Fornece recursos, informações e soluções criativas para os problemas da organização.",
    status: "Vivo",
    icon: "🔧",
  },
  {
    id: 107,
    nome: "Zelitch",
    classe: "Feiticeira",
    raca: "Tiefling",
    origem: "Gangue do Sirocco — Magia",
    descricao:
      "Tiefling feiticeira que fornece suporte mágico à Gangue do Sirocco. Especializada em magia ofensiva e utilidade, é um dos membros mais perigosos da organização.",
    status: "Vivo",
    icon: "🔮",
  },

  // ── Jarls dos Clãs do Norte ──────────────────────────────────────────────────
  {
    id: 108,
    nome: "Drakø",
    classe: "Guerreiro",
    raca: "Humano (Nortenho)",
    origem: "Clã Rok — Jarl",
    descricao:
      "Jarl do Clã Rok e uma das figuras militares mais dominantes dos Clãs do Norte. Sua liderança é marcada pela força e pela supremacia em batalha — o Clã Rok é temido por amigos e inimigos.",
    status: "Vivo",
    icon: "🪓",
  },
  {
    id: 109,
    nome: "Kjartan",
    classe: "Guerreiro",
    raca: "Humano (Nortenho)",
    origem: "Clã Draumr — Jarl",
    descricao:
      "Jarl do Clã Draumr, guardião das tradições e da honra dos Clãs do Norte. Mestre ferreiro e homem de palavra, representa os valores mais antigos do povo nortenho.",
    status: "Vivo",
    icon: "🔨",
  },
  {
    id: 110,
    nome: "Gunnhild",
    classe: "Guerreiro",
    raca: "Humana (Nortenha)",
    origem: "Clã Feldr — Jarl (Matriarcal)",
    descricao:
      "Jarl do Clã Feldr, um dos poucos clãs matriarcais dos Clãs do Norte. Gunnhild é conhecida por sua habilidade diplomática e pela proteção ferrenha de seu povo — difícil de provocar, impossível de dobrar.",
    status: "Vivo",
    icon: "🛡️",
  },
  {
    id: 111,
    nome: "Ulf",
    classe: "Artificer",
    raca: "Humano (Nortenho)",
    origem: "Clã Skegg — Jarl",
    descricao:
      "Jarl do Clã Skegg, diferente dos outros jarls pela ênfase em comércio, engenharia e estratégia sobre o combate puro. Seu clã prospera pelo engenho e pelas trocas — o mais rico dos Clãs do Norte.",
    status: "Vivo",
    icon: "⚙️",
  },

  // ── Clã Koongan e aliados ────────────────────────────────────────────────────
  {
    id: 112,
    nome: "Roxak",
    classe: "Guerreiro",
    raca: "Orc",
    origem: "Clã Lua Sangrenta — filho do chefe",
    descricao:
      "Filho do chefe do Clã Lua Sangrenta. Guerreiro promissor cuja trajetória cruza com os eventos ao redor de Oggam Vambag e das terras do norte.",
    status: "Vivo",
    icon: "🩸",
  },
  {
    id: 113,
    nome: "Uak",
    classe: "Xamã",
    raca: "Orc",
    origem: "Clã Koongan — líder xamânica",
    descricao:
      "Líder espiritual do Clã Koongan. Possui profunda ligação com os ancestrais e guia o clã por meio de rituais e visões. Sua influência vai além do combate — ela sustenta a identidade e a memória do povo Koongan.",
    status: "Vivo",
    icon: "🔮",
  },
  {
    id: 114,
    nome: "Krogmar",
    classe: "Guerreiro",
    raca: "Orc",
    origem: "Clã Koongan — filho de Rexxar",
    descricao:
      "Filho de Rexxar e figura central em um casamento arranjado com Oggam Vambag. Sua relação com Oggam moldou parte dos conflitos internos do clã e das escolhas que definiram o destino do guerreiro.",
    status: "Vivo",
    icon: "⛓️",
  },
  {
    id: 115,
    nome: "Rexxar",
    classe: "Guerreiro",
    raca: "Orc",
    origem: "Clã Koongan — figura de autoridade",
    descricao:
      "Figura de autoridade dentro do Clã Koongan, com forte influência política na tribo. Pai de Krogmar. Suas decisões e alianças internas tiveram peso direto no destino de Oggam.",
    status: "Vivo",
    icon: "👁️",
  },

  // ── Figuras misteriosas ──────────────────────────────────────────────────────
  {
    id: 116,
    nome: "Jacob Amal",
    classe: "Desconhecida",
    raca: "Desconhecida",
    origem: "Desconhecida",
    descricao:
      "Figura de origem e afiliação desconhecidas, com ligação direta a eventos recentes da campanha. Pode ser um aliado, uma peça-chave ainda não revelada — ou algo mais.",
    status: "Desconhecido",
    icon: "❓",
  },
  {
    id: 117,
    nome: "Yall",
    classe: "Morto-vivo",
    raca: "Desconhecida",
    origem: "Região amaldiçoada",
    descricao:
      "Entidade morto-viva que habita uma região amaldiçoada. Controla almas e cria servos, exercendo domínio sobre os mortos ao seu redor. Sua natureza exata e motivações permanecem obscuras.",
    status: "Desconhecido",
    icon: "💀",
  },
];
