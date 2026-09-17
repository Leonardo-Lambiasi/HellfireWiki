import { Link } from "react-router-dom";
import { Swords, BookOpen, Map, Gamepad2, Info, ChevronRight, Flame, Image, ScrollText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { herois, npcs } from "@/data/personagens";
import { historias } from "@/data/historias";
import { jogadores } from "@/data/jogadores";
import { regioes, temporadas } from "@/data/mapas";

const stats = [
  { label: "Heróis",           value: herois.length,                         color: "text-fundo-da-grota-orange" },
  { label: "NPCs",             value: npcs.length,                           color: "text-fundo-da-grota-gold"   },
  { label: "Histórias",        value: historias.length,                      color: "text-fundo-da-grota-red"    },
  { label: "Jogadores ativos", value: jogadores.filter(j => j.ativo).length, color: "text-fundo-da-grota-ember"  },
  { label: "Regiões",          value: regioes.length,                        color: "text-fundo-da-grota-gold"   },
  { label: "Temporadas",       value: temporadas,                            color: "text-fundo-da-grota-orange" },
];

const navCards = [
  { title: "Personagens", description: "Heróis e NPCs que moldam o destino de Ark",  url: "/personagens/pcs", icon: Swords     },
  { title: "Álbum",       description: "Retratos dos heróis e figuras da campanha",   url: "/album",           icon: Image      },
  { title: "Histórias",   description: "Do lore de Ark às crônicas das sessões",      url: "/historias",       icon: BookOpen   },
  { title: "Regiões",     description: `${regioes.length} territórios do mundo de Ark`, url: "/regioes",       icon: Map        },
  { title: "Mapa de Ark", description: "O mapa visual do continente de Ark",           url: "/mapa-de-ark",   icon: Map        },
  { title: "Jogadores",   description: "A mesa — quem comanda os destinos de Ark",    url: "/jogadores",       icon: Gamepad2   },
  { title: "Regras",      description: "Regras da casa e mecânicas da campanha",       url: "/regras",          icon: ScrollText },
  { title: "Sobre",       description: "A campanha Fundo da Grota — premissa e convenções",  url: "/sobre",           icon: Info       },
];

const Home = () => (
  <div className="space-y-16 animate-fade-in-up">

    {/* Hero */}
    <div className="text-center pt-6">
      <p className="text-xs tracking-[0.4em] text-fundo-da-grota-gold uppercase mb-4">
        Campanha de D&D
      </p>
      <h1 className="text-7xl font-bold text-gradient-fundo-da-grota mb-6 animate-ember-glow tracking-widest">
        FUNDO DA GROTA
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
        Crônicas das chamas eternas — onde heróis são forjados e destinos queimam nas terras de Ark
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-4xl mx-auto gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-fundo-da-grota-ash/60 rounded-xl bg-card/40 backdrop-blur py-7 text-center">
            {stat.value > 0 ? (
              <p className={`text-5xl font-bold ${stat.color}`}>{stat.value}</p>
            ) : (
              <p className="text-5xl font-bold text-fundo-da-grota-ash/40">—</p>
            )}
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Flame divider */}
    <div className="relative h-px bg-gradient-to-r from-transparent via-fundo-da-grota-orange/50 to-transparent">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
        <Flame className="w-4 h-4 text-fundo-da-grota-orange" />
      </div>
    </div>

    {/* Navigation cards */}
    <div>
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
        Explorar o mundo
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {navCards.map((card) => (
          <Link key={card.url} to={card.url}>
            <Card className="group h-full hover:border-fundo-da-grota-orange/50 hover:shadow-[0_0_30px_rgba(255,107,53,0.12)] transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-fundo-da-grota-orange/10 border border-fundo-da-grota-orange/20 shrink-0 group-hover:bg-fundo-da-grota-orange/20 transition-colors">
                  <card.icon className="w-6 h-6 text-fundo-da-grota-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-0.5 group-hover:text-fundo-da-grota-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-fundo-da-grota-orange group-hover:translate-x-1 transition-all" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>

  </div>
);

export default Home;
