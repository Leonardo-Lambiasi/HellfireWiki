import { useState, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, Maximize, Minimize } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const MIN = 0.5, MAX = 5, STEP = 0.2;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// Zoom keeping point (mx, my) fixed relative to container center
const zoomAt = (
  mx: number, my: number,
  t: { scale: number; x: number; y: number },
  next: number
) => ({
  scale: next,
  x: mx - (mx - t.x) * (next / t.scale),
  y: my - (my - t.y) * (next / t.scale),
});

type T = { scale: number; x: number; y: number };

const MapaDeArk = () => {
  const [t, setT]               = useState<T>({ scale: 1, x: 0, y: 0 });
  const [fullscreen, setFs]     = useState(false);
  const [loaded, setLoaded]     = useState(false);
  const [imgError, setImgError] = useState(false);
  const [smooth, setSmooth]     = useState(false);
  const [hint, setHint]         = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragging     = useRef(false);
  const origin       = useRef({ x: 0, y: 0 });
  const pinchRef     = useRef<number | null>(null);

  // Wheel zoom centered on cursor
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const fn = (e: WheelEvent) => {
      e.preventDefault();
      const r  = el.getBoundingClientRect();
      const mx = e.clientX - r.left - r.width  / 2;
      const my = e.clientY - r.top  - r.height / 2;
      setSmooth(false);
      setT(prev => {
        const next = clamp(prev.scale + (e.deltaY < 0 ? STEP : -STEP), MIN, MAX);
        return zoomAt(mx, my, prev, next);
      });
    };
    el.addEventListener("wheel", fn, { passive: false });
    return () => el.removeEventListener("wheel", fn);
  }, []);

  // Fullscreen sync
  useEffect(() => {
    const fn = () => setFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", fn);
    return () => document.removeEventListener("fullscreenchange", fn);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      setHint(false);
      if (e.key === "+" || e.key === "=") {
        setSmooth(true);
        setT(p => ({ ...p, scale: clamp(p.scale + STEP, MIN, MAX) }));
      } else if (e.key === "-") {
        setSmooth(true);
        setT(p => ({ ...p, scale: clamp(p.scale - STEP, MIN, MAX) }));
      } else if (e.key === "r" || e.key === "R") {
        setSmooth(true);
        setT({ scale: 1, x: 0, y: 0 });
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) containerRef.current?.requestFullscreen();
        else document.exitFullscreen();
      } else if (e.key === "ArrowLeft")  setT(p => ({ ...p, x: p.x + 60 }));
      else if   (e.key === "ArrowRight") setT(p => ({ ...p, x: p.x - 60 }));
      else if   (e.key === "ArrowUp")    setT(p => ({ ...p, y: p.y + 60 }));
      else if   (e.key === "ArrowDown")  setT(p => ({ ...p, y: p.y - 60 }));
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  // Auto-hide hint
  useEffect(() => {
    const id = setTimeout(() => setHint(false), 4500);
    return () => clearTimeout(id);
  }, []);

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    dragging.current = true;
    setSmooth(false);
    setHint(false);
    origin.current = { x: e.clientX - t.x, y: e.clientY - t.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setT(p => ({ ...p, x: e.clientX - origin.current.x, y: e.clientY - origin.current.y }));
  };
  const stopDrag = () => { dragging.current = false; };

  // Touch pinch + pan
  const onTouchStart = (e: React.TouchEvent) => {
    setHint(false);
    if (e.touches.length === 2) {
      pinchRef.current = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    } else {
      dragging.current = true;
      origin.current = { x: e.touches[0].clientX - t.x, y: e.touches[0].clientY - t.y };
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2 && pinchRef.current !== null) {
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = d / pinchRef.current;
      setT(p => ({ ...p, scale: clamp(p.scale * factor, MIN, MAX) }));
      pinchRef.current = d;
    } else if (e.touches.length === 1 && dragging.current) {
      setT(p => ({ ...p, x: e.touches[0].clientX - origin.current.x, y: e.touches[0].clientY - origin.current.y }));
    }
  };
  const onTouchEnd = () => { dragging.current = false; pinchRef.current = null; };

  const doZoom = (delta: number) => {
    setSmooth(true);
    setT(p => ({ ...p, scale: clamp(p.scale + delta, MIN, MAX) }));
  };
  const doReset = () => { setSmooth(true); setT({ scale: 1, x: 0, y: 0 }); };
  const toggleFs = async () => {
    if (!document.fullscreenElement) await containerRef.current?.requestFullscreen();
    else await document.exitFullscreen();
  };

  const atMin = t.scale <= MIN + 0.01;
  const atMax = t.scale >= MAX - 0.01;

  const btnClass = (disabled = false) =>
    `mapa-botao ${disabled ? "mapa-botao-desativado" : "mapa-botao-ativo"}`;

  const Controls = ({ overlay = false }) => (
    <div className="mapa-controles">
      <button onClick={() => doZoom(STEP)}  disabled={atMax} className={btnClass(atMax)} title="Zoom in  (+)"><ZoomIn    className="icone-pequeno" /></button>
      <button onClick={() => doZoom(-STEP)} disabled={atMin} className={btnClass(atMin)} title="Zoom out (-)"><ZoomOut   className="icone-pequeno" /></button>
      <button onClick={doReset}                               className={btnClass()}      title="Resetar  (R)"><RotateCcw className="icone-pequeno" /></button>
      <span className="mapa-zoom-valor">
        {Math.round(t.scale * 100)}%
      </span>
      {overlay && (
        <button onClick={toggleFs} className={btnClass()} title="Sair (F)">
          <Minimize className="icone-pequeno" />
        </button>
      )}
    </div>
  );

  return (
    <div className="pagina pagina-compacta">
      <PageHeader
        titulo="Mapa de Ark"
        descricao="O mundo conhecido — continentes, reinos e fronteiras"
      />

      {/* Toolbar */}
      <div className="mapa-barra">
        <Controls />
        <div className="mapa-espaco" />
        <button onClick={toggleFs} className={btnClass()} title={fullscreen ? "Sair da tela cheia (F)" : "Tela cheia (F)"}>
          {fullscreen ? <Minimize className="icone-pequeno" /> : <Maximize className="icone-pequeno" />}
        </button>
      </div>

      {/* Map container */}
      <div
        ref={containerRef}
        className="mapa-area"
        style={{ height: fullscreen ? "100vh" : "calc(100vh - 220px)" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >

        {/* Loading skeleton */}
        {!loaded && !imgError && (
          <div className="mapa-carregando">
            <div className="mapa-spinner" />
            <p className="mapa-carregando-texto">Carregando mapa…</p>
          </div>
        )}

        {/* Error state */}
        {imgError && (
          <div className="mapa-erro">
            <div className="mapa-erro-corpo">
              <p className="mapa-erro-icone">🗺️</p>
              <p className="mapa-erro-texto">Não foi possível carregar o mapa.</p>
              <p className="mapa-erro-dica">Verifique se o arquivo existe em <code>public/mapas/</code></p>
            </div>
          </div>
        )}

        {/* Hint overlay */}
        {hint && loaded && (
          <div className="mapa-dica">
            <div className="mapa-dica-caixa">
              <span>🖱 Scroll · zoom</span>
              <span className="mapa-dica-separador">|</span>
              <span>✋ Arrastar · mover</span>
              <span className="mapa-dica-separador">|</span>
              <span>⌨ +/− · R · F</span>
            </div>
          </div>
        )}

        {/* Zoom limit indicators */}
        {atMax && (
          <div className="mapa-aviso">
            <span className="mapa-aviso-etiqueta mapa-aviso-maximo">
              Zoom máximo
            </span>
          </div>
        )}
        {atMin && (
          <div className="mapa-aviso">
            <span className="mapa-aviso-etiqueta mapa-aviso-minimo">
              Zoom mínimo
            </span>
          </div>
        )}

        {/* Fullscreen overlay controls */}
        {fullscreen && (
          <div className="mapa-controles-tela-cheia">
            <Controls overlay />
          </div>
        )}

        <img
          src="/mapas/Reinos do norte.jpeg"
          alt="Mapa de Ark"
          draggable={false}
          className="mapa-imagem"
          style={{
            transform: `translate(${t.x}px, ${t.y}px) scale(${t.scale})`,
            transformOrigin: "center center",
            transition: smooth ? "transform 0.22s cubic-bezier(0.25,0.46,0.45,0.94)" : "none",
            opacity: loaded ? 1 : 0,
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setImgError(true)}
        />
      </div>

      {/* Keyboard shortcuts legend */}
      {!fullscreen && loaded && (
        <p className="mapa-legenda">
          <kbd className="mapa-tecla">+</kbd> zoom in &nbsp;
          <kbd className="mapa-tecla">-</kbd> zoom out &nbsp;
          <kbd className="mapa-tecla">R</kbd> reset &nbsp;
          <kbd className="mapa-tecla">F</kbd> tela cheia &nbsp;
          <kbd className="mapa-tecla">↑↓←→</kbd> mover
        </p>
      )}
    </div>
  );
};

export default MapaDeArk;
