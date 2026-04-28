import PageHeader from "@/components/PageHeader";
import CharacterCard from "@/components/CharacterCard";
import { herois } from "@/data/personagens";

const PersonagensPCs = () => (
  <div className="space-y-8 animate-fade-in-up">
    <PageHeader
      titulo="Heróis"
      descricao="Os heróis que forjam seu destino nas terras de Ark"
      breadcrumb="Personagens / Heróis"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {herois.map(heroi => (
        <CharacterCard key={heroi.id} personagem={heroi} />
      ))}
    </div>
  </div>
);

export default PersonagensPCs;
