import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Historia } from "@/data/historias";
import { getPersonagemRota } from "@/data/personagens";

const StoryCard = ({ historia }: { historia: Historia }) => (
  <Card className={`border-l-4 ${historia.emAndamento ? "border-fundo-da-grota-ember" : "border-fundo-da-grota-orange"} hover:shadow-2xl transition-all`}>
    <CardHeader>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
        <div className="flex items-center gap-3 flex-wrap">
          <CardTitle className="text-2xl text-fundo-da-grota-gold">
            {historia.titulo}
          </CardTitle>
          {historia.emAndamento && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-fundo-da-grota-ember/20 text-fundo-da-grota-ember border border-fundo-da-grota-ember/40 animate-pulse">
              🔨 Em Andamento
            </span>
          )}
        </div>
        <span className="text-sm text-fundo-da-grota-ember italic whitespace-nowrap">
          {historia.dataIngame}
        </span>
      </div>
    </CardHeader>

    <CardContent className="space-y-4">
      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
        {historia.resumo}
      </p>

      {historia.personagens && historia.personagens.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-fundo-da-grota-ash/30">
          <span className="text-xs text-muted-foreground self-center">Personagens:</span>
          {historia.personagens.map(p => (
            <Link
              key={p.nome}
              to={getPersonagemRota(p.nome)}
              className="text-xs px-2.5 py-1 rounded-full bg-fundo-da-grota-charcoal border border-fundo-da-grota-ash/60 text-fundo-da-grota-gold hover:border-fundo-da-grota-orange/60 hover:bg-fundo-da-grota-orange/10 transition-colors"
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
