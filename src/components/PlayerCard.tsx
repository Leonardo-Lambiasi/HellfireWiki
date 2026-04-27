import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Jogador } from "@/data/jogadores";

const PlayerCard = ({ jogador }: { jogador: Jogador }) => (
  <Card className={`hover:scale-[1.02] transition-all ${!jogador.ativo ? "opacity-60" : ""}`}>
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <span className="text-5xl">{jogador.avatar}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-hellfire-gold">{jogador.nome}</h3>
            <Badge variant={jogador.ativo ? "default" : "secondary"}>
              {jogador.ativo ? "Ativo" : "Ausente"}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {jogador.bio}
          </p>

          {jogador.personagens.length > 0 && (
            <div>
              <p className="text-xs text-muted-foreground mb-1.5">Personagens:</p>
              <div className="flex flex-wrap gap-1.5">
                {jogador.personagens.map((p, i) => (
                  <Badge key={i} variant="hellfire" className="text-xs">
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PlayerCard;
