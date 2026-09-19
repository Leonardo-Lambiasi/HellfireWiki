import { useState, useEffect, useRef, useCallback } from "react";
import PageHeader from "@/components/PageHeader";

interface CardFigurinha {
  id: number;
  nome: string;
  classe: string;
  icon: string;
  imagem: string | null;
  heroi?: boolean;
  eraheroi?: boolean;
}

const cards: CardFigurinha[] = [
  { id: 1, nome: "Iorin",           classe: "Bárbaro / Patrulheiro", icon: "🐺", imagem: "/portraits/Iorin Stenson.png",   heroi: true },
  { id: 2, nome: "Fávaro",          classe: "Mago",                  icon: "🎩", imagem: "/portraits/Favaro.png",          heroi: true },
  { id: 4, nome: "Iluvathar",       classe: "Clérigo",               icon: "🌳", imagem: "/portraits/Iluvatar.png",        heroi: true },
  { id: 7, nome: "Djakaro",         classe: "Clérigo",               icon: "⛪", imagem: "/portraits/Djakaro.jpeg",        heroi: true },
  { id: 5, nome: "Adrik",           classe: "Guerreiro",             icon: "⚒️", imagem: "/portraits/Adrik Lahabrea.png",  heroi: true },
  { id: 3, nome: "Shadow",          classe: "Ladino",                icon: "🐾", imagem: "/portraits/Shadow.png"          , eraheroi: true },
  { id: 6, nome: "Ragnar",          classe: "Patrulheiro",           icon: "🐺", imagem: "/portraits/Ragnar Wolfside.png" , eraheroi: true },
  { id: 11,nome: "Mason",           classe: "Guerreiro",             icon: "❓", imagem: "/portraits/Mason.jpeg" , eraheroi: true },
  { id: 10,nome: "Hunter",          classe: "Patrulheiro",           icon: "❓", imagem: "/portraits/Hunter.jpeg"},
  { id: 8, nome: "Aramil",          classe: "Mago",                  icon: "❓", imagem: "/portraits/Aramil.png"          },
  { id: 9, nome: "Tatiane Vesper",  classe: "Maga",                    icon: "❓", imagem: "/portraits/TatianeVesper.png"   },
];

const MIN_SCALE = 1;
const MAX_SCALE = 5;

const Lightbox = ({ card, onClose }: { card: CardFigurinha; onClose: () => void }) => {
  const [scale, setScale]   = useState(1);
  const [pos, setPos]       = useState({ x: 0, y: 0 });
  const dragging            = useRef(false);
  const lastMouse           = useRef({ x: 0, y: 0 });
  const containerRef        = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => { setScale(1); setPos({ x: 0, y: 0 }); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, reset]);

  // Wheel não-passivo para que preventDefault() bloqueie o scroll da página
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      setScale(s => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s - e.deltaY * 0.003)));
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    setPos(p => ({ x: p.x + dx, y: p.y + dy }));
  };

  const onMouseUp = () => { dragging.current = false; };

  const onDoubleClick = () => { scale > 1 ? reset() : setScale(2.5); };

  const zoomed = scale > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={() => { if (!zoomed) onClose(); }}
    >
      <div
        ref={containerRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ width: "90vw", height: "90vh", cursor: zoomed ? "grab" : "zoom-in" }}
        onClick={e => e.stopPropagation()}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onDoubleClick={onDoubleClick}
      >
        <img
          src={card.imagem!}
          alt={card.nome}
          draggable={false}
          style={{
            transform: `scale(${scale}) translate(${pos.x / scale}px, ${pos.y / scale}px)`,
            transition: dragging.current ? "none" : "transform 0.15s ease",
            maxHeight: "90vh",
            maxWidth: "90vw",
            objectFit: "contain",
            userSelect: "none",
          }}
          className="rounded-xl shadow-2xl"
        />
      </div>

      {/* Controles */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="text-xs text-white/50 bg-black/50 rounded-full px-3 py-1 select-none">
          {zoomed ? "arraste · scroll para zoom · duplo-clique para resetar" : "scroll ou duplo-clique para zoom"}
        </span>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-fundo-da-grota-orange/80 transition-colors text-lg font-bold z-10"
      >
        ✕
      </button>

      {zoomed && (
        <button
          onClick={reset}
          className="absolute top-4 right-16 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-fundo-da-grota-orange/80 transition-colors text-sm font-bold z-10"
          title="Resetar zoom (0)"
        >
          ⊡
        </button>
      )}
    </div>
  );
};

const Painel = ({ card, onClick }: { card: CardFigurinha; onClick: () => void }) => {
  // Heróis jogáveis (PCs) sempre têm borda dourada — é um selo de status, não muda com a paleta de cores do site.
  const borderClass = card.heroi
    ? "border-[hsl(var(--pc-hero-gold))] shadow-[0_0_14px_hsl(var(--pc-hero-gold)/0.25)] hover:shadow-[0_0_28px_hsl(var(--pc-hero-gold)/0.45)] hover:border-[hsl(var(--pc-hero-gold))]"
    : "border-fundo-da-grota-ash/60 hover:border-fundo-da-grota-orange/70 hover:shadow-[0_0_28px_hsl(var(--fundo-da-grota-orange)/0.25)]";

  return (
  <div
    className={`group relative rounded-xl overflow-hidden border bg-fundo-da-grota-charcoal transition-all duration-300 hover:scale-[1.02] select-none ${card.imagem ? "cursor-pointer" : "cursor-default"} ${borderClass}`}
    onClick={card.imagem ? onClick : undefined}
  >
    <div className="w-full aspect-[3/4] overflow-hidden bg-gradient-to-b from-fundo-da-grota-charcoal to-card relative">
      {card.imagem ? (
        <img
          src={card.imagem}
          alt={card.nome}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <span className="text-7xl opacity-30">{card.icon}</span>
          <span className="text-sm text-muted-foreground italic">Imagem em breve</span>
        </div>
      )}
      <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
    </div>

    <div className="absolute bottom-0 inset-x-0 p-4">
      <h3 className="font-cinzel font-bold text-fundo-da-grota-gold text-base leading-tight drop-shadow-lg">
        {card.nome}
      </h3>
      <p className="text-xs text-fundo-da-grota-ember mt-0.5 drop-shadow">{card.classe}</p>
    </div>
  </div>
  );
};

const AlbumFigurinhas = () => {
  const [aberto, setAberto] = useState<CardFigurinha | null>(null);

  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        titulo="Painel de Personagens"
        descricao="Retratos dos heróis e figuras da campanha"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map(card => (
          <Painel key={card.id} card={card} onClick={() => setAberto(card)} />
        ))}
      </div>

      {aberto && <Lightbox card={aberto} onClose={() => setAberto(null)} />}
    </div>
  );
};

export default AlbumFigurinhas;
