export interface Regiao {
  nome: string;
  descricao: string;
}

export const regioes: Regiao[] = [
  // ── O mundo ─────────────────────────────────────────────────────────────────
  { nome: "Ark",           descricao: "Mundo onde vivem os personagens."                                        },
  { nome: "Cidade de Emberfall",    descricao: "Cidade-fortaleza construída sobre um portal infernal selado."         },

  // ── Origens dos heróis ───────────────────────────────────────────────────────
  { nome: "Virmir",                 descricao: "Território do líder Thorstein. Abriga a Tumba dos Yarls e um portal intraplanar ancorado." },
  { nome: "Khazak",                 descricao: "Antigo orgulho da civilização anã, hoje uma ruína dominada por um dragão vermelho. Seus sobreviventes vivem no exílio carregando o peso de um passado destruído." },
  { nome: "Mezoberranzam",          descricao: "Cidade drow no noroeste, com acesso ao Subterrâneo — habitada por forças ocultas que observam e talvez manipulem os acontecimentos da superfície. Origem de Shadow." },
  { nome: "Oxenfurt",               descricao: "Cidade universitária — origem de Fávaro."                            },
  { nome: "High Forest",            descricao: "Floresta ancestral, lar dos elfos e origem de Iluvathar. Abriga Mithrandir — cidade élfica suspensa nas copas das árvores antigas, praticamente invisível do solo. Guarda do território é o Velho da Montanha, ser ancestral de raça indeterminada que se revelou ser o próprio Dragão Guardião de Mithrandir. Foi palco da guerra contra Nilfgaard, liderada por Iluvathar, que confrontou pessoalmente o Imperador Radovan nessas terras." },

  // ── Locais ativos da campanha ────────────────────────────────────────────────
  { nome: "Manarfel",               descricao: "Destino atual do grupo."                                             },
  { nome: "Emberbreach",            descricao: "Cidade onde Adrik residia antes de ser encontrado preso por Uriki."  },
  { nome: "Wessester",              descricao: "Cidade onde Leopold Strauss invocou magia ancestral. Mordekai foi capturado e levado para cá." },
  { nome: "Alta Forja",             descricao: "Cidade construída em torno de uma grande forja no alto de uma montanha. Sede da Taverna dos Irmãos Cebola." },
  { nome: "Vraddargrud",            descricao: "Cidade do Clã Lua Negra, sob liderança de Rexxar."                  },
  { nome: "Razoduk",                descricao: "Cidade controlada pelo Clã Lua Sangrenta, onde Roxak mantém a liderança." },
  { nome: "Passagem Glacial",       descricao: "Passagem gelada ao extremo norte — cultistas do Príncipe das Trevas abriram um portal aqui e desapareceram." },
  { nome: "Mernwihr",               descricao: "Cidade com asilo onde Arne está detido."                            },
  { nome: "Sogkyer",                descricao: "Cidade onde vive Mika, o anão com trenós — ponto de partida para a Passagem Glacial." },
  { nome: "Besenmor",               descricao: "Cidade onde a Catedral do Fogo será inaugurada em breve. Mordekai foi desviado para cá." },

  // ── Grandes regiões políticas ────────────────────────────────────────────────
  { nome: "Zarkóvia",               descricao: "Reino mergulhado em guerra civil — múltiplas forças disputam o trono numa fragmentação política que o transforma em barril de pólvora." },
  { nome: "Vladislávia",            descricao: "Capital de Zarkóvia e bastião da nobreza em declínio — marcada por intrigas políticas e tentativas desesperadas de manter a legitimidade do trono."            },
  { nome: "Rostov",                 descricao: "Potência emergente ao sul de Zarkóvia, guiada por Yakov Nicolaievitch com apoio de Nilfgaard e dos ideais do Fogo Eterno. Foi aqui que Mordekai foi resgatado por Iluvathar e Mason. Também aqui que Salazar, mago da party, foi capturado pelo tio traidor Yakov — sua Gema Ancestral confiscada por Leopold Strauss e ele executado publicamente pelos sacerdotes do Fogo Eterno como demonstração política de força." },
  { nome: "Baróvia",                descricao: "Reino isolado do sudeste sob o domínio absoluto de Strahd Von Zarovitch — envolto em névoa e horror gótico. Não busca guerra, mas não permite interferência."  },
  { nome: "Galásia",                 descricao: "Cidade-estado de arquitetura clássica e vínculos políticos antigos, localizada ao sul dos Reinos do Norte. Foi para cá que o grupo se dirigiu após a Batalha de High Forest — e onde Leomir, convocado para negociações políticas e matrimoniais, escolheu casar-se com a princesa local e deixar a jornada." },
  { nome: "Velen",                  descricao: "Reino marcado pela guerra contra Nilfgaard."                          },
  { nome: "Redânia",                descricao: "Potência regional, aliada de Velen na guerra."                        },
  { nome: "Teméria / Lyria",        descricao: "Campo de refugiados e berço dos Heavensward."                         },
  { nome: "Underdark",              descricao: "Rede de cavernas habitadas por criaturas das trevas e Drow."          },

  // ── Regiões geográficas ──────────────────────────────────────────────────────
  { nome: "Espinha do Mundo",       descricao: "Cadeia de montanhas colossais no centro do continente."              },
  { nome: "Frozenfail / Frostwind", descricao: "Terras geladas do extremo norte."                                    },
  { nome: "Skellige",               descricao: "Arquipélago de guerreiros do norte."                                  },
  { nome: "Floresta Sombria",       descricao: "Floresta densa repleta de criaturas das trevas."                      },
  { nome: "Silver Marshes",         descricao: "Pântanos nos limites dos Reinos do Norte."                           },
  { nome: "Baka Desert",            descricao: "Deserto hostil nos confins do mundo. Abriga a cidade de Baka, governada por Diafbah. Foi palco do primeiro grande evento da campanha — a ascensão do Leviathan, que emergiu das profundezas e destruiu parte da cidade antes de ser derrotado pelo grupo na Temporada I." },
  { nome: "Winterhold",             descricao: "Prisão de segurança máxima controlada por Nilfgaard, no extremo norte. Local onde Exius Vesper — arquimago e ex-diretor de Oxenfurt — está encarcerado. Destino da missão de resgate pendente do grupo, conduzida por Tatiane Vesper." },
  { nome: "Sistumbría / Valengard", descricao: "Região estratégica nos Reinos do Norte."                             },
  { nome: "Golden Door",            descricao: "Passagem lendária de destino desconhecido."                          },
  { nome: "Zemlya",                 descricao: "Região isolada com rumores de relíquias antigas."                    },
  { nome: "Simbia",                 descricao: "Território desconhecido."                                             },

  // ── Cidades menores ──────────────────────────────────────────────────────────
  { nome: "Novigrad",               descricao: "Grande porto na costa oeste."                                         },
  { nome: "Vizima",                 descricao: "Capital provincial no sul."                                           },
  { nome: "Whitefield",             descricao: "Cidade no centro do continente, a oeste de Oxenfurt."               },
  { nome: "Skyfield",               descricao: "Cidade entre Vizima e Oxenfurt."                                     },
  { nome: "Teméria",                descricao: "Reino às margens de uma grande baía a sudeste."                      },
  { nome: "Velenor",                descricao: "Porto costeiro ao sul de Novigrad."                                   },
  { nome: "Toussaint",              descricao: "Principado no sudeste, terra de vinhedos e cavalaria."               },
  { nome: "Neverwinter",            descricao: "Cidade ao sul de Teméria."                                            },
  { nome: "Ordulin",                descricao: "Cidade no sudoeste."                                                  },
  { nome: "Andratis",               descricao: "Cidade a sudeste, próxima a Neverwinter."                            },
];

export const temporadas = 5;
