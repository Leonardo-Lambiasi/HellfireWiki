import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TOTAL_CARDS = 7;
const CARD_IDS = Array.from({ length: TOTAL_CARDS }, (_, i) => i);

const TRANSITION =
  "transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 800ms ease, filter 800ms ease";

/** Aparência de cada carta conforme a distância (0 = em foco, 1/2 = nas laterais, 3+ = fora de vista). */
const DEPTH_STYLES = [
  { x: 0, y: -34, scale: 1, rotate: 0, opacity: 1, blur: 0, dim: 1 },
  { x: 170, y: 14, scale: 0.76, rotate: 30, opacity: 0.8, blur: 0.5, dim: 0.65 },
  { x: 300, y: 36, scale: 0.54, rotate: 42, opacity: 0.35, blur: 1.5, dim: 0.5 },
  { x: 380, y: 46, scale: 0.4, rotate: 48, opacity: 0, blur: 2, dim: 0.4 },
] as const;

function getOffset(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

/** Roleta de personagens: cartas pairando sobre uma base circular, com transição lenta ao trocar o destaque. */
const HeroCarousel = () => {
  const [active, setActive] = useState(0);

  const goTo = (i: number) => setActive(((i % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS);
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <div className="relative w-full flex flex-col items-center gap-4 overflow-x-hidden">
      <div className="relative w-full max-w-3xl h-[480px] sm:h-[600px]" style={{ perspective: "1400px" }}>
        {/* Base circular de invocação — 40px mais afastada das cartas que pairam sobre ela */}
        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 translate-y-10 w-[300px] h-[100px] sm:w-[420px] sm:h-[130px]">
          <div
            className="absolute inset-0 rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--fundo-da-grota-orange) / 0.3) 0%, hsl(var(--fundo-da-grota-gold) / 0.14) 45%, transparent 75%)",
              filter: "blur(3px)",
            }}
          />
          <div className="absolute inset-0 rounded-[50%] border border-fundo-da-grota-gold/30 animate-[spin_26s_linear_infinite]" />
          <div className="absolute inset-6 rounded-[50%] border border-dashed border-fundo-da-grota-orange/25 animate-[spin_18s_linear_infinite_reverse]" />
        </div>

        {/* Cartas */}
        {CARD_IDS.map((id, i) => {
          const offset = getOffset(i, active, TOTAL_CARDS);
          const abs = Math.min(Math.abs(offset), DEPTH_STYLES.length - 1);
          const dir = Math.sign(offset);
          const depth = DEPTH_STYLES[abs];
          const isFront = abs === 0;

          return (
            <button
              key={id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={isFront ? "Personagem em destaque" : `Trazer personagem ${i + 1} para o destaque`}
              tabIndex={abs <= 2 ? 0 : -1}
              className={cn(
                "absolute left-1/2 top-1/2 w-[13.5rem] sm:w-[16.5rem] aspect-[5/7] rounded-2xl border-2 flex items-center justify-center",
                isFront
                  ? "border-fundo-da-grota-gold bg-gradient-to-b from-fundo-da-grota-charcoal via-card to-fundo-da-grota-charcoal shadow-[0_0_45px_rgba(245,166,35,0.45)] cursor-default"
                  : "border-fundo-da-grota-ash/50 bg-fundo-da-grota-charcoal/85 cursor-pointer hover:border-fundo-da-grota-orange/60"
              )}
              style={{
                transform: `translate(-50%, -50%) translateX(${dir * depth.x}px) translateY(${depth.y}px) rotateY(${dir * depth.rotate}deg) scale(${depth.scale})`,
                opacity: depth.opacity,
                zIndex: 40 - abs * 10,
                filter: `blur(${depth.blur}px) brightness(${depth.dim})`,
                transition: TRANSITION,
                pointerEvents: abs <= 2 ? "auto" : "none",
              }}
            >
              <div className="absolute inset-2 rounded-xl border border-fundo-da-grota-gold/20" />
              <span className="absolute top-3 left-3 w-1.5 h-1.5 rotate-45 bg-fundo-da-grota-gold/30" />
              <span className="absolute top-3 right-3 w-1.5 h-1.5 rotate-45 bg-fundo-da-grota-gold/30" />
              <span className="absolute bottom-3 left-3 w-1.5 h-1.5 rotate-45 bg-fundo-da-grota-gold/30" />
              <span className="absolute bottom-3 right-3 w-1.5 h-1.5 rotate-45 bg-fundo-da-grota-gold/30" />
              <span className="font-cinzel font-semibold text-fundo-da-grota-gold text-base sm:text-lg tracking-wide drop-shadow">
                Herói
              </span>
            </button>
          );
        })}

        {/* Setas de navegação */}
        <button
          type="button"
          onClick={prev}
          aria-label="Personagem anterior"
          className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center rounded-full border-2 border-fundo-da-grota-orange/60 bg-fundo-da-grota-charcoal/90 text-fundo-da-grota-orange transition-all duration-300 hover:border-fundo-da-grota-gold hover:text-fundo-da-grota-gold hover:shadow-[0_0_25px_rgba(245,166,35,0.5)]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próximo personagem"
          className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center rounded-full border-2 border-fundo-da-grota-orange/60 bg-fundo-da-grota-charcoal/90 text-fundo-da-grota-orange transition-all duration-300 hover:border-fundo-da-grota-gold hover:text-fundo-da-grota-gold hover:shadow-[0_0_25px_rgba(245,166,35,0.5)]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <span className="text-xs text-muted-foreground tracking-wide">
        {active + 1} / {TOTAL_CARDS}
      </span>
    </div>
  );
};

export default HeroCarousel;
