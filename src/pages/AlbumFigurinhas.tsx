import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

import FavaroImg from "@/assets/Favaro.png";
import IluvatarImg from "@/assets/Iluvatar.png";
import IorinImg from "@/assets/Iorin Stenson.png";
import RagnarImg from "@/assets/Ragnar Wolfside.png";
import ShadowImg from "@/assets/Shadow.png";
import AdrikImg from "@/assets/Adrik Lahabrea.png";

interface CardFigurinha {
  id: number;
  nome: string;
  classe: string;
  icon: string;
  imagem: string | null;
}

const cards: CardFigurinha[] = [
  { id: 1, nome: "Iorin Stenson",   classe: "Bárbaro / Patrulheiro",  icon: "🐺", imagem: IorinImg   },
  { id: 2, nome: "Fávaro",          classe: "Mago (Arcanista)",        icon: "🎩", imagem: FavaroImg  },
  { id: 3, nome: "Shadow",          classe: "Ladino (Assassino)",      icon: "🐾", imagem: ShadowImg  },
  { id: 4, nome: "Iluvathar",       classe: "Clérigo",                 icon: "🌳", imagem: IluvatarImg },
  { id: 5, nome: "Adrik Lahabrea",  classe: "Guerreiro (Lanceiro)",    icon: "⚒️", imagem: AdrikImg   },
  { id: 6, nome: "Ragnar Wolfside", classe: "Guerreiro",               icon: "🐺", imagem: RagnarImg  },
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

        {/* Botão fechar */}
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
    className={`group relative rounded-xl overflow-hidden border border-hellfire-ash/60 hover:border-hellfire-orange/70 bg-hellfire-charcoal transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,107,53,0.25)] hover:scale-[1.02] select-none ${card.imagem ? "cursor-pointer" : "cursor-default"}`}
    onClick={card.imagem ? onClick : undefined}
  >
    {/* Imagem */}
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
      {/* Gradiente base para o texto */}
      <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
    </div>

    {/* Info */}
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

      <div className="grid grid-cols-3 gap-6">
        {cards.map(card => (
          <Painel key={card.id} card={card} onClick={() => setAberto(card)} />
        ))}
      </div>

      {aberto && <Lightbox card={aberto} onClose={() => setAberto(null)} />}
    </div>
  );
};

export default AlbumFigurinhas;
