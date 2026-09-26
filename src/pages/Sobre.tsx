import { Flame, Shield, Sword, Scroll, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/PageHeader";
import { herois } from "@/data/personagens";

const statusColor: Record<string, string> = {
  Vivo:         "selo-status-vivo",
  Desconhecido: "selo-status-desconhecido",
  MIA:          "selo-status-mia",
  Morto:        "selo-status-morto",
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
  <div className="pagina pagina-espacada">
    <PageHeader
      titulo="Sobre"
      descricao="A campanha, o mundo e os heróis de Fundo da Grota"
    />

    {/* ── Premissa ────────────────────────────────────────────────────────── */}
    <Card className="sobre-premissa">
      <CardContent className="sobre-premissa-conteudo">
        <div className="sobre-titulo-linha">
          <Flame className="icone-grande texto-laranja" />
          <h3 className="sobre-premissa-titulo">A Campanha</h3>
        </div>
        <p className="sobre-texto-destaque">
          <span className="sobre-destaque-ouro">Fundo da Grota</span> é uma campanha de{" "}
          <span className="texto-laranja">D&D 5ª Edição</span> ambientada em{" "}
          <span className="sobre-destaque-ouro">Ark</span> — um mundo de guerra, política
          e escolhas que custam caro. Heróis de histórias quebradas se encontram no momento errado,
          pelo motivo certo, e descobrem que o destino raramente pede permissão.
        </p>
        <p className="sobre-citacao">
          "Hehehe... Magia...." Krusk - Ano: 1244
        </p>
      </CardContent>
    </Card>

    {/* ── Os Heróis ───────────────────────────────────────────────────────── */}
    <Card>
      <CardHeader>
        <CardTitle className="sobre-secao-titulo texto-ouro">
          <Sword className="icone-medio texto-laranja" />
          Os Heróis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="sobre-grade-herois">
          {herois.filter(h => h.status === "Vivo").map(h => (
            <div
              key={h.nome}
              className={`sobre-heroi ${h.status === "Morto" ? "sobre-heroi-morto" : ""}`}
            >
              <span className="sobre-heroi-icone">{h.icon}</span>
              <div className="sobre-heroi-info">
                <p className="sobre-heroi-nome">{h.nome}</p>
                <p className="sobre-heroi-classe">{h.classe}</p>
              </div>
              <Badge className={`selo-status ${statusColor[h.status]} sobre-heroi-selo`}>
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
        <CardTitle className="sobre-secao-titulo texto-ouro">
          <BookOpen className="icone-medio texto-laranja" />
          Sessões
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="sobre-grade-sessoes">
          {[
            { label: "Frequência",  valor: "Semanal"                              },
            { label: "Horário",     valor: "Quartas à noite"                      },
            { label: "Temporadas",  valor: "5",  destaque: true                   },
            { label: "Tom",         valor: "Drama · Humor · História"             },
            { label: "Mortes",      valor: "Possíveis - Bem Possíveis"        },
          ].map(item => (
            <div key={item.label} className="sobre-sessao">
              <span className="sobre-sessao-rotulo">{item.label}</span>
              <span className={`sobre-sessao-valor ${item.destaque ? "sobre-sessao-valor-destaque" : ""}`}>
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
        <CardTitle className="sobre-secao-titulo texto-ouro">
          <Shield className="icone-medio texto-laranja" />
          Regras da Casa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="sobre-grade-regras">
          {regrasCasa.map((r, i) => (
            <div key={i} className="sobre-regra">
              <span className="sobre-regra-icone">{r.icone}</span>
              <p className="sobre-regra-texto">{r.regra}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* ── Sobre esta Wiki ─────────────────────────────────────────────────── */}
    <Card>
      <CardHeader>
        <CardTitle className="sobre-secao-titulo texto-ouro">
          <Scroll className="icone-medio texto-laranja" />
          Sobre esta Wiki
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="sobre-texto">
          Esta wiki é o{" "}
          <span className="sobre-destaque-claro">registro oficial da campanha Fundo da Grota</span>.
          Tudo aqui — heróis, NPCs, histórias, regiões — reflete os eventos canônicos da mesa. Em caso de conflito entre a wiki e a memória dos jogadores, o Mestre tem palavra final.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default Sobre;
