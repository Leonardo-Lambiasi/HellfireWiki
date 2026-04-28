import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <p className="text-muted-foreground leading-relaxed">
        {historia.resumo}
      </p>
    </CardContent>
  </Card>
);

export default StoryCard;
