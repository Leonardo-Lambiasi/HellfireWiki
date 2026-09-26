import { useState } from "react";
import { Search, X } from "lucide-react";
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
    <div className="pagina">
      <PageHeader
        titulo="Heróis"
        descricao="Os heróis que forjam seu destino nas terras de Ark"
        breadcrumb="Personagens / Heróis"
      />

      <div className="campo-busca">
        <Search className="campo-busca-icone icone-pequeno" />
        <input
          type="text"
          placeholder="Pesquisar por nome, classe, raça, origem, status..."
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
        <div className="grade-cartoes">
          {filtrados.map(heroi => (
            <CharacterCard key={heroi.id} personagem={heroi} />
          ))}
        </div>
      ) : (
        <div className="estado-vazio">
          <p className="estado-vazio-icone">🔍</p>
          <p className="estado-vazio-texto">Nenhum herói encontrado para "{query}".</p>
        </div>
      )}
    </div>
  );
};

export default PersonagensPCs;
