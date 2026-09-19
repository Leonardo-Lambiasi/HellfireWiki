import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface HeroInfoPanelProps {
  active: number;
  total: number;
}

const NUMERAIS_ROMANOS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const HISTORIA_PLACEHOLDER =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt " +
  "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
  "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in " +
  "voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const CLOSE_MS = 420;
const CHARS_PER_TICK = 2;
const TICK_MS = 18;

/**
 * Painel de nome + história do herói em destaque. Ao trocar de personagem, fecha por completo
 * (altura -> 0) antes de trocar o conteúdo e reabrir digitando a nova história aos poucos.
 */
const HeroInfoPanel = ({ active, total }: HeroInfoPanelProps) => {
  const [renderedIndex, setRenderedIndex] = useState(active);
  const [typedLength, setTypedLength] = useState(0);
  const [closing, setClosing] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Ao trocar a carta em destaque: fecha o painel e só troca o conteúdo depois de fechado
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (active === renderedIndex) return;

    setClosing(true);
    const t = setTimeout(() => {
      setRenderedIndex(active);
      setTypedLength(0);
      setClosing(false);
    }, CLOSE_MS);
    return () => clearTimeout(t);
  }, [active, renderedIndex]);

  // Efeito de digitação da história, caractere a caractere
  useEffect(() => {
    if (closing) return;
    if (typedLength >= HISTORIA_PLACEHOLDER.length) return;
    const t = setTimeout(
      () => setTypedLength(l => Math.min(HISTORIA_PLACEHOLDER.length, l + CHARS_PER_TICK)),
      TICK_MS
    );
    return () => clearTimeout(t);
  }, [typedLength, closing]);

  // Mede a altura do conteúdo e anima a caixa até lá (fechada = 0)
  useLayoutEffect(() => {
    if (closing) {
      setHeight(0);
      return;
    }
    if (contentRef.current) setHeight(contentRef.current.scrollHeight);
  }, [closing, typedLength, renderedIndex]);

  const nome = `Herói ${NUMERAIS_ROMANOS[renderedIndex % NUMERAIS_ROMANOS.length]}`;
  const historiaVisivel = HISTORIA_PLACEHOLDER.slice(0, typedLength);
  const terminouDeDigitar = typedLength >= HISTORIA_PLACEHOLDER.length;

  return (
    <div
      className="w-full max-w-3xl mx-auto rounded-2xl border-2 border-fundo-da-grota-ash/60 bg-fundo-da-grota-charcoal/60 overflow-hidden"
      style={{ height, transition: "height 420ms cubic-bezier(0.65, 0, 0.35, 1)" }}
      aria-live="polite"
    >
      <div ref={contentRef} className="p-3 sm:p-4">
        <div className="rounded-xl border border-fundo-da-grota-gold/40 bg-fundo-da-grota-charcoal px-4 py-2.5 mb-3">
          <h3 className="font-cinzel font-semibold text-fundo-da-grota-gold text-center text-lg tracking-wide">
            {nome}
          </h3>
        </div>

        <div className="rounded-xl border border-fundo-da-grota-ash/50 bg-fundo-da-grota-charcoal/70 px-4 py-3">
          <p className="text-xs text-fundo-da-grota-orange/70 uppercase tracking-[0.2em] mb-1.5">
            História
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {historiaVisivel}
            {!terminouDeDigitar && (
              <span className="inline-block w-[2px] h-4 align-middle bg-fundo-da-grota-orange ml-0.5 animate-pulse" />
            )}
          </p>
        </div>
      </div>

      <span className="sr-only">
        Personagem {renderedIndex + 1} de {total}
      </span>
    </div>
  );
};

export default HeroInfoPanel;
