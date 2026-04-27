export interface Historia {
  id: number;
  titulo: string;
  dataIngame: string;
  resumo: string;
  tags: string[];
  personagensEnvolvidos: string[];
  temporada: number | null; // null = Lore Geral (fora das temporadas)
}

export const historias: Historia[] = [
  {
    id: 1,
    titulo: "A Fundação de Emberfall",
    dataIngame: "Ano 800 — Era das Chamas",
    resumo:
      "Nas cinzas de uma guerra entre demônios e mortais, o primeiro Lorde Ashen ergueu a cidade-fortaleza sobre um portal selado ao Plano Infernal. O preço do selo: um juramento de sangue renovado a cada geração, vinculando a linhagem ao portal para sempre. Desde então, nenhum membro da família Ashen dorme sem sonhar com chamas.",
    tags: ["#Fundação", "#História", "#PortalInfernal"],
    personagensEnvolvidos: ["Primeiro Lorde Ashen"],
    temporada: null,
  },
  {
    id: 2,
    titulo: "O Pacto das Sombras Drow",
    dataIngame: "2º dia da Lua Negra, 1183 — Era das Chamas",
    resumo:
      "Elfos das profundezas infiltraram a corte de Emberfall, forjando um pacto secreto com membros corruptos da guarda da cidade. Décadas depois, esse pacto ainda drena recursos para o Underdark — e explica os infiltrados drow recém-descobertos nas câmaras do conselho. O alcance dessa infiltração ainda é desconhecido.",
    tags: ["#Drow", "#Traição", "#Underdark", "#Política"],
    personagensEnvolvidos: ["Conselho de Emberfall"],
    temporada: null,
  },
  {
    id: 3,
    titulo: "A Profecia dos Três Ungidos",
    dataIngame: "Ano 1201 — Era das Chamas",
    resumo:
      "O arquivista Rydan Silvertongue registrou uma profecia encontrada em tomos antigos da Torre dos Sábios: três seres marcados pela chama teriam em suas mãos o destino de Ark. A profecia menciona 'salvação e destruição como faces da mesma moeda'. Um dos tomos estava assinado com o símbolo pessoal de Thorne Wildrunner — datado de 200 anos antes de seu nascimento.",
    tags: ["#Profecia", "#Lore", "#MistérioArcano"],
    personagensEnvolvidos: ["Rydan Silvertongue", "Thorne Wildrunner"],
    temporada: 1,
  },
  {
    id: 4,
    titulo: "O Despertar do Portal",
    dataIngame: "1º dia da Lua Carmesim, 1247 — Era das Chamas",
    resumo:
      "Tremores sísmicos sacudiram Emberfall durante três noites consecutivas. Clérigos relataram vozes saindo das paredes das catacumbas. O Culto da Chama Eterna intensificou suas atividades às margens da cidade — o portal selado em 800 estava fraquejando, e o ritual para reabri-lo já havia começado sob a liderança de Serafine Brasacin.",
    tags: ["#Portal", "#CultoChama", "#Iminência"],
    personagensEnvolvidos: ["Lorde Ashen", "Serafine Brasacin"],
    temporada: 2,
  },
];
