import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Historia } from "@/data/historias";

const StoryCard = ({ historia }: { historia: Historia }) => (
  <Card className="border-l-4 border-hellfire-orange hover:shadow-2xl transition-all">
    <CardHeader>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
        <CardTitle className="text-2xl text-hellfire-gold">
          {historia.titulo}
        </CardTitle>
        <span className="text-sm text-hellfire-ember italic whitespace-nowrap">
          {historia.dataIngame}
        </span>
      </div>
    </CardHeader>

    <CardContent>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {historia.resumo}
      </p>

      {historia.personagensEnvolvidos.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-1.5">Personagens envolvidos:</p>
          <div className="flex flex-wrap gap-1.5">
            {historia.personagensEnvolvidos.map((p, i) => (
              <Badge key={i} variant="gold" className="text-xs">
                {p}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
        {historia.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-md bg-hellfire-orange/20 text-hellfire-orange text-sm border border-hellfire-orange/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default StoryCard;
