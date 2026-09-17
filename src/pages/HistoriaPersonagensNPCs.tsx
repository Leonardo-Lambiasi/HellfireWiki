import { useState } from "react";
import { Search, X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CharacterCarousel from "@/components/CharacterCarousel";
import { npcs } from "@/data/personagens";

const HistoriaPersonagensNPCs = () => {
  const [query, setQuery] = useState("");

  const filtrados = npcs.filter(n => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return [n.nome, n.classe, n.raca, n.origem, n.descricao].join(" ").toLowerCase().includes(q);
  });

  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        titulo="Personagens NPCs"
        descricao="Aliados, vilões e figuras que surgem ao longo das histórias"
        breadcrumb="Histórias / Personagens NPCs"
      />

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Pesquisar por nome, afiliação, descrição..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-card border border-fundo-da-grota-ash/60 focus:border-fundo-da-grota-orange/70 focus:outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors"
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {query.trim() && (
        <p className="text-xs text-muted-foreground -mt-4">
          {filtrados.length} {filtrados.length === 1 ? "resultado" : "resultados"} para "{query}"
        </p>
      )}

      {filtrados.length > 0 ? (
        <CharacterCarousel titulo="Vitrine de NPCs" personagens={filtrados} />
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-4xl mb-4">🔍</p>
          <p className="italic">Nenhum NPC encontrado para "{query}".</p>
        </div>
      )}
    </div>
  );
};

export default HistoriaPersonagensNPCs;
