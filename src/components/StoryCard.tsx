import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Historia } from "@/data/historias";

const StoryCard = ({ historia }: { historia: Historia }) => (
  <Card className={`border-l-4 ${historia.emAndamento ? "border-hellfire-ember" : "border-hellfire-orange"} hover:shadow-2xl transition-all`}>
    <CardHeader>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
        <div className="flex items-center gap-3 flex-wrap">
          <CardTitle className="text-2xl text-hellfire-gold">
            {historia.titulo}
          </CardTitle>
          {historia.emAndamento && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-hellfire-ember/20 text-hellfire-ember border border-hellfire-ember/40 animate-pulse">
              🔨 Em Andamento
            </span>
          )}
        </div>
        <span className="text-sm text-hellfire-ember italic whitespace-nowrap">
          {historia.dataIngame}
        </span>
      </div>
    </CardHeader>

    <CardContent className="space-y-4">
      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
        {historia.resumo}
      </p>

      {historia.personagens && historia.personagens.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-hellfire-ash/30">
          <span className="text-xs text-muted-foreground self-center">Personagens:</span>
          {historia.personagens.map(p => (
            <Link
              key={p.nome}
              to={p.rota}
              className="text-xs px-2.5 py-1 rounded-full bg-hellfire-charcoal border border-hellfire-ash/60 text-hellfire-gold hover:border-hellfire-orange/60 hover:bg-hellfire-orange/10 transition-colors"
            >
              {p.emoji} {p.nome}
            </Link>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export default StoryCard;
