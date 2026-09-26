import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Jogador } from "@/data/jogadores";

const PlayerCard = ({ jogador }: { jogador: Jogador }) => (
  <Card className={`cartao-zoom ${!jogador.ativo ? "cartao-esmaecido" : ""}`}>
    <CardContent className="cartao-conteudo-completo">
      <div className="jogador-linha">
        <span className="jogador-avatar">{jogador.avatar}</span>
        <div className="jogador-corpo">
          <div className="jogador-cabecalho">
            <h3 className="jogador-nome">{jogador.nome}</h3>
            <Badge variant={jogador.ativo ? "default" : "secondary"}>
              {jogador.ativo ? "Ativo" : "Ausente"}
            </Badge>
          </div>

          <p className="jogador-bio">
            {jogador.bio}
          </p>

          {jogador.personagens.length > 0 && (
            <div>
              <p className="jogador-rotulo">Personagens:</p>
              <div className="jogador-personagens">
                {jogador.personagens.map((p, i) => (
                  <Badge key={i} variant="fundo-da-grota">
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PlayerCard;
