import { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { regioes } from "@/data/mapas";

const Mapas = () => {
  const [query, setQuery] = useState("");

  const filtradas = regioes.filter(r => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return [r.nome, r.descricao].join(" ").toLowerCase().includes(q);
  });

  return (
    <div className="space-y-8">
      <PageHeader
        titulo="Mapas"
        descricao="Regiões e territórios das terras de Ark"
      />

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Pesquisar por nome ou descrição da região..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-hellfire-ash/60 focus:border-hellfire-orange/70 focus:outline-none text-sm text-foreground placeholder:text-muted-foreground transition-colors"
        />
      </div>

      {query.trim() && (
        <p className="text-xs text-muted-foreground -mt-4">
          {filtradas.length} {filtradas.length === 1 ? "região encontrada" : "regiões encontradas"} para "{query}"
        </p>
      )}

      {filtradas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtradas.map((regiao, index) => (
            <Card key={index} className="hover:scale-[1.02] transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-hellfire-orange" />
                  <CardTitle className="text-xl text-hellfire-gold">
                    {regiao.nome}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{regiao.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-4xl mb-4">🔍</p>
          <p className="italic">Nenhuma região encontrada para "{query}".</p>
        </div>
      )}

      <Card className="bg-card/30 border-dashed border-2 border-hellfire-ash">
        <CardContent className="p-12 text-center">
          <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">Mapas Visuais em Breve</h3>
          <p className="text-muted-foreground">
            Ilustrações e mapas detalhados das regiões serão adicionados aqui
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mapas;
