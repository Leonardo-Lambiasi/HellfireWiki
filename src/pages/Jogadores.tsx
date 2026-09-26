import PageHeader from "@/components/PageHeader";
import PlayerCard from "@/components/PlayerCard";
import { jogadores } from "@/data/jogadores";

const Jogadores = () => (
  <div className="pagina">
    <PageHeader
      titulo="Jogadores"
      descricao="Os aventureiros do mundo real por trás dos heróis de Ark"
    />
    <div className="grade-cartoes-lg">
      {jogadores.map(jogador => (
        <PlayerCard key={jogador.id} jogador={jogador} />
      ))}
    </div>
  </div>
);

export default Jogadores;
