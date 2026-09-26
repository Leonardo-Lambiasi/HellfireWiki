import { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { regioes } from "@/data/mapas";

const Regioes = () => {
  const [query, setQuery] = useState("");

  const filtradas = regioes.filter(r => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return [r.nome, r.descricao].join(" ").toLowerCase().includes(q);
  });

  return (
    <div className="pagina pagina-sem-animacao">
      <PageHeader
        titulo="Regiões"
        descricao="Territórios e localidades das terras de Ark"
      />

      <div className="campo-busca">
        <Search className="campo-busca-icone icone-pequeno" />
        <input
          type="text"
          placeholder="Pesquisar por nome ou descrição da região..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="campo-busca-input campo-busca-input-sem-botao"
        />
      </div>

      {query.trim() && (
        <p className="contador-resultados">
          {filtradas.length} {filtradas.length === 1 ? "região encontrada" : "regiões encontradas"} para "{query}"
        </p>
      )}

      {filtradas.length > 0 ? (
        <div className="grade-cartoes">
          {filtradas.map((regiao, index) => (
            <Card key={index} className="cartao-zoom">
              <CardHeader>
                <div className="regiao-titulo-linha">
                  <MapPin className="icone-grande texto-laranja" />
                  <CardTitle className="regiao-nome texto-ouro">
                    {regiao.nome}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="regiao-descricao">{regiao.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="estado-vazio">
          <p className="estado-vazio-icone">🔍</p>
          <p className="estado-vazio-texto">Nenhuma região encontrada para "{query}".</p>
        </div>
      )}

    </div>
  );
};

export default Regioes;
