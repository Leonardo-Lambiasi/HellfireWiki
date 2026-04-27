import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import StoryCard from "@/components/StoryCard";
import { historias } from "@/data/historias";
import { temporadas as totalTemporadas } from "@/data/mapas";

const TEMPORADAS = Array.from({ length: totalTemporadas }, (_, i) => i + 1);

const Historias = () => {
  const hasLoreGeral = historias.some(h => h.temporada === null);

  const [aba, setAba] = useState<number | "lore">(1);

  const filtradas = historias.filter(h =>
    aba === "lore" ? h.temporada === null : h.temporada === aba
  );

  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        titulo="Histórias"
        descricao="Os eventos e lendas que moldaram o mundo"
      />

      {/* Tabs de temporadas */}
      <div className="flex flex-wrap gap-2">
        {TEMPORADAS.map(t => (
          <button
            key={t}
            onClick={() => setAba(t)}
            className={`px-5 py-2 rounded-lg border text-sm font-cinzel font-semibold transition-all ${
              aba === t
                ? "border-hellfire-orange bg-hellfire-orange/20 text-hellfire-gold shadow-[0_0_12px_rgba(255,107,53,0.3)]"
                : "border-hellfire-ash/60 text-muted-foreground hover:border-hellfire-orange/50 hover:text-foreground"
            }`}
          >
            Temporada {t}
          </button>
        ))}

        {hasLoreGeral && (
          <button
            onClick={() => setAba("lore")}
            className={`px-5 py-2 rounded-lg border text-sm font-cinzel font-semibold transition-all ${
              aba === "lore"
                ? "border-hellfire-gold bg-hellfire-gold/10 text-hellfire-gold shadow-[0_0_12px_rgba(255,200,50,0.2)]"
                : "border-hellfire-ash/60 text-muted-foreground hover:border-hellfire-gold/50 hover:text-foreground"
            }`}
          >
            📜 Lore Geral
          </button>
        )}
      </div>

      {/* Descrição da aba */}
      <p className="text-xs tracking-widest text-muted-foreground uppercase">
        {aba === "lore"
          ? "Eventos históricos e lendas fora das temporadas"
          : `Eventos registrados na Temporada ${aba}`}
        {" · "}
        {filtradas.length} {filtradas.length === 1 ? "evento" : "eventos"}
      </p>

      {/* Cards */}
      {filtradas.length > 0 ? (
        <div className="space-y-6">
          {filtradas.map(historia => (
            <StoryCard key={historia.id} historia={historia} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-4xl mb-4">📖</p>
          <p className="italic">Nenhuma história registrada nesta temporada ainda.</p>
        </div>
      )}

      <div className="relative h-px bg-gradient-to-r from-transparent via-hellfire-orange to-transparent my-12">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-2xl">
          🔥
        </div>
      </div>

      <div className="text-center text-muted-foreground">
        <p className="italic">
          {historias.length} eventos registrados nos Anais da campanha
        </p>
      </div>
    </div>
  );
};

export default Historias;
