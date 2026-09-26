import { Link } from "react-router-dom";
import { Swords, BookOpen, Map, Gamepad2, Info, ChevronRight, Flame, Image, ScrollText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { herois, npcs } from "@/data/personagens";
import { historias } from "@/data/historias";
import { jogadores } from "@/data/jogadores";
import { regioes, temporadas } from "@/data/mapas";

const stats = [
  { label: "Heróis",           value: herois.length,                         color: "home-estatistica-numero-laranja" },
  { label: "NPCs",             value: npcs.length,                           color: "home-estatistica-numero-ouro" },
  { label: "Histórias",        value: historias.length,                      color: "home-estatistica-numero-vermelho" },
  { label: "Jogadores ativos", value: jogadores.filter(j => j.ativo).length, color: "home-estatistica-numero-brasa" },
  { label: "Regiões",          value: regioes.length,                        color: "home-estatistica-numero-ouro" },
  { label: "Temporadas",       value: temporadas,                            color: "home-estatistica-numero-laranja" },
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
  <div className="home">

    {/* Hero */}
    <div className="home-topo">
      <p className="home-sobretitulo">
        Campanha de D&D
      </p>
      <h1 className="home-titulo texto-degrade animar-brasa">
        FUNDO DA GROTA
      </h1>
      <p className="home-descricao">
        Crônicas das chamas eternas — onde heróis são forjados e destinos queimam nas terras de Ark
      </p>

      {/* Stats grid */}
      <div className="home-estatisticas">
        {stats.map((stat) => (
          <div key={stat.label} className="home-estatistica">
            {stat.value > 0 ? (
              <p className={`home-estatistica-numero ${stat.color}`}>{stat.value}</p>
            ) : (
              <p className="home-estatistica-numero home-estatistica-numero-vazio">—</p>
            )}
            <p className="home-estatistica-rotulo">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Flame divider */}
    <div className="divisor">
      <div className="divisor-conteudo">
        <Flame className="icone-pequeno texto-laranja" />
      </div>
    </div>

    {/* Navigation cards */}
    <div>
      <p className="home-secao-titulo">
        Explorar o mundo
      </p>
      <div className="home-atalhos">
        {navCards.map((card) => (
          <Link key={card.url} to={card.url}>
            <Card className="atalho">
              <CardContent className="atalho-conteudo">
                <div className="atalho-icone">
                  <card.icon className="icone-grande texto-laranja" />
                </div>
                <div className="atalho-texto">
                  <h3 className="atalho-titulo">
                    {card.title}
                  </h3>
                  <p className="atalho-descricao">
                    {card.description}
                  </p>
                </div>
                <ChevronRight className="atalho-seta" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>

  </div>
);

export default Home;
