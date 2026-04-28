import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Personagem } from "@/data/personagens";

function getClasseVariant(classe: string): "hellfire" | "destructive" | "default" | "gold" | "secondary" {
  if (classe.startsWith("Mago") || classe.startsWith("Clér") || classe.startsWith("Feit")) return "hellfire";
  if (classe.startsWith("Guerr") || classe.startsWith("Bárb") || classe.startsWith("Bar")) return "destructive";
  if (classe.startsWith("Ladino") || classe.startsWith("Ranger")) return "default";
  if (classe === "Nobre" || classe === "Sábio") return "gold";
  return "secondary";
}

function getStatusColor(status: string): string {
  switch (status) {
    case "Vivo":         return "bg-green-700";
    case "MIA":          return "bg-yellow-700";
    case "Morto":        return "bg-red-700";
    case "Aliado":       return "bg-blue-700";
    case "Desconhecido": return "bg-purple-700";
    default:             return "bg-gray-700";
  }
}

const CharacterCard = ({ personagem }: { personagem: Personagem }) => (
  <Card className="hover:scale-[1.02] transition-all">
    <CardHeader>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <span className="text-5xl">{personagem.icon}</span>
          <div>
            <CardTitle className="text-2xl text-hellfire-gold">
              {personagem.nome}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{personagem.raca}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <Badge variant={getClasseVariant(personagem.classe)}>
            {personagem.classe}
          </Badge>
          <Badge className={`${getStatusColor(personagem.status)} text-white text-xs`}>
            {personagem.status}
          </Badge>
        </div>
      </div>
    </CardHeader>

    <CardContent>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {personagem.descricao}
      </p>

      <div className="pt-4 border-t border-border text-sm text-muted-foreground">
        <strong>Origem:</strong> {personagem.origem}
      </div>
    </CardContent>
  </Card>
);

export default CharacterCard;
