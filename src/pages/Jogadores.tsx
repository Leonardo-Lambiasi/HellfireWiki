import PageHeader from "@/components/PageHeader";
import PlayerCard from "@/components/PlayerCard";
import { jogadores } from "@/data/jogadores";

const Jogadores = () => (
  <div className="space-y-8 animate-fade-in-up">
    <PageHeader
      titulo="Jogadores"
      descricao="Os aventureiros do mundo real por trás dos heróis de Ark"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {jogadores.map(jogador => (
        <PlayerCard key={jogador.id} jogador={jogador} />
      ))}
    </div>
  </div>
);

export default Jogadores;
