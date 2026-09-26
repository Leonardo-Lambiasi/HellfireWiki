import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Historia } from "@/data/historias";
import { getPersonagemRota } from "@/data/personagens";

const StoryCard = ({ historia }: { historia: Historia }) => (
  <Card className={`cartao-historia ${historia.emAndamento ? "cartao-historia-andamento" : "cartao-historia-concluida"}`}>
    <CardHeader>
      <div className="historia-topo">
        <div className="historia-titulo-linha">
          <CardTitle className="historia-titulo texto-ouro">
            {historia.titulo}
          </CardTitle>
          {historia.emAndamento && (
            <span className="historia-andamento">
              🔨 Em Andamento
            </span>
          )}
        </div>
        <span className="historia-data">
          {historia.dataIngame}
        </span>
      </div>
    </CardHeader>

    <CardContent className="historia-conteudo">
      <p className="historia-resumo">
        {historia.resumo}
      </p>

      {historia.personagens && historia.personagens.length > 0 && (
        <div className="historia-personagens">
          <span className="historia-personagens-rotulo">Personagens:</span>
          {historia.personagens.map(p => (
            <Link
              key={p.nome}
              to={getPersonagemRota(p.nome)}
              className="historia-personagem-link"
            >
              {p.emoji} {p.nome}
            </Link>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export default StoryCard;
