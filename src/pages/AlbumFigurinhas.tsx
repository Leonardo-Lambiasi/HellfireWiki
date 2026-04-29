import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

interface CardFigurinha {
  id: number;
  nome: string;
  classe: string;
  icon: string;
  imagem: string | null;
  heroi?: boolean;
}

const cards: CardFigurinha[] = [
  { id: 1, nome: "Iorin",           classe: "Bárbaro / Patrulheiro", icon: "🐺", imagem: "/portraits/Iorin Stenson.png",   heroi: true },
  { id: 2, nome: "Fávaro",          classe: "Mago",                  icon: "🎩", imagem: "/portraits/Favaro.png",          heroi: true },
  { id: 3, nome: "Shadow",          classe: "Ladino",                icon: "🐾", imagem: "/portraits/Shadow.png"          },
  { id: 4, nome: "Iluvathar",       classe: "Clérigo",               icon: "🌳", imagem: "/portraits/Iluvatar.png",        heroi: true },
  { id: 5, nome: "Adrik",           classe: "Guerreiro",             icon: "⚒️", imagem: "/portraits/Adrik Lahabrea.png", heroi: true },
  { id: 6, nome: "Ragnar Wolfside", classe: "Patrulheiro",             icon: "🐺", imagem: "/portraits/Ragnar Wolfside.png" },
  { id: 7, nome: "Aramil",          classe: "",                      icon: "❓", imagem: "/portraits/Aramil.png"          },
  { id: 8, nome: "Tatiane Vesper",  classe: "",                      icon: "❓", imagem: "/portraits/TatianeVesper.png"   },
];

const Lightbox = ({ card, onClose }: { card: CardFigurinha; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={card.imagem!}
          alt={card.nome}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-hellfire-orange/80 transition-colors text-lg font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const Painel = ({ card, onClick }: { card: CardFigurinha; onClick: () => void }) => (
  <div
    className={`group relative rounded-xl overflow-hidden border bg-hellfire-charcoal transition-all duration-300 hover:scale-[1.02] select-none ${card.imagem ? "cursor-pointer" : "cursor-default"} ${card.heroi ? "border-hellfire-gold shadow-[0_0_14px_rgba(245,166,35,0.25)] hover:shadow-[0_0_28px_rgba(245,166,35,0.45)] hover:border-hellfire-gold" : "border-hellfire-ash/60 hover:border-hellfire-orange/70 hover:shadow-[0_0_28px_rgba(255,107,53,0.25)]"}`}
    onClick={card.imagem ? onClick : undefined}
  >
    <div className="w-full aspect-[3/4] overflow-hidden bg-gradient-to-b from-hellfire-charcoal to-card relative">
      {card.imagem ? (
        <img
          src={card.imagem}
          alt={card.nome}
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
      <h3 className="font-cinzel font-bold text-hellfire-gold text-base leading-tight drop-shadow-lg">
        {card.nome}
      </h3>
      <p className="text-xs text-hellfire-ember mt-0.5 drop-shadow">{card.classe}</p>
    </div>
  </div>
);

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
