import { Flame, Shield, Sword, Scroll, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/PageHeader";
import { herois } from "@/data/personagens";

const statusColor: Record<string, string> = {
  Vivo:         "bg-green-700",
  Desconhecido: "bg-purple-700",
  MIA:          "bg-yellow-700",
  Morto:        "bg-red-700",
};

const regrasCasa = [
  { icone: "🎲", regra: "Dados de vida máximos no nível 1" },
  { icone: "✨", regra: "Inspiração concedida por roleplay notável" },
  { icone: "💀", regra: "Morte permanente com 3 death saves consecutivos falhos" },
  { icone: "🫥", regra: "Personagem ausente entra em modo background — não age, não morre" },
  { icone: "📋", regra: "Sessão zero obrigatória para novos jogadores" },
  { icone: "🎭", regra: "Metagaming moderado ok — metagaming intenso não" },
];

const Sobre = () => (
  <div className="space-y-10 animate-fade-in-up">
    <PageHeader
      titulo="Sobre"
      descricao="A campanha, o mundo e os heróis de Hellfire"
    />

    {/* ── Premissa ────────────────────────────────────────────────────────── */}
    <Card className="border-hellfire-orange/60 bg-gradient-to-br from-hellfire-charcoal via-card to-hellfire-charcoal">
      <CardContent className="pt-8 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Flame className="w-6 h-6 text-hellfire-orange" />
          <h3 className="text-xl font-cinzel font-bold text-hellfire-gold">A Campanha</h3>
        </div>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          <span className="text-hellfire-gold font-bold">Hellfire</span> é uma campanha de{" "}
          <span className="text-hellfire-orange">D&D 5ª Edição</span> ambientada em{" "}
          <span className="text-hellfire-gold font-bold">Ark</span> — um mundo de guerra, política
          e escolhas que custam caro. Heróis de histórias quebradas se encontram no momento errado,
          pelo motivo certo, e descobrem que o destino raramente pede permissão.
        </p>
        <p className="text-muted-foreground leading-relaxed italic border-l-2 border-hellfire-orange/50 pl-4">
          "Hehehe... Magia...." Krusk - Ano: 1244
        </p>
      </CardContent>
    </Card>

    {/* ── Os Heróis ───────────────────────────────────────────────────────── */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-hellfire-gold">
          <Sword className="w-5 h-5 text-hellfire-orange" />
          Os Heróis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {herois.filter(h => h.status === "Vivo").map(h => (
            <div
              key={h.nome}
              className={`flex items-center gap-3 p-3 rounded-lg border border-hellfire-ash/50 bg-hellfire-charcoal/40 hover:border-hellfire-orange/40 transition-colors ${h.status === "Morto" ? "opacity-60" : ""}`}
            >
              <span className="text-3xl">{h.icon}</span>
              <div className="min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">{h.nome}</p>
                <p className="text-xs text-muted-foreground truncate">{h.classe}</p>
              </div>
              <Badge className={`${statusColor[h.status]} text-white text-xs ml-auto shrink-0`}>
                {h.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* ── Sessões ─────────────────────────────────────────────────────────── */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-hellfire-gold">
          <BookOpen className="w-5 h-5 text-hellfire-orange" />
          Sessões
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-center">
          {[
            { label: "Frequência",  valor: "Semanal"                              },
            { label: "Horário",     valor: "Quartas à noite"                      },
            { label: "Temporadas",  valor: "5",  destaque: true                   },
            { label: "Tom",         valor: "Drama · Humor · História"             },
            { label: "Mortes",      valor: "Possíveis - Bem Possíveis"        },
          ].map(item => (
            <div key={item.label} className="flex flex-col gap-1 p-3 rounded-lg border border-hellfire-ash/30 bg-hellfire-charcoal/30">
              <span className="text-muted-foreground text-xs">{item.label}</span>
              <span className={`font-semibold ${item.destaque ? "text-hellfire-gold text-lg" : "text-foreground"}`}>
                {item.valor}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* ── Regras da Casa ──────────────────────────────────────────────────── */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-hellfire-gold">
          <Shield className="w-5 h-5 text-hellfire-orange" />
          Regras da Casa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {regrasCasa.map((r, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-hellfire-charcoal/30 border border-hellfire-ash/30">
              <span className="text-xl shrink-0">{r.icone}</span>
              <p className="text-sm text-muted-foreground leading-snug">{r.regra}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* ── Sobre esta Wiki ─────────────────────────────────────────────────── */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-hellfire-gold">
          <Scroll className="w-5 h-5 text-hellfire-orange" />
          Sobre esta Wiki
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          Esta wiki é o{" "}
          <span className="text-foreground font-semibold">registro oficial da campanha Hellfire</span>.
          Tudo aqui — heróis, NPCs, histórias, regiões — reflete os eventos canônicos da mesa. Em caso de conflito entre a wiki e a memória dos jogadores, o Mestre tem palavra final.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default Sobre;
