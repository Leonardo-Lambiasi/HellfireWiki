import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { npcs } from "@/data/personagens";
import type { Personagem } from "@/data/personagens";

const NPCCard = ({ personagem }: { personagem: Personagem }) => (
  <Card className="hover:scale-[1.02] transition-all">
    <CardHeader>
      <CardTitle className="text-xl text-hellfire-gold">{personagem.nome}</CardTitle>
      <p className="text-sm text-hellfire-ember">{personagem.origem}</p>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {personagem.descricao}
      </p>
    </CardContent>
  </Card>
);

const PersonagensNPCs = () => (
  <div className="space-y-8 animate-fade-in-up">
    <PageHeader
      titulo="NPCs"
      descricao="Aliados, vilões e figuras que moldam o destino de Ark"
      breadcrumb="Personagens / NPCs"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {npcs.map(npc => (
        <NPCCard key={npc.id} personagem={npc} />
      ))}
    </div>
  </div>
);

export default PersonagensNPCs;
