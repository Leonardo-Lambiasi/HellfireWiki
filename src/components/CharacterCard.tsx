import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Personagem } from "@/data/personagens";

function getClasseStyle(classe: string): string {
  const c = classe.toLowerCase();
  if (c.includes("clér"))                            return "selo-classe selo-classe-clerigo";
  if (c.includes("mago") || c.includes("maga"))      return "selo-classe selo-classe-mago";
  if (c.includes("bruxo"))                           return "selo-classe selo-classe-bruxo";
  if (c.includes("bruxa"))                           return "selo-classe selo-classe-bruxa";
  if (c.includes("feitiç"))                          return "selo-classe selo-classe-feiticeiro";
  if (c.includes("guerr"))                           return "selo-classe selo-classe-guerreiro";
  if (c.includes("bárb") || c.includes("barb"))      return "selo-classe selo-classe-barbaro";
  if (c.includes("ladino"))                          return "selo-classe selo-classe-ladino";
  if (c.includes("patrulh") || c.includes("ranger")) return "selo-classe selo-classe-patrulheiro";
  if (c.includes("artif"))                           return "selo-classe selo-classe-artifice";
  if (c.includes("xamã") || c.includes("xama"))      return "selo-classe selo-classe-xama";
  if (c.includes("nobre"))                           return "selo-classe selo-classe-nobre";
  if (c.includes("morto-vivo"))                      return "selo-classe selo-classe-morto-vivo";
  return                                                    "selo-classe selo-classe-padrao";
}

function getStatusColor(status: string): string {
  switch (status) {
    case "Vivo":         return "selo-status-vivo";
    case "MIA":          return "selo-status-mia";
    case "Morto":        return "selo-status-morto";
    case "Aliado":       return "selo-status-aliado";
    case "Desconhecido": return "selo-status-desconhecido";
    default:             return "selo-status-padrao";
  }
}

const CharacterCard = ({ personagem }: { personagem: Personagem }) => (
  <Card className="cartao-zoom">
    <CardHeader>
      <div className="personagem-topo">
        <div className="personagem-identidade">
          <span className="personagem-icone">{personagem.icon}</span>
          <div>
            <CardTitle className="personagem-nome texto-ouro">
              {personagem.nome}
            </CardTitle>
            <p className="personagem-raca">{personagem.raca}</p>
          </div>
        </div>
        <div className="personagem-selos">
          <Badge variant="outline" className={getClasseStyle(personagem.classe)}>
            {personagem.classe}
          </Badge>
          <Badge className={`selo-status ${getStatusColor(personagem.status)}`}>
            {personagem.status}
          </Badge>
        </div>
      </div>
    </CardHeader>

    <CardContent>
      <p className="personagem-descricao">
        {personagem.descricao}
      </p>

      <div className="personagem-origem">
        <strong>Origem:</strong> {personagem.origem}
      </div>
    </CardContent>
  </Card>
);

export default CharacterCard;
