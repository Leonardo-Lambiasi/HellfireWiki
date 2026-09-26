import { useState } from "react";
import { Search, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { npcs } from "@/data/personagens";
import type { Personagem } from "@/data/personagens";

const NPCCard = ({ personagem }: { personagem: Personagem }) => (
  <Card className="cartao-zoom">
    <CardHeader>
      <CardTitle className="npc-titulo texto-ouro">{personagem.nome}</CardTitle>
      <p className="npc-origem">{personagem.origem}</p>
    </CardHeader>
    <CardContent>
      <p className="npc-descricao">
        {personagem.descricao}
      </p>
    </CardContent>
  </Card>
);

const PersonagensNPCs = () => {
  const [query, setQuery] = useState("");

  const filtrados = npcs.filter(n => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return [n.nome, n.classe, n.raca, n.origem, n.descricao].join(" ").toLowerCase().includes(q);
  });

  return (
    <div className="pagina">
      <PageHeader
        titulo="NPCs"
        descricao="Aliados, vilões e figuras que moldam o destino de Ark"
        breadcrumb="Personagens / NPCs"
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
        <div className="grade-cartoes">
          {filtrados.map(npc => (
            <NPCCard key={npc.id} personagem={npc} />
          ))}
        </div>
      ) : (
        <div className="estado-vazio">
          <p className="estado-vazio-icone">🔍</p>
          <p className="estado-vazio-texto">Nenhum NPC encontrado para "{query}".</p>
        </div>
      )}
    </div>
  );
};

export default PersonagensNPCs;
