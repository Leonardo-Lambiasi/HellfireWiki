export type StatusRegiao =
  | "Explorado"
  | "Parcialmente Explorado"
  | "Inexplorado"
  | "Base de Operações";

export interface Regiao {
  nome: string;
  descricao: string;
  status: StatusRegiao;
}

export const regioes: Regiao[] = [
  {
    nome: "Reino de Ark",
    descricao: "O reino principal onde a campanha se desenrola, marcado por vulcões ativos e ruínas antigas.",
    status: "Explorado",
  },
  {
    nome: "Underdark",
    descricao: "Rede de cavernas profundas habitadas por criaturas das trevas. Thorne desapareceu aqui.",
    status: "Parcialmente Explorado",
  },
  {
    nome: "Cidade de Emberfall",
    descricao: "Cidade-fortaleza governada por Lorde Ashen, construída sobre ruínas infernais.",
    status: "Base de Operações",
  },
  {
    nome: "Floresta Sombria",
    descricao: "Floresta densa onde Thorne foi guardião antes de se juntar ao grupo.",
    status: "Explorado",
  },
];

export const temporadas = 5;

export const regioesExploradas = 20;
