import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Personagem } from "@/data/personagens";

function getClasseStyle(classe: string): string {
  const c = classe.toLowerCase();
  if (c.includes("clér"))              return "bg-amber-600/80    text-amber-50    border-amber-500/60";
  if (c.includes("mago") || c.includes("maga")) return "bg-violet-700/80 text-violet-100  border-violet-500/60";
  if (c.includes("bruxo"))             return "bg-indigo-800/80   text-indigo-200  border-indigo-600/60";
  if (c.includes("bruxa"))             return "bg-emerald-900/80  text-emerald-200 border-emerald-700/60";
  if (c.includes("feitiç"))            return "bg-pink-700/80     text-pink-100    border-pink-500/60";
  if (c.includes("guerr"))             return "bg-red-700/80      text-red-100     border-red-600/60";
  if (c.includes("bárb") || c.includes("barb")) return "bg-orange-700/80 text-orange-100 border-orange-600/60";
  if (c.includes("ladino"))            return "bg-teal-700/80     text-teal-100    border-teal-600/60";
  if (c.includes("patrulh") || c.includes("ranger")) return "bg-green-700/80 text-green-100 border-green-600/60";
  if (c.includes("artif"))             return "bg-cyan-700/80     text-cyan-100    border-cyan-600/60";
  if (c.includes("xamã") || c.includes("xama")) return "bg-lime-800/80 text-lime-100 border-lime-700/60";
  if (c.includes("nobre"))             return "bg-yellow-600/80   text-yellow-50   border-yellow-500/60";
  if (c.includes("morto-vivo"))        return "bg-slate-700/80    text-slate-200   border-slate-500/60";
  return                                      "bg-zinc-700/80     text-zinc-200    border-zinc-600/60";
}

function getStatusColor(status: string): string {
  switch (status) {
    case "Vivo":         return "bg-green-700";
    case "MIA":          return "bg-yellow-700";
    case "Morto":        return "bg-red-700";
    case "Aliado":       return "bg-blue-700";
    case "Desconhecido": return "bg-purple-700";
    default:             return "bg-gray-700";
  }
}

const CharacterCard = ({ personagem }: { personagem: Personagem }) => (
  <Card className="hover:scale-[1.02] transition-all">
    <CardHeader>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <span className="text-5xl">{personagem.icon}</span>
          <div>
            <CardTitle className="text-2xl text-hellfire-gold">
              {personagem.nome}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{personagem.raca}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <Badge variant="outline" className={getClasseStyle(personagem.classe)}>
            {personagem.classe}
          </Badge>
          <Badge className={`${getStatusColor(personagem.status)} text-white text-xs`}>
            {personagem.status}
          </Badge>
        </div>
      </div>
    </CardHeader>

    <CardContent>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {personagem.descricao}
      </p>

      <div className="pt-4 border-t border-border text-sm text-muted-foreground">
        <strong>Origem:</strong> {personagem.origem}
      </div>
    </CardContent>
  </Card>
);

export default CharacterCard;
