export interface Participante {
  nome: string;
  emoji: string;
  tipo: "heroi" | "npc";
  rota: string;
}

export const temporadasParticipantes: Record<number, Participante[]> = {
  1: [],
  2: [],
  3: [
    { nome: "Iluvathar", emoji: "🌳", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Mordekai",  emoji: "😈", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Adrik",     emoji: "⚒️", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Iorin",     emoji: "🐺", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Sirocco",   emoji: "🐍", tipo: "npc",   rota: "/personagens/npcs" },
  ],
  4: [],
  5: [],
};

export interface Historia {
  id: number;
  titulo: string;
  dataIngame: string;
  resumo: string;
  temporada: number | null;
  emAndamento?: boolean;
  personagens?: { nome: string; emoji: string; rota: string }[];
}

export const historias: Historia[] = [
  // ── Lore Geral ──────────────────────────────────────────────────────────────
  {
    id: 1,
    titulo: "Divindades de Ark",
    dataIngame: "Ano 0",
    resumo:
      "Eons antes da formação de Ark, existia apenas o vazio primordial, sobre o qual pairava Ahr, o Deus Supremo. De sua própria essência nasceram quatro divindades superiores — Ehlonna, Heironeous, Moradin e Baal — conhecidas como as quatro faces de Ahr. Ehlonna representa a natureza e os elfos; Heironeous, a coragem e a humanidade; Moradin, a forja e os anões. Baal, a face sombria, foi banido para os infernos após corromper o equilíbrio entre os deuses, dando origem à necromancia e às criaturas infernais. Entre os heróis mortais que ascenderam ao panteão, destacam-se Naldiv (o primeiro paladino, que derrotou Tiamat ao lado de Bahamut), Coren Larethian (elfo mediador entre as raças) e Kaz, o Dragonslayer (anão que fundou Kazhak e resistiu décadas contra dragões). O calendário de Ark conta a partir deste momento como Ano 0.",
    temporada: null,
  },
  {
    id: 2,
    titulo: "Kazak Abul Kazhak",
    dataIngame: "100 A.A.",
    resumo:
      "Kazak Abul Kazhak é uma das cidades mais antigas dos Reinos do Norte, construída e mantida 'pelo sangue e pelo ferro' dos anões. Seu nome carrega significado ancestral: Kaz (primeiro rei), Ak (casa), Abul (vive) e Kazhak (pelo ferro). Rica em pedras preciosas, platina e ouro, a cidade tornou-se símbolo de prosperidade e orgulho anão. Ao longo dos séculos, resistiu a invasões de gigantes e dragões. Sua guarda de elite carregava no peito a inscrição 'Per Kaz'. Entre seus artefatos lendários estava a Lança de Kaz, símbolo máximo do poder da cidade. Durante o período da grande invasão, governada pelo rei Thorak Vondal, um dragão vermelho atacou em busca de seus tesouros. Thorak permaneceu para lutar — seu filho fugiu com o povo, sendo lembrado como fraco. Kazak caiu, e seu povo foi forçado ao exílio.",
    temporada: null,
  },
  {
    id: 5,
    titulo: "A Guerra de Velen",
    dataIngame: "Ano 1195",
    resumo:
      "Em 1195, o rei de Velen é assassinado e o reino mergulha em crise de poder. Nilfgaard, sob o rei Slobodan, invade e domina o norte. O sul vira 'Terra de Ninguém', dominado por warlords. Em 1227 estoura guerra aberta — Velen obtém apoio de Redânia e lança contraofensiva. Nilfgaard perde força com crise interna: Radovan, filho bastardo de Slobodan, é expulso, desagradando a família Lancaster. Dois nomes se destacam entre os velenenses: Angus McLeod e seu irmão Ewan. Nilfgaard recorre a um dragão vermelho, que começa a dizimar as forças inimigas. Na Batalha de West Shores (1229), Angus McLeod enfrenta o dragão sozinho. Do alto das formações costeiras, crava sua claymore nas escamas da criatura — confirmando ser descendente de Naldiv, o único linhagem capaz de matar dragões com aço comum. A morte do dragão vira o rumo da guerra. Velen marcha até Novigrad e vence. Territórios conquistados no sul de Nilfgaard, controle da marinha e do tesouro. A matriarca da família Lancaster é executada.",
    temporada: null,
  },
    {
    id: 10,
    titulo: "Reino de Lyria",
    dataIngame: "Ano 0001",
    resumo:
      "Lyria é um reino marcado pela harmonia entre o mar e a terra firme, onde a presença constante do sol molda tanto a paisagem quanto o espírito de seu povo. Localizado em uma faixa costeira extensa, o reino se projeta ao longo de um litoral recortado por enseadas, falésias e praias de águas límpidas, lembrando a geografia do Adriático. O mar, de tons que variam entre o azul profundo e o turquesa cristalino, não é apenas um elemento natural dominante, mas também uma via vital de comércio, cultura e identidade. A capital, Teméria, ergue-se próxima à costa, combinando a imponência de muralhas antigas com a leveza de construções abertas à brisa marítima. Mais ao norte, cidades como Neverwinter apresentam uma transição gradual para um ambiente menos costeiro, onde o relevo começa a se elevar. O relevo de Lyria é diversificado: ao longo da costa, predominam planícies férteis e colinas suaves cobertas por vegetação mediterrânea; no interior, cadeias de picos rochosos formam barreiras naturais que protegem o coração do reino. Ao norte, na transição para Zarkóvia, o planalto mais frio serve de zona de adaptação entre os climas distintos dos dois reinos. O clima é predominantemente quente e ensolarado, com verões longos e secos e invernos amenos e chuvosos — alternância que torna Lyria um dos principais produtores de alimentos da região. Seu povo tende a ser expansivo, artístico e profundamente conectado às rotas comerciais que cruzam o reino. Por trás da beleza luminosa de suas paisagens, porém, há uma geografia que exige adaptação: montanhas que isolam, planaltos que desafiam e um mar que nunca deixa de ser imprevisível.",
    temporada: null,
  },

  {
    id: 11,
    titulo: "A Guerra Civil de Zarkóvia",
    dataIngame: "Desconhecido",
    resumo:
      "O reino encontra-se mergulhado em uma guerra civil, onde múltiplas forças disputam o controle do trono. A fragmentação política, as alianças externas e a ausência de unidade transformam Zarkóvia em um barril de pólvora. Essa é a narrativa principal que conecta todas as demais: qualquer evento relevante no reino inevitavelmente influencia — ou é influenciado — por esse conflito maior. Vladislávia, a capital, representa o passado glorioso sustentado por uma aristocracia em declínio. Ao sul, Rostov cresce como potência emergente sob Yakov Nicolaievitch, com apoio de Nilfgaard e dos ideais do Fogo Eterno. Nas sombras do sudeste, Baróvia permanece isolada sob o domínio absoluto de Strahd Von Zarovitch — envolto em névoa e terror, não busca guerra, mas também não permite interferência. Khazak, o orgulho anão, é hoje uma ruína dominada por um dragão. No noroeste, Mezoberranzam observa do subterrâneo, com suas forças ocultas possivelmente manipulando os acontecimentos da superfície. Zarkóvia como um todo é um reino de potencial perdido: rico em cultura e recursos, mas incapaz de se unificar.",
    temporada: null,
  },

  // ── Temporada 1 ─────────────────────────────────────────────────────────────
  

  // ── Temporada 2 ─────────────────────────────────────────────────────────────
 

  // ── Temporada 3 ─────────────────────────────────────────────────────────────
  {
    id: 12,
    titulo: "Fragmentação — A Travessia e o Novo Eixo",
    dataIngame: "Temporada III (em andamento)",
    resumo:
      "Após deixar Galáxia, Ilúvatar e Mordekai seguem viagem rumo ao norte — sem grupo, sem estrutura, apenas o caminho.\n\nDurante a travessia, o mundo se revela em estado bruto: refugiados recusados nas fronteiras, cidades queimadas ainda fumegando, estradas dominadas por saqueadores, exércitos marchando sem destino claro. A guerra deixou de ser um evento. Ela se tornou o estado natural das coisas.\n\nÉ nesse cenário que Ilúvatar começa a mudar. Ele passa a ensinar Mordekai não magia, não estratégia, mas desconfiança — um princípio rígido: não confiar em ninguém, não se apegar, não se distrair. Insiste que mulheres são distrações perigosas, capazes de desviar homens de seus deveres. Isso não nasce de filosofia. Nasce de perda. Mordekai, jovem e influenciável, absorve tudo como verdade absoluta — mas é justamente ele quem impede Ilúvatar de afundar: sua leveza e ingenuidade funcionam como contraponto constante ao peso crescente que o clérigo carrega. Eles seguem juntos, mas já não estão no mesmo lugar emocional.\n\nPróximos de High Forest, os dois caem em uma emboscada e são capturados. Não por inimigos — o líder do grupo é Sirocco, nome já conhecido, agora confirmado como líder de uma força ativa de resistência contra Nilfgaard. Ao reconhecê-los como aliados indiretos, ele os liberta e os integra ao seu grupo: algo entre resistência, bando e sobreviventes organizados.\n\nEntre os membros, um se destaca imediatamente: Iorin Stenson, Jarl de Virmir. Nortenho. Exilado. Guerreiro de origem nobre entre os clãs do norte, marcado por traição familiar e deslocamento. Diferente de muitos ali, Iorin não é apenas um combatente — é alguém que já foi líder. Sua presença introduz um novo tipo de força na narrativa: não apenas poder físico, mas legitimidade política e cultural. Ele representa algo que Ilúvatar ainda não compreende totalmente: o peso de liderar um povo inteiro.",
    temporada: 3,
    emAndamento: true,
    personagens: [
      { nome: "Iluvathar", emoji: "🌳", rota: "/personagens/pcs" },
      { nome: "Mordekai", emoji: "😈", rota: "/personagens/pcs" },
      { nome: "Sirocco", emoji: "🐍", rota: "/personagens/npcs" },
      { nome: "Iorin", emoji: "🐺", rota: "/personagens/pcs" },
    ],
  },
  {
    id: 8,
    titulo: "A Queda de Kazak e o Exílio de Adrik",
    dataIngame: "Ano 1100 D.A.",
    resumo:
      "Adrik nasceu na nobre Casa Lahabrea, em Kazak Abul Kazhak. Criado sob a fé em Moradin, desenvolveu devoção forte e desconfiança por povos como elfos e drows. Sua vida mudou com a destruição de Kazak pelo dragão vermelho, forçando a família a fugir. Durante a fuga, perdeu seu irmão mais novo ao seguir uma figura misteriosa pela floresta até uma cabana ensanguentada. Culpado pelos pais, foi expulso de casa com a missão de só retornar ao encontrar o irmão. Em Teméria, num campo de refugiados, conheceu Thancred Alphinaud, seu melhor amigo. Juntos fundaram os Heavensward. Durante 15 anos perseguiu a bruxa Hilda Hulda, até que, consumido pela obsessão, realizou um sacrifício para invocá-la. A batalha custou a vida de todos os companheiros — apenas Adrik sobreviveu. Mesmo derrotando a bruxa, não encontrou o irmão. Hoje vive em Nilfgaard buscando redenção, carregando a culpa de cada escolha.",
    temporada: 3,
  },
];
