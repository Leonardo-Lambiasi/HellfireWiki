import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { regioes } from "@/data/mapas";

const Mapas = () => (
  <div className="space-y-8">
    <PageHeader
      titulo="Mapas"
      descricao="Regiões e territórios das terras de Ark"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {regioes.map((regiao, index) => (
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

export default Mapas;
