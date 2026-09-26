import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CharacterImageSlot from "@/components/CharacterImageSlot";
import type { Personagem } from "@/data/personagens";

interface CharacterCarouselProps {
  titulo: string;
  personagens: Personagem[];
}

/** Vitrine deslizável de personagens — setas para navegar + lista rápida para pular direto. */
const CharacterCarousel = ({ titulo, personagens }: CharacterCarouselProps) => {
  const [index, setIndex] = useState(0);

  if (personagens.length === 0) return null;

  const atual = personagens[index];
  const anterior = () => setIndex(i => (i - 1 + personagens.length) % personagens.length);
  const proximo = () => setIndex(i => (i + 1) % personagens.length);

  return (
    <Card className="carrossel">
      <CardContent className="carrossel-conteudo">
        <div className="carrossel-topo">
          <h3 className="carrossel-titulo texto-ouro">{titulo}</h3>
          <span className="carrossel-contador">
            {index + 1} / {personagens.length}
          </span>
        </div>

        <div className="carrossel-palco">
          <button
            type="button"
            onClick={anterior}
            aria-label="Personagem anterior"
            className="carrossel-seta"
          >
            <ChevronLeft className="icone-medio" />
          </button>

          <div className="carrossel-destaque">
            <CharacterImageSlot imagem={atual.imagem} nome={atual.nome} icon={atual.icon} size="lg" />
            <div className="carrossel-identificacao">
              <p className="carrossel-nome texto-ouro">{atual.nome}</p>
              <p className="carrossel-detalhe">{atual.classe} · {atual.raca}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={proximo}
            aria-label="Próximo personagem"
            className="carrossel-seta"
          >
            <ChevronRight className="icone-medio" />
          </button>
        </div>

        {/* Lista deslizável para pular direto a um personagem — largura limitada, rola de lado para o resto */}
        <div className="carrossel-lista">
          {personagens.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`carrossel-chip ${i === index ? "chip-ativo" : "chip-inativo"}`}
            >
              <span>{p.icon}</span>
              {p.nome}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCarousel;
