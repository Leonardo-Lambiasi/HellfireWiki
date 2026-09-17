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
    <Card className="w-full max-w-full overflow-hidden">
      <CardContent className="p-6 space-y-4 w-full max-w-full">
        <div className="flex items-center justify-between">
          <h3 className="font-cinzel font-semibold text-fundo-da-grota-gold">{titulo}</h3>
          <span className="text-xs text-muted-foreground">
            {index + 1} / {personagens.length}
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-6 w-full min-w-0">
          <button
            type="button"
            onClick={anterior}
            aria-label="Personagem anterior"
            className="shrink-0 p-2 rounded-full border border-fundo-da-grota-ash/60 text-muted-foreground hover:border-fundo-da-grota-orange/60 hover:text-fundo-da-grota-orange transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 min-w-0 max-w-xs flex flex-col items-center gap-3 text-center">
            <CharacterImageSlot imagem={atual.imagem} nome={atual.nome} icon={atual.icon} size="lg" />
            <div className="min-w-0 max-w-full">
              <p className="text-lg font-cinzel font-semibold text-fundo-da-grota-gold truncate">{atual.nome}</p>
              <p className="text-sm text-muted-foreground truncate">{atual.classe} · {atual.raca}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={proximo}
            aria-label="Próximo personagem"
            className="shrink-0 p-2 rounded-full border border-fundo-da-grota-ash/60 text-muted-foreground hover:border-fundo-da-grota-orange/60 hover:text-fundo-da-grota-orange transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Lista deslizável para pular direto a um personagem — largura limitada, rola de lado para o resto */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 w-full max-w-md mx-auto">
          {personagens.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition-colors whitespace-nowrap ${
                i === index
                  ? "border-fundo-da-grota-orange bg-fundo-da-grota-orange/20 text-fundo-da-grota-gold"
                  : "border-fundo-da-grota-ash/60 text-muted-foreground hover:border-fundo-da-grota-orange/50 hover:text-foreground"
              }`}
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
