import { useState } from "react";
import { Search } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CharacterCard from "@/components/CharacterCard";
import { herois } from "@/data/personagens";

const PersonagensPCs = () => {
  const [query, setQuery] = useState("");

  const filtrados = herois.filter(h => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return [h.nome, h.classe, h.raca, h.origem, h.descricao, h.status].join(" ").toLowerCase().includes(q);
  });

  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        titulo="Heróis"
        descricao="Os heróis que forjam seu destino nas terras de Ark"
        breadcrumb="Personagens / Heróis"
      />

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Pesquisar por nome, classe, raça, origem, status..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-hellfire-ash/60 focus:border-hellfire-orange/70 focus:outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors"
        />
      </div>

      {query.trim() && (
        <p className="text-xs text-muted-foreground -mt-4">
          {filtrados.length} {filtrados.length === 1 ? "resultado" : "resultados"} para "{query}"
        </p>
      )}

      {filtrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtrados.map(heroi => (
            <CharacterCard key={heroi.id} personagem={heroi} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-4xl mb-4">🔍</p>
          <p className="italic">Nenhum herói encontrado para "{query}".</p>
        </div>
      )}
    </div>
  );
};

export default PersonagensPCs;
