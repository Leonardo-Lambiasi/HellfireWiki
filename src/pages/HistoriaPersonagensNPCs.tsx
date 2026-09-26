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
    <div className="pagina">
      <PageHeader
        titulo="Personagens NPCs"
        descricao="Aliados, vilões e figuras que surgem ao longo das histórias"
        breadcrumb="Histórias / Personagens NPCs"
      />

      <div className="campo-busca">
        <Search className="campo-busca-icone icone-pequeno" />
        <input
          type="text"
          placeholder="Pesquisar por nome, afiliação, descrição..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="campo-busca-input"
        />
        {query && (
          <button onClick={() => setQuery("")} className="campo-busca-limpar">
            <X className="icone-pequeno" />
          </button>
        )}
      </div>

      {query.trim() && (
        <p className="contador-resultados">
          {filtrados.length} {filtrados.length === 1 ? "resultado" : "resultados"} para "{query}"
        </p>
      )}

      {filtrados.length > 0 ? (
        <CharacterCarousel titulo="Vitrine de NPCs" personagens={filtrados} />
      ) : (
        <div className="estado-vazio">
          <p className="estado-vazio-icone">🔍</p>
          <p className="estado-vazio-texto">Nenhum NPC encontrado para "{query}".</p>
        </div>
      )}
    </div>
  );
};

export default HistoriaPersonagensNPCs;
