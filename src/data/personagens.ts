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
      "Jarl de Virmir e líder respeitado entre os Clãs do Norte. Guerreiro nato e homem de honra inabalável, foi traído pelo próprio irmão e exilado de Virmir. Encontrado como membro da gangue de Sirocco, reconheceu que sua trajetória no continente fazia mais sentido ao lado de Ilúvatar e decidiu permanecer com o grupo. Não é apenas um combatente — é alguém que já foi líder de um povo inteiro e conhece o preço de perder o chão. Representa legitimidade política e estabilidade prática num grupo marcado pelo caos e pela perda. Expulsou as forças de Nilfgaard de suas terras e buscou, mesmo contra a vontade de muitos, um tratado de paz com os orcs. Ficou preso em Winterhold por cinco anos antes de retornar ao Norte com um propósito renovado. Se se tornar Grande Jarl e se aliar ao Clã Rok, poderá unir todos os clãs do Norte sob uma única bandeira. É a força, o escudo e o braço da party.",
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
      "Uma das figuras mais respeitadas e temidas de Ark. Diplomata, estrategista e homem de profunda fé, Ilúvatar viveu em High Forest como estrangeiro tolerado — nunca completamente aceito por ser meio-elfo. Treinado formalmente por Arabatan, mestre de divinação, e guiado de forma sutil pelo Velho da Montanha — ser ancestral de raça indeterminada que se revelou ser o próprio Dragão Guardião de Mithrandir. Liderou a defesa de High Forest contra Nilfgaard, confrontou pessoalmente o Imperador Radovan e tornou-se símbolo de esperança para refugiados e não-humanos. Após a batalha, escolheu lutar não apenas por High Forest, mas por todo o mundo. Sua trajetória é marcada por perda progressiva — quanto mais avança, mais perde — o que vai endurecendo seu caráter e distorcendo seus princípios. Ressuscitou Mordekai após sua morte na Batalha da Ponte, recusando-se a aceitar mais uma perda. Seu verdadeiro poder reside não na força, mas na busca inabalável pelo equilíbrio. Divindade: Ein-Sof-Sefirot.",
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
      "Expurgado da nobre Casa Lahabrea após um erro imperdoável — durante a fuga da queda de Khazak para Ancalagon, o Dragão Vermelho, perdeu seu irmão mais novo ao seguir uma figura misteriosa até uma cabana ensanguentada. Culpado pelos pais, foi exilado com a missão de só retornar ao encontrar o irmão. Adrik carrega vergonha e ódio como combustível — acredita que honra se conquista, não se herda. Sua posição sobre magia é clara: magia pura é aceitável, magia corrompida deve ser destruída. Isso o coloca em tensão latente com tudo que envolve as Gemas Ancestrais, necromancia e caos. Encontrado pelo grupo numa vila próxima à Torre de Leopold Strauss, juntou-se a Ilúvatar, Mordekai e Iorin como nova coluna moral do grupo. Fundou os Heavensward com Thancred Alphinaud; perseguiu a bruxa Hilda Hulda por 15 anos, sacrificou todos os companheiros no confronto final e nunca encontrou o irmão perdido.",
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
    classe: "Ladino",
    raca: "Drow",
    origem: "Mezoberranzam — cresceu órfão nas ruas",
    descricao:
      "Shadow cresceu órfão nas ruas de Mezoberranzam, sobrevivendo entre criminosos e traidores. Foi capturado pelos Cavaleiros da Rosa Flamejante e submetido a torturas e experimentos cruéis, escapando apenas graças ao sacrifício de seus melhores amigos Drake e Lylith. Desde então, vaga pelo mundo em busca de poder e vingança, carregando uma lista de nomes que jamais serão esquecidos.",
    status: "Desconhecido",
    icon: "🐾",
  },
  {
    id: 8,
    nome: "Mordekai",
    classe: "Bruxo?",
    raca: "Tiefling",
    origem: "Desconhecida — resgatado em Rostov por Ilúvatar e Mason",
    descricao:
      "Tiefling resgatado em Rostov por Ilúvatar e Mason durante a missão de resgate. Jovem, impulsivo e de espírito quase inocente — sua leveza funcionava como contraponto direto ao peso crescente que Ilúvatar carregava, impedindo muitas vezes que o meio-elfo afundasse de vez. Absorveu cada ensinamento de Ilúvatar como verdade absoluta — a desconfiança, o distanciamento, a frieza necessária para sobreviver num mundo em guerra. Sentiu-se traído quando descobriu que Ilúvatar dormiu com Zelitch, quebrando a regra que ele mesmo havia pregado. Morreu na Batalha da Ponte ao saltar com dois barris de pólvora — ação corajosa e fatal. Foi ressuscitado por Ilúvatar, que se recusou a aceitar mais uma perda. Esse ato restaurou a confiança entre os dois e marcou uma virada: Ilúvatar passou a interferir diretamente contra o destino. Apesar da jovialidade desarmante, media 2,10 m — só percebiam quando ele se levantava.",
    status: "Morto",
    icon: "😈",
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
  {
    id: 9,
    nome: "Mason",
    classe: "Guerreiro",
    raca: "Humano",
    origem: "Velen — Guerreiro moldado pela guerra",
    descricao:
      "Guerreiro moldado pela guerra — produto do sistema que combatia. Serviu ao sistema antes de se voltar contra ele, carregando culpa real por suas ações passadas e buscando redenção através do sacrifício. Liderança militar e resistência física eram o que trazia ao grupo. Morreu na Batalha de High Forest, segurando posições com Isaac contra um exército numericamente superior. Sua morte foi um ato de resistência pura — não de heroísmo calculado, mas de recusa em cair. Tornou-se figura mítica: versões contraditórias de sua morte circulam entre soldados e sobreviventes, como se fosse semideus.",
    status: "Morto",
    icon: "⚔️",
  },
  {
    id: 10,
    nome: "Salazar",
    classe: "Mago",
    raca: "Humano",
    origem: "Rostov — Família com influência política",
    descricao:
      "Mago de grande ambição arcana. Pertencia a uma família com influência política em Rostov e recebeu uma Gema Ancestral de Vesper, diretor da Universidade de Oxenfurt, com a missão específica de destruí-la contra o Leviathan. Canalizou a gema além do que qualquer mente deveria suportar — e o Leviathan foi destruído. Após a Temporada 1, seguiu sozinho em busca de mais conhecimento e poder. Capturado em Rostov pelo tio traidor Yakov, teve a gema confiscada por Leopold Strauss e foi executado publicamente pelos sacerdotes do Fogo Eterno. Não houve duelo glorioso. Sua morte foi uma demonstração política de Nilfgaard: corroer heranças, tomar símbolos, transformar linhagens em cinzas.",
    status: "Morto",
    icon: "💎",
  },
  {
    id: 11,
    nome: "Leomir",
    classe: "Bardo",
    raca: "Meio-Elfo",
    origem: "Neverwinter — Líder de guilda artística",
    descricao:
      "Artista e político. Líder de uma guilda artística em Neverwinter, entrou no grupo com motivações que sempre incluíam sua guilda e sua cidade. Seu papel era de apoio mágico, reconhecimento e liderança cultural. Após a Batalha de High Forest, deparou-se com uma escolha: continuar como aventureiro ou assumir papel político através do casamento com a princesa de Galáxia. Casou-se. Saiu da jornada. Não foi traição — foi um homem escolhendo uma vida diferente. Para Ilúvatar, a perda foi real e confirmou o padrão: quanto mais avança, mais perde.",
    status: "Aliado",
    icon: "🎶",
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
      "Tiefling feiticeira que fornece suporte mágico à Gangue do Sirocco. Especializada em magia ofensiva e utilidade, é um dos membros mais perigosos da organização. Compartilhava com Ilúvatar o interesse por magia, gemas e Cavaleiros do Caos — os dois passaram uma noite juntos antes da emboscada na ponte, evento que gerou a crise de confiança com Mordekai.",
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
      "Jarl do Clã Rok e uma das figuras militares mais dominantes dos Clãs do Norte. Sua liderança é marcada pela força e pela supremacia em batalha — o Clã Rok é temido por amigos e inimigos. Foi informado pelo Comandante Eric de que Iorin viria.",
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
      "Jarl do Clã Draumr, guardião das tradições e da honra dos Clãs do Norte. Mestre ferreiro e homem de palavra — o Clã Draumr fornece metais ao Clã Rok. Um barco parte diariamente ao meio-dia para o lago de Draumr, sob liderança de Otto.",
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
      "Jarl do Clã Feldr, um dos poucos clãs matriarcais dos Clãs do Norte. Diplomata ferrenha, impossível de dobrar. Um infiltrado com capacidade de mudar de aparência — fantasiado de Strafeus, com tatuagem no pescoço — tornou-se o novo governante do clã e vive na mesma residência que Gunnhild.",
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
      "Jarl do Clã Skegg, diferente dos outros jarls pela ênfase em comércio, engenharia e estratégia sobre o combate puro. O mais rico dos Clãs do Norte — mas ainda em cima do muro quanto à aliança com Nilfgaard.",
    status: "Vivo",
    icon: "⚙️",
  },

  // ── Clãs Orcs ────────────────────────────────────────────────────────────────
  {
    id: 112,
    nome: "Roxak",
    classe: "Guerreiro",
    raca: "Orc",
    origem: "Clã Lua Sangrenta — filho do chefe, Razoduk",
    descricao:
      "Filho do chefe do Clã Lua Sangrenta. Orc de cabelo negro repleto de cicatrizes, com a tatuagem dos Olhos Sangrentos cobrindo todo o rosto. Mantém a liderança em Razoduk. Tem uma irmã com casamento arranjado com Crignar, filho de Rexxar.",
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
    origem: "Clã Lua Negra — filho de Rexxar",
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
    origem: "Clã Lua Negra — Líder, Vraddargrud",
    descricao:
      "Líder do Clã Lua Negra, com forte influência política. Adotou Azuri no meio de uma invasão de vila — ela se tornou uma luz em sua vida. Pai de Krogmar, suas decisões e alianças tiveram peso direto no destino de Oggam.",
    status: "Vivo",
    icon: "👁️",
  },
  {
    id: 133,
    nome: "Azuri",
    classe: "Desconhecida",
    raca: "Orc (atípica)",
    origem: "Clã Lua Negra — adotada por Rexxar",
    descricao:
      "Orc de olhos de gato, adotada por Rexxar no meio de uma invasão de vila — diferente de todos os outros orcs ao seu redor. Raramente fica na aldeia ou em sua residência. Tem um lince chamado Bitlings como melhor amigo desde filhote.",
    status: "Vivo",
    icon: "🐱",
  },

  // ── Figuras do Norte ─────────────────────────────────────────────────────────
  {
    id: 118,
    nome: "Sveta",
    classe: "Guerreiro",
    raca: "Humana (Nortenha)",
    origem: "Clãs do Norte — guerreira e amiga de Iorin",
    descricao:
      "Jovem destemida, perspicaz e de força extraordinária. Rival e grande amiga de Iorin — disputavam quem tinha mais força, sempre com respeito mútuo. Após acreditar na morte de Iorin, foi com Valkirias até Virmir tentar convencer Thorstein a mudar de ideia. Foi cercada pelos Filhos de Fenhir e levada a Thorstein, onde descobriu que ele matou o próprio pai.",
    status: "Vivo",
    icon: "⚔️",
  },
  {
    id: 119,
    nome: "Paveta",
    classe: "Nobre",
    raca: "Humana (Nortenha)",
    origem: "Clãs do Norte — herdeira de Jarl",
    descricao:
      "A mais nova e tímida entre os herdeiros dos jarls, mas detentora de inteligência extraordinária. Gostava de cavalgar nas planícies, ler ao sol e criar arte. Passava tempo considerável com Iorin em viagens diplomáticas. Se Iorin se tornar Jarl de Virmir, Paveta terá muito apoio político.",
    status: "Vivo",
    icon: "👑",
  },
  {
    id: 120,
    nome: "Thorstein",
    classe: "Guerreiro",
    raca: "Humano (Nortenho)",
    origem: "Virmir — Líder atual",
    descricao:
      "Líder atual de Virmir. Matou o próprio pai pelo bem do Norte — decisão que divide opiniões entre os clãs. Estava planejando abrir um portal com a Dama do Caos para um metamorfo passar.",
    status: "Vivo",
    icon: "🗡️",
  },
  {
    id: 121,
    nome: "Hilda Hulda",
    classe: "Bruxa",
    raca: "Desconhecida",
    origem: "Desconhecida",
    descricao:
      "Bruxa perseguida por Adrik e os Heavensward durante 15 anos. A batalha final resultou no sacrifício de todos os companheiros de Adrik. Paradoxalmente, aconselhou Sveta a não ir até Thorstein — motivações obscuras.",
    status: "Desconhecido",
    icon: "🧙",
  },

  // ── Antagonistas ─────────────────────────────────────────────────────────────
  {
    id: 122,
    nome: "Leopold Strauss",
    classe: "Arcanista",
    raca: "Humano",
    origem: "Nilfgaard — Arqueólogo Arcano",
    descricao:
      "Arqueólogo arcano e intelectual da magia a serviço de Nilfgaard. Não é um mago ou feiticeiro — é um estudioso, historiador e cientista do arcano que entende a magia melhor do que muitos que a usam. Rastreia e coleta artefatos mágicos antigos para Nilfgaard. Possui a Gema Ancestral que pertencia a Salazar, obtida durante a negociação da aliança entre Nilfgaard e Rostov quando Yakov entregou Salazar às forças nilfgaardianas. Sua torre foi identificada como a origem do fenômeno do Céu Vermelho — evento que alterou o céu de todo o continente de Ark. Soldados pessoais guardam o perímetro de sua torre.",
    status: "Desconhecido",
    icon: "🔮",
  },
  {
    id: 123,
    nome: "Volbax",
    classe: "Ladino",
    raca: "Humano",
    origem: "Guilda dos Ladrões — Líder / Warlord de Nilfgaard",
    descricao:
      "Volitatius Baxter, líder da Guilda dos Ladrões e escolhido por Radovan como Warlord da região. Substituiu uma família nobre que recusou seguir os princípios de Nilfgaard dominada pelo Fogo Eterno. Zaria é sua espiã.",
    status: "Vivo",
    icon: "🎭",
  },
  {
    id: 124,
    nome: "Eva",
    classe: "Desconhecida",
    raca: "Desconhecida",
    origem: "Rosa Flamejante — Líder",
    descricao:
      "Líder da Rosa Flamejante, organização que estuda as linguagens Serun através do Lírio Flamejante e tenta abrir portais. Mãe de Hunter e Ursula, considerados heróis nacionais. Alertou sobre a presença do grupo no norte.",
    status: "Vivo",
    icon: "🌹",
  },
  {
    id: 125,
    nome: "Alice Makuper",
    classe: "Desconhecida",
    raca: "Desconhecida",
    origem: "Servos do Príncipe das Trevas — mão direita",
    descricao:
      "Mão direita do Príncipe das Trevas. Sua localização foi revelada pelas Moiras a Yasura — uma das maiores ameaças em campo.",
    status: "Desconhecido",
    icon: "🖤",
  },
  {
    id: 126,
    nome: "Tricoma",
    classe: "Guerreiro",
    raca: "Desconhecida",
    origem: "Fazenda da seita — Líder dos soldados",
    descricao:
      "Líder dos soldados da fazenda devota aos Cavaleiros do Caos. Matou Tibur. Estava dentro de Mordekai. Afirmou que mais uma gema ancestral foi coletada e que o Príncipe das Trevas se torna mais forte.",
    status: "Desconhecido",
    icon: "⛓️",
  },

  // ── Nilfgaard ────────────────────────────────────────────────────────────────
  {
    id: 127,
    nome: "Radovan",
    classe: "Nobre",
    raca: "Humano",
    origem: "Nilfgaard — Imperador",
    descricao:
      "Imperador de Nilfgaard. Confrontado pessoalmente por Iluvathar. Declarou ilegal o uso de magia por quem não pertence ao exército. Escolheu Volbax como Warlord da região e apoia Yakov Nicolaievitch em Rostov com os ideais do Fogo Eterno.",
    status: "Vivo",
    icon: "👑",
  },

  // ── Família Vesper ───────────────────────────────────────────────────────────
  {
    id: 128,
    nome: "Exius Vesper",
    classe: "Mago",
    raca: "Elfo",
    origem: "Família Vesper — mago e estudioso",
    descricao:
      "Mago poderoso e pai de Tatiane Vesper. Dedicava seus estudos ao tempo, ao espaço e à natureza da realidade. Considerado o segundo mago mais forte de Ark — Anacletus foi o mais forte antes dele. Ex-diretor da Universidade de Oxenfurt, foi responsável por entregar a Gema Ancestral a Salazar e alertar o grupo sobre os Cavaleiros do Caos. Atualmente preso em Winterhold, possui conhecimento crítico que o grupo precisa para enfrentar o Senhor das Trevas.",
    status: "Desconhecido",
    icon: "📜",
  },
  {
    id: 129,
    nome: "Tatiane Vesper",
    classe: "Maga",
    raca: "Elfa",
    origem: "Família Vesper — filha de Exius Vesper",
    descricao:
      "Filha de Exius Vesper e maga de grande potencial. Procurou o grupo após a Batalha de High Forest com uma missão: resgatar seu pai de Winterhold. Está sendo utilizada por Nilfgaard para fortalecer suas operações. Foi vista pelas redondezas de Winterhold e na Espinha do Mundo. Aramil é seu companheiro mais próximo.",
    status: "Desconhecido",
    icon: "✨",
  },
  {
    id: 130,
    nome: "Aramil",
    classe: "Mago",
    raca: "Desconhecida",
    origem: "Família Vesper — discípulo de Exius",
    descricao:
      "O mais novo discípulo de Exius Vesper. Estava com Tatiane na Espinha do Mundo.",
    status: "Desconhecido",
    icon: "📚",
  },

  // ── Família Delanoar ─────────────────────────────────────────────────────────
  {
    id: 131,
    nome: "Madame Delanoar",
    classe: "Nobre",
    raca: "Humana",
    origem: "Mansão Delanoar — senhora rica",
    descricao:
      "Senhora rica que mora numa mansão com um anão como mordomo. Após os acontecimentos com o cultista, pediu ajuda ao grupo e revelou o quadro de sua família — marcada pela maldição que parece afetar todos que se aproximam de sua filha Amélia.",
    status: "Vivo",
    icon: "🏛️",
  },
  {
    id: 132,
    nome: "Amélia",
    classe: "Desconhecida",
    raca: "Humana",
    origem: "Família Delanoar — filha",
    descricao:
      "Filha de Madame Delanoar. Fugiu aos 14 anos apaixonada por um plebeu. Retornou após a morte do pai — que pereceu de forma misteriosa. Começou a mudar de comportamento e a não ser ela mesma. Suspeita-se de maldição. Seu espírito assombra a casa de campo da família. A maldição se desfaz se Amélia não voltar pra cama antes do galo cantar três vezes.",
    status: "Desconhecido",
    icon: "👻",
  },

  // ── Aliados e Personagens Importantes ───────────────────────────────────────
  {
    id: 134,
    nome: "Ragnar Wolfside",
    classe: "Patrulheiro",
    raca: "Humano",
    origem: "Velen — ex-capitão e batedor do Rei Angus",
    descricao:
      "Antigo capitão e batedor de Velen. Após a Batalha de High Forest voltou para Velen e foi destituído de sua posição — o Rei Angus começou a tomar decisões erradas após a morte de seu melhor conselheiro. Virou nômade. Quando criança, achou um filhote de lobo atrão órfão e conseguiu domá-lo, ganhando o título Wolfside.",
    status: "Vivo",
    icon: "🐺",
  },
  {
    id: 135,
    nome: "Vivaldi",
    classe: "Nobre",
    raca: "Anão",
    origem: "Banqueiro — financiador da retomada de Khazak",
    descricao:
      "Anão banqueiro que contratou Adrik para ajudar na retomada de Khazak. Foi informado por Uriki sobre a situação de Adrik na prisão.",
    status: "Vivo",
    icon: "💰",
  },
  {
    id: 136,
    nome: "Uriki",
    classe: "Guerreiro",
    raca: "Anão",
    origem: "Norte de Lyria — Comandante e herdeiro do trono de Khazak",
    descricao:
      "Comandante no norte de Lyria e herdeiro legítimo do trono de Khazak. Liderará a retomada da cidade. Foi ele quem informou Vivaldi sobre a existência de Adrik na cadeia.",
    status: "Vivo",
    icon: "⚔️",
  },
  {
    id: 137,
    nome: "Vitruvius",
    classe: "Mago",
    raca: "Humano",
    origem: "Oxenfurt — O Velho",
    descricao:
      "Mago misterioso em Oxenfurt, conhecido apenas como O Velho. O grupo foi instruído a dizer: 'a hora dele chegou' e 'ele não detém mais a magia'. Sua história com a magia — e por que ela lhe foi retirada — ainda não foi revelada.",
    status: "Desconhecido",
    icon: "🔮",
  },
  {
    id: 139,
    nome: "Hunter",
    classe: "Guerreiro",
    raca: "Humano",
    origem: "Rosa Flamejante — filho de Eva",
    descricao:
      "Filho de Eva, líder da Rosa Flamejante. Herói nacional com grande habilidade de combate. Estava preso numa cela próxima ao castelo, com dois guardas.",
    status: "Desconhecido",
    icon: "🎯",
  },
  {
    id: 140,
    nome: "Ursula",
    classe: "Guerreiro",
    raca: "Humana",
    origem: "Rosa Flamejante — filha de Eva",
    descricao:
      "Filha de Eva e irmã de Hunter. Heroína nacional da Rosa Flamejante com grande habilidade em seu estilo de luta.",
    status: "Desconhecido",
    icon: "🌟",
  },

  // ── Mestres e Sábios ─────────────────────────────────────────────────────────
  {
    id: 141,
    nome: "Arabatan",
    classe: "Mago / Adivinho",
    raca: "Elfo",
    origem: "High Forest — Mestre de Divinação",
    descricao:
      "Mestre de divinação de High Forest e mentor formal de Iluvathar. Passou décadas observando os padrões cósmicos de Ark e desenvolveu a Teoria dos Ciclos Cósmicos — a hipótese de que o mundo existe num vórtice de equilíbrio entre forças opostas, e que o retorno de Oz de Osbourne não é uma possibilidade, mas uma certeza temporal. Morreu antes de terminar sua obra. Seus escritos estão dispersos — parte em Mithrandir, parte possivelmente com Leopold Strauss.",
    status: "Morto",
    icon: "🌟",
  },
  {
    id: 142,
    nome: "Azemuth",
    classe: "Paladino / Lich",
    raca: "Desconhecida",
    origem: "Ilha de Azemuth — Tumba isolada",
    descricao:
      "Ex-paladino que escolheu a não-morte como meio de continuar servindo uma missão que seus contemporâneos consideravam completa. Sua tumba numa ilha isolada foi encontrada pelo grupo durante a Temporada III — vazia. O corpo havia sumido sem sinais de violação ou saque, apenas ausência. O que Azemuth busca — ou o que o moveu — permanece desconhecido.",
    status: "Desconhecido",
    icon: "💀",
  },
  {
    id: 143,
    nome: "Elandir",
    classe: "Guerreiro",
    raca: "Elfo",
    origem: "High Forest — Guarda da floresta",
    descricao:
      "Guerreiro élfico da guarda de High Forest. Caiu durante a guerra contra Nilfgaard defendendo as fronteiras da floresta ancestral. Seu sacrifício foi um dos muitos que tornaram possível a vitória de Iluvathar.",
    status: "Morto",
    icon: "🌿",
  },
  {
    id: 144,
    nome: "Elidir",
    classe: "Guerreiro",
    raca: "Elfo",
    origem: "High Forest",
    descricao:
      "Guerreiro élfico de High Forest. Participou da defesa da floresta durante a invasão de Nilfgaard.",
    status: "Desconhecido",
    icon: "🌳",
  },
  {
    id: 145,
    nome: "Diafbah",
    classe: "Líder / Governante",
    raca: "Desconhecida",
    origem: "Baka — Governante do Deserto",
    descricao:
      "Governante enigmático da cidade de Baka, no Deserto de Baka. Preside uma região hostil e isolada que foi palco do primeiro grande evento da campanha — a emergência do Leviathan. Sua história, motivações e exato papel nos eventos que precederam o despertar da criatura ainda não foram completamente esclarecidos.",
    status: "Desconhecido",
    icon: "🏜️",
  },
  {
    id: 146,
    nome: "Isaac",
    classe: "Guerreiro",
    raca: "Humano",
    origem: "Velen — Companheiro de Mason",
    descricao:
      "Guerreiro que lutou ao lado de Mason na Batalha de High Forest. Segurou posições contra um exército numericamente superior — e caiu junto com Mason no conflito. Sua morte, como a de Mason, não foi heroica no sentido dramático: foi resistência pura, recusa em ceder.",
    status: "Morto",
    icon: "⚔️",
  },
  {
    id: 147,
    nome: "Angus McLeod",
    classe: "Guerreiro / Rei",
    raca: "Humano",
    origem: "Velen — Rei de Velen",
    descricao:
      "Rei de Velen e descendente provado de Naldiv — a única linhagem capaz de ferir dragões com aço comum. Na Batalha de West Shores (Ano 1229), enfrentou sozinho o dragão vermelho de Nilfgaard, cravou sua claymore nas escamas da criatura e mudou o rumo da guerra. Após a vitória, tornou-se símbolo nacional. Começou a tomar decisões erradas após a morte de seu melhor conselheiro — o que levou à destituição de Ragnar Wolfside e à fragmentação da lealdade ao trono.",
    status: "Vivo",
    icon: "👑",
  },
  {
    id: 148,
    nome: "Yakov Nicolaievitch",
    classe: "Nobre",
    raca: "Humano",
    origem: "Rostov — Líder político, tio de Salazar",
    descricao:
      "Tio de Salazar e figura central do poder em Rostov. Traiu o sobrinho ao entregá-lo a Nilfgaard como demonstração de lealdade política, garantindo a aliança entre Rostov e o Império. Governa com o apoio dos ideais do Fogo Eterno e da influência nilfgaardiana. Sua traição foi o que permitiu a Leopold Strauss obter a Gema Ancestral que pertencia a Salazar.",
    status: "Vivo",
    icon: "🗡️",
  },

  // ── Figuras misteriosas ──────────────────────────────────────────────────────
  {
    id: 116,
    nome: "Jacob Amal",
    classe: "Desconhecida",
    raca: "Desconhecida",
    origem: "Desconhecida — encontrado na Tumba dos Yarls",
    descricao:
      "Viajante misterioso encontrado na Tumba dos Yarls. Afirmou que Feignur era provavelmente um protetor que matava cultistas no caminho para Virmir. Sua origem e afiliação permanecem desconhecidas.",
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
