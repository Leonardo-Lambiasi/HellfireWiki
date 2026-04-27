import PageHeader from "@/components/PageHeader";
import CharacterCard from "@/components/CharacterCard";
import { npcs } from "@/data/personagens";

const PersonagensNPCs = () => (
  <div className="space-y-8 animate-fade-in-up">
    <PageHeader
      titulo="NPCs"
      descricao="Aliados, vilões e figuras que moldam o destino de Ark"
      breadcrumb="Personagens / NPCs"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {npcs.map(npc => (
        <CharacterCard key={npc.id} personagem={npc} />
      ))}
    </div>
  </div>
);

export default PersonagensNPCs;
