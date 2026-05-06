export interface Participante {
  nome: string;
  emoji: string;
  tipo: "heroi" | "npc";
  rota: string;
}

export const temporadasParticipantes: Record<number, Participante[]> = {
  1: [
    { nome: "Iluvathar", emoji: "🌳", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Mason",     emoji: "⚔️", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Salazar",   emoji: "💎", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Leomir",    emoji: "🎶", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Shadow",    emoji: "🐾", tipo: "heroi", rota: "/personagens/pcs" },
  ],
  2: [
    { nome: "Iluvathar",       emoji: "🌳", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Mason",           emoji: "⚔️", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Salazar",         emoji: "💎", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Leomir",          emoji: "🎶", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Shadow",          emoji: "🐾", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Mordekai",        emoji: "😈", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Leopold Strauss", emoji: "🔮", tipo: "npc",   rota: "/personagens/npcs" },
  ],
  3: [
    { nome: "Iluvathar",      emoji: "🌳", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Mordekai",       emoji: "😈", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Adrik",          emoji: "⚒️", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Iorin",          emoji: "🐺", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Fávaro",         emoji: "🎩", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Djakaro",        emoji: "⛪", tipo: "heroi", rota: "/personagens/pcs" },
    { nome: "Sirocco",        emoji: "🐍", tipo: "npc",   rota: "/personagens/npcs" },
    { nome: "Zelitch",        emoji: "🔮", tipo: "npc",   rota: "/personagens/npcs" },
    { nome: "Tatiane Vesper", emoji: "✨", tipo: "npc",   rota: "/personagens/npcs" },
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
      "Eons antes da formação de Ark, existia apenas o vazio primordial, sobre o qual pairava Ahr, o Deus Supremo. De sua própria essência nasceram quatro divindades superiores — Ehlonna, Heironeous, Moradin e Baal — conhecidas como as quatro faces de Ahr. Ehlonna representa a natureza e os elfos; Heironeous, a coragem e a humanidade; Moradin, a forja e os anões.\n\nBaal, a quarta face, era diferente: silencioso onde os outros debatiam, paciente onde os outros agiam — alimentando-se da discórdia sem jamais gerá-la abertamente. Foi Ehlonna quem percebeu a influência maligna de Ba'al: aquele impasse não era teimosia — era sabotagem. Ao compartilhar isso com os demais, Moradin sugeriu expulsar Ba'al para o abismo. Ehlonna, porém, o convenceu a dar uma última chance. Heironeous, Ehlonna e Moradin privaram Ba'al de seus poderes e o enviaram a uma vila remota com a missão de restaurá-la, protegê-la de invasores e fazer a comunidade prosperar.\n\nBaal tomou a vila pela força. Torturou a mulher mais bela do lugar como ritual de purificação. Em um ano, partindo do cultivo de grãos, desenvolveu o que mais tarde seria chamado de necromancia — criar vida complexa a partir da morte. Voltou a Celestia se orgulhando. Moradin se irritou, percebendo que nada havia sido aprendido — apenas a perversidade piorou. Heironeous, em conjunto com os irmãos, baniu Ba'al para as profundezas — e ao cair, sua essência rasgou o tecido do além, criando os planos inferiores. A mulher deu à luz uma criança que mamou de seu seio semivivo. Quando seus olhos se abriram pela última vez, a centelha da vida já havia partido. A criança era Oz de Osbourne — o futuro Príncipe das Trevas.\n\nEntre os heróis mortais que ascenderam ao panteão, destacam-se Naldiv (o primeiro paladino, que derrotou Tiamat ao lado de Bahamut), Coren Larethian (elfo mediador entre as raças) e Kaz, o Dragonslayer (anão que fundou Kazhak e resistiu décadas contra dragões). O calendário de Ark conta a partir deste momento como Ano 0.",
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
    id: 3,
    titulo: "A Origem do Senhor das Trevas",
    dataIngame: "Antes do Ano 0",
    resumo:
      "Oz de Osbourne não nasceu do amor. Nasceu da punição divina.\n\nEm Celestia, nas câmaras onde as quatro faces de Ahr deliberavam sobre o destino do mundo, Baal — a face silenciosa — não criava nem debatia. Alimentava-se da discórdia dos outros, paciente como uma fratura que se aprofunda no inverno. Quando os demais perceberam o que ele fazia, foi Ehlonna quem primeiro nomeou o problema. Moradin sugeriu expulsar Ba'al para o abismo. Ehlonna, porém, o convenceu a dar uma última chance. Heironeous, Ehlonna e Moradin privaram Ba'al de seus poderes e o enviaram a uma vila remota — humano em tudo que importava, com uma missão: restaurá-la, protegê-la de invasores e fazer a comunidade prosperar.\n\nBaal tomou a vila à força. Torturou a mulher mais bela do lugar — não por crueldade pura, mas como ritual. Chamou de purificação. Em um ano, conduziu experimentos que partiam do cultivo de grãos e chegaram à criação de vida complexa a partir de matéria morta. Desenvolveu o que mais tarde seria chamado de necromancia. E voltou a Celestia se orgulhando.\n\nMoradin se irritou, percebendo que nada havia sido aprendido — apenas a perversidade de Ba'al havia piorado. Heironeous, em conjunto com seus irmãos, baniu Ba'al para as profundezas — e ao cair, a essência corrompida de Ba'al rasgou o tecido do além, criando os planos inferiores. O inferno, em toda a sua extensão, nasceu desse impacto.\n\nA mulher sobreviveu. Deu à luz uma criança que mamou de seu seio semivivo. Quando os olhos dela se abriram pela última vez, não havia mais a centelha da vida — apenas reconhecimento, e silêncio. A criança era Oz de Osbourne.\n\nOz cresceu com uma aptidão sobrenatural à magia — ela simplesmente respondia a ele, sem estudo, sem iniciação. Tornou-se especialista em necromancia e, junto de suas legiões de mortos-vivos, enfrentou durante séculos todo tipo de criatura que respirasse: dragões, heróis lendários, magos e lichs poderosos, exércitos de reinos inteiros. Sua longevidade era innatural — parecia não envelhecer. Parecia invencível. E era — até que seu discípulo Kilminster o traiu, durante a Era da Alvorada.\n\nA morte de Oz não apagou sua essência. Ela foi capturada, comprimida e aprisionada no Diário do Homem Louco — um artefato que ninguém sabe ao certo onde está, nem quem o carrega. O Príncipe das Trevas não está morto. Está esperando.",
    temporada: null,
  },
  {
    id: 4,
    titulo: "As Gemas Ancestrais",
    dataIngame: "Era dos Dragões",
    resumo:
      "Na Era dos Dragões, Tiamat — a Rainha dos Dragões Cromáticos — forjou cinco Gemas Ancestrais como extensões de seu poder sobre os planos. Cada gema carregava uma fração de força primordial capaz de dobrar a realidade ao redor de quem a empunhasse com conhecimento suficiente. Eram, em essência, chaves — e cada uma abria portas que deveriam permanecer fechadas.\n\nNaldiv, o primeiro paladino e descendente de linhagem capaz de ferir dragões com aço comum, travou a batalha definitiva contra Tiamat ao lado de Bahamut, o Rei dos Dragões Metálicos. Juntos, a derrotaram. As gemas foram dispersas pelo mundo — enterradas, escondidas, confiadas a guardiões que não sobreviveram ao tempo.\n\nSéculos depois, facções ao redor do mundo buscam essas gemas: Nilfgaard, cultos das trevas e indivíduos com ambição própria. Uma delas esteve nas mãos de Exius Vesper, arquimago e ex-diretor de Oxenfurt, que a entregou a Salazar com a missão de destruí-la contra o Leviathan. A gema foi usada — e o Leviathan caiu. Mas Salazar pagou o preço: capturado em Rostov por seu tio Yakov, a gema foi confiscada por Leopold Strauss e ele foi executado publicamente pelos sacerdotes do Fogo Eterno.\n\nOnde estão as demais gemas, ninguém sabe com certeza. Mas cada uma que é reunida — seja por Nilfgaard, seja pelos Cavaleiros do Caos — torna o Príncipe das Trevas mais forte.",
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

  // ── Temporada 1 ───────────────────────────────────────────────────────────── // nunca incluir npc
  {
    id: 6,
    titulo: "A Queda do Leviathan",
    dataIngame: "Temporada I",
    resumo:
      "O primeiro grande arco da campanha levou o grupo ao coração do Deserto de Baka — terra hostil e esquecida, governada pelo enigmático Diafbah. O que começou como uma missão de investigação virou uma corrida contra o tempo: das profundezas do deserto, algo acordou. O Leviathan emergiu e começou a destruir a cidade de Baka pedaço por pedaço.\n\nA batalha foi brutal. O Leviathan não era um monstro comum — era um evento. Mas o grupo segurou. Iluvathar coordenou, Mason forçou o confronto direto, Salazar apostou em soluções arcanas de alto risco — canalizando a Gema Ancestral que Vesper lhe confiara além do que qualquer mente deveria suportar. O Leviathan foi destruído. A gema foi o preço.\n\nA cidade sobreviveu — em parte. O que não sobreviveu foi a ilusão de que o grupo estava lidando com um mundo previsível. A vitória custou mais do que parecia. Salazar seguiu sozinho em busca de mais poder e conhecimento. Meses depois foi capturado em Rostov, a gema confiscada por Leopold Strauss, e executado publicamente pelos sacerdotes do Fogo Eterno. Aquilo foi apenas o começo.",
    temporada: 1,
    personagens: [
      { nome: "Iluvathar", emoji: "🌳", rota: "/personagens/pcs" },
      { nome: "Mason",     emoji: "⚔️", rota: "/personagens/pcs" },
      { nome: "Salazar",   emoji: "💎", rota: "/personagens/pcs" },
      { nome: "Leomir",    emoji: "🎶", rota: "/personagens/pcs" },
      { nome: "Shadow",    emoji: "🐾", rota: "/personagens/pcs" },
    ],
  },

  // ── Temporada 2 ─────────────────────────────────────────────────────────────
  {
    id: 7,
    titulo: "A Guerra de High Forest",
    dataIngame: "Temporada II",
    resumo:
      "A segunda temporada elevou as apostas a uma escala que o grupo ainda não havia enfrentado. High Forest — floresta ancestral dos elfos, lar de Iluvathar e de uma magia que antecede os próprios reinos — estava sob ataque. Nilfgaard havia cruzado a fronteira, e o Imperador Radovan conduzia a ofensiva pessoalmente.\n\nFoi nessa temporada que Mordekai se juntou à party — resgatado em Rostov por Iluvathar e Mason, carregando o peso de quem foi rejeitado pelo próprio destino. Sua presença trouxe intensidade e uma lealdade quase cega a Iluvathar. Leopold Strauss operava nas sombras da campanha nilfgaardiana — rastreando artefatos, decifrando relíquias, servindo ao Império de formas que nenhuma espada poderia.\n\nA defesa de High Forest foi tanto estratégica quanto militar. Iluvathar confrontou pessoalmente o Imperador Radovan — não apenas como oponente em campo, mas como símbolo: prova de que a resistência era real, organizada e disposta a custar tudo. Mason segurou posições com aliados contra um exército numericamente superior. Morreu nessa batalha — resistência pura, não heroísmo calculado. Tornou-se figura mítica: versões contraditórias de sua morte circulam entre soldados como se fosse semideus.\n\nA guerra foi vencida. High Forest resistiu. Leomir, após a batalha, casou-se com a princesa de Galáxia e saiu da jornada — um homem escolhendo uma vida diferente. Para Iluvathar, a perda foi real e confirmou o padrão: quanto mais avança, mais perde.",
    temporada: 2,
    personagens: [
      { nome: "Iluvathar",       emoji: "🌳", rota: "/personagens/pcs" },
      { nome: "Mason",           emoji: "⚔️", rota: "/personagens/pcs" },
      { nome: "Salazar",         emoji: "💎", rota: "/personagens/pcs" },
      { nome: "Leomir",          emoji: "🎶", rota: "/personagens/pcs" },
      { nome: "Shadow",          emoji: "🐾", rota: "/personagens/pcs" },
      { nome: "Mordekai",        emoji: "😈", rota: "/personagens/pcs" },
    ],
  },

  // ── Temporada 3 ─────────────────────────────────────────────────────────────
  {
    id: 12,
    titulo: "Fragmentação — A Travessia e o Novo Eixo",
    dataIngame: "Temporada III (em andamento)",
    resumo:
      "Após deixar Galáxia, Ilúvatar e Mordekai seguem viagem rumo ao norte — sem grupo, sem estrutura, apenas o caminho.\n\nDurante a travessia, o mundo se revela em estado bruto: refugiados recusados nas fronteiras, cidades queimadas ainda fumegando, estradas dominadas por saqueadores, exércitos marchando sem destino claro. A guerra deixou de ser um evento. Ela se tornou o estado natural das coisas.\n\nÉ nesse cenário que Ilúvatar começa a mudar. Ele passa a ensinar Mordekai não magia, não estratégia, mas desconfiança — um princípio rígido: não confiar em ninguém, não se apegar, não se distrair. Insiste que mulheres são distrações perigosas, capazes de desviar homens de seus deveres. Isso não nasce de filosofia. Nasce de perda. Mordekai, jovem e influenciável, absorve tudo como verdade absoluta — mas é justamente ele quem impede Ilúvatar de afundar: sua leveza e ingenuidade funcionam como contraponto constante ao peso crescente que o clérigo carrega. Eles seguem juntos, mas já não estão no mesmo lugar emocional.\n\nPróximos de High Forest, os dois caem em uma emboscada e são capturados. Não por inimigos — o líder do grupo é Sirocco, nome já conhecido, agora confirmado como líder de uma força ativa de resistência contra Nilfgaard. Ao reconhecê-los como aliados indiretos, ele os liberta e os integra ao seu grupo: algo entre resistência, bando e sobreviventes organizados.\n\nEntre os membros, um se destaca imediatamente: Iorin Stenson, Jarl de Virmir. Nortenho. Exilado. Guerreiro de origem nobre entre os clãs do norte, marcado por traição familiar e deslocamento. Diferente de muitos ali, Iorin não é apenas um combatente — é alguém que já foi líder. Sua presença introduz um novo tipo de força na narrativa: não apenas poder físico, mas legitimidade política e cultural. Ele representa algo que Ilúvatar ainda não compreende totalmente: o peso de liderar um povo inteiro.\n\nNa noite anterior à emboscada na ponte, Ilúvatar e Zelitch — a feiticeira tiefling da gangue de Sirocco — passaram a noite juntos. Entre os dois havia afinidade real: interesse compartilhado em magia, gemas e Cavaleiros do Caos. Mordekai descobriu. Para ele, não era apenas uma traição — era hipocrisia fundamental. O mesmo homem que o ensinou que mulheres eram distrações perigosas havia se distraído. A regra havia sido quebrada por quem a criou.\n\nO que veio depois foi a Batalha da Ponte. Mordekai, carregando raiva e talvez a necessidade de provar algo que não conseguia articular, saltou com dois barris de pólvora. O ato foi fatal. E foi um ato de coragem.\n\nIlúvatar se recusou a aceitar mais uma perda. Ressuscitou Mordekai — e esse ato marcou uma virada: Ilúvatar passou a interferir diretamente contra o destino. A confiança entre os dois foi restaurada, diferente do que era antes — mais honesta, mais pesada.\n\nFoi nesse período que Adrik se juntou ao grupo — encontrado numa vila próxima à Torre de Leopold Strauss, carregando as marcas de quem sobreviveu a mais do que deveria. Sua chegada trouxe uma nova coluna moral: mais rígida, mais direta, com a convicção de quem perdeu tudo por causa de escolhas que pareciam certas na hora.\n\nEm seguida, o Céu Vermelho. O fenômeno alterou o céu de todo o continente de Ark — e a origem foi rastreada até a torre de Leopold Strauss. O arqueólogo arcano de Nilfgaard não era apenas um colecionador de artefatos: estava operando em uma escala que afetava a realidade do mundo.\n\nO demônio do orfanato foi outro evento que marcou essa fase — uma ameaça que colocou o grupo frente a frente com algo que se alimenta de vulnerabilidade. A solução custou mais do que parecia necessário.\n\nFoi também nessa temporada que Fávaro e Djakaro entraram no grupo. Quando os Cavaleiros do Caos atacaram, Fávaro caiu em combate — morto. Djakaro o ressuscitou, usando o mesmo poder que Moradin lhe dera para construir e proteger. Não servem apenas à destruição. Nunca serviram.",
    temporada: 3,
    emAndamento: true,
    personagens: [
      { nome: "Iluvathar", emoji: "🌳", rota: "/personagens/pcs" },
      { nome: "Mordekai",  emoji: "😈", rota: "/personagens/pcs" },
      { nome: "Adrik",     emoji: "⚒️", rota: "/personagens/pcs" },
      { nome: "Iorin",     emoji: "🐺", rota: "/personagens/pcs" },
      { nome: "Fávaro",    emoji: "🎩", rota: "/personagens/pcs" },
      { nome: "Djakaro",   emoji: "⛪", rota: "/personagens/pcs" },
    ],
  },
];
