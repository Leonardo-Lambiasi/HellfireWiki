import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import HeroInfoPanel from "@/components/HeroInfoPanel";

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

interface HeroCarouselProps {
  total: number;
  active: number;
  onChange: (index: number) => void;
}

/** Roleta de personagens: cartas pairando sobre uma base circular, com transição lenta ao trocar o destaque. */
const HeroCarousel = ({ total, active, onChange }: HeroCarouselProps) => {
  const cardIds = Array.from({ length: total }, (_, i) => i);

  const goTo = (i: number) => onChange(((i % total) + total) % total);
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <div className="roleta">
      <div className="roleta-palco">
        {/* Base circular de invocação — 40px mais afastada das cartas que pairam sobre ela */}
        <div className="roleta-base">
          <div className="roleta-base-brilho" />
          <div className="roleta-base-anel" />
          <div className="roleta-base-anel-interno" />
        </div>

        {/* Cartas */}
        {cardIds.map((id, i) => {
          const offset = getOffset(i, active, total);
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
                "roleta-carta",
                isFront ? "roleta-carta-frente" : "roleta-carta-lateral"
              )}
              style={{
                transform: `translate(-50%, -50%) translateX(${dir * depth.x}px) translateY(${depth.y}px) rotateY(${dir * depth.rotate}deg) scale(${depth.scale})`,
                opacity: depth.opacity,
                zIndex: 40 - abs * 10,
                filter: `blur(${depth.blur}px) brightness(${depth.dim})`,
                pointerEvents: abs <= 2 ? "auto" : "none",
              }}
            >
              <div className="roleta-carta-moldura" />
              <span className="roleta-canto roleta-canto-sup-esq" />
              <span className="roleta-canto roleta-canto-sup-dir" />
              <span className="roleta-canto roleta-canto-inf-esq" />
              <span className="roleta-canto roleta-canto-inf-dir" />
              <span className="roleta-carta-titulo">
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
          className="roleta-seta roleta-seta-esquerda"
        >
          <ChevronLeft className="icone-grande" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próximo personagem"
          className="roleta-seta roleta-seta-direita"
        >
          <ChevronRight className="icone-grande" />
        </button>
      </div>

      <span className="roleta-contador">
        {active + 1} / {total}
      </span>

      <HeroInfoPanel active={active} total={total} />
    </div>
  );
};

export default HeroCarousel;
