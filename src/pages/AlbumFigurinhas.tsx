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
      className="lightbox"
      onClick={() => { if (!zoomed) onClose(); }}
    >
      <div
        ref={containerRef}
        className="lightbox-area"
        style={{ cursor: zoomed ? "grab" : "zoom-in" }}
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
          }}
          className="lightbox-imagem"
        />
      </div>

      {/* Controles */}
      <div className="lightbox-dica">
        <span className="lightbox-dica-texto">
          {zoomed ? "arraste · scroll para zoom · duplo-clique para resetar" : "scroll ou duplo-clique para zoom"}
        </span>
      </div>

      <button
        onClick={onClose}
        className="lightbox-botao lightbox-fechar"
      >
        ✕
      </button>

      {zoomed && (
        <button
          onClick={reset}
          className="lightbox-botao lightbox-resetar"
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
  const borderClass = card.heroi ? "figurinha-heroi" : "figurinha-comum";

  return (
  <div
    className={`figurinha ${card.imagem ? "figurinha-clicavel" : "figurinha-estatica"} ${borderClass}`}
    onClick={card.imagem ? onClick : undefined}
  >
    <div className="figurinha-moldura">
      {card.imagem ? (
        <img
          src={card.imagem}
          alt={card.nome}
          loading="lazy"
          className="figurinha-foto"
        />
      ) : (
        <div className="figurinha-vazia">
          <span className="figurinha-vazia-emoji">{card.icon}</span>
          <span className="figurinha-vazia-texto">Imagem em breve</span>
        </div>
      )}
      <div className="figurinha-sombra" />
    </div>

    <div className="figurinha-legenda">
      <h3 className="figurinha-nome">
        {card.nome}
      </h3>
      <p className="figurinha-classe">{card.classe}</p>
    </div>
  </div>
  );
};

const AlbumFigurinhas = () => {
  const [aberto, setAberto] = useState<CardFigurinha | null>(null);

  return (
    <div className="pagina">
      <PageHeader
        titulo="Painel de Personagens"
        descricao="Retratos dos heróis e figuras da campanha"
      />

      <div className="album-grade">
        {cards.map(card => (
          <Painel key={card.id} card={card} onClick={() => setAberto(card)} />
        ))}
      </div>

      {aberto && <Lightbox card={aberto} onClose={() => setAberto(null)} />}
    </div>
  );
};

export default AlbumFigurinhas;
