import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { herois, npcs } from "@/data/personagens";
import { historias } from "@/data/historias";
import { regioes } from "@/data/mapas";
import { jogadores } from "@/data/jogadores";

interface Resultado {
  id: string;
  icon: string;
  titulo: string;
  meta: string;
  url: string;
  categoria: string;
}

const buscar = (q: string): Resultado[] => {
  if (q.length < 2) return [];
  const term = q.toLowerCase();
  const out: Resultado[] = [];

  herois.forEach(h => {
    if ([h.nome, h.classe, h.raca, h.origem, h.descricao, h.status].join(" ").toLowerCase().includes(term))
      out.push({ id: `h${h.id}`, icon: h.icon, titulo: h.nome, meta: h.classe, url: "/personagens/pcs", categoria: "Herói" });
  });

  npcs.forEach(n => {
    if ([n.nome, n.classe, n.raca, n.origem, n.descricao].join(" ").toLowerCase().includes(term))
      out.push({ id: `n${n.id}`, icon: n.icon, titulo: n.nome, meta: n.origem.split("—")[0].trim(), url: "/personagens/npcs", categoria: "NPC" });
  });

  historias.forEach(h => {
    if ([h.titulo, h.resumo, h.dataIngame].join(" ").toLowerCase().includes(term))
      out.push({
        id: `hist${h.id}`,
        icon: "📖",
        titulo: h.titulo,
        meta: h.temporada === null ? "Lore Geral" : `Temporada ${h.temporada}`,
        url: "/historias",
        categoria: "História",
      });
  });

  regioes.forEach((r, i) => {
    if ([r.nome, r.descricao].join(" ").toLowerCase().includes(term))
      out.push({
        id: `r${i}`,
        icon: "📍",
        titulo: r.nome,
        meta: r.descricao.length > 55 ? r.descricao.slice(0, 55) + "…" : r.descricao,
        url: "/regioes",
        categoria: "Região",
      });
  });

  jogadores.filter(j => j.ativo).forEach(j => {
    if ([j.nome, j.bio, ...j.personagens].join(" ").toLowerCase().includes(term))
      out.push({ id: `j${j.id}`, icon: j.avatar, titulo: j.nome, meta: j.personagens.join(", "), url: "/jogadores", categoria: "Jogador" });
  });

  return out;
};

const GlobalSearch = ({ onNavigate }: { onNavigate?: () => void }) => {
  const [query, setQuery]   = useState("");
  const [aberto, setAberto] = useState(false);
  const ref                 = useRef<HTMLDivElement>(null);
  const navigate            = useNavigate();

  const resultados = buscar(query);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setAberto(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setAberto(false); setQuery(""); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const ir = (url: string) => {
    navigate(url);
    setQuery("");
    setAberto(false);
    onNavigate?.();
  };

  return (
    <div ref={ref} className="relative px-4 pb-3 pt-1">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Pesquisar no mundo..."
          value={query}
          onChange={e => { setQuery(e.target.value); setAberto(true); }}
          onFocus={() => setAberto(true)}
          className="w-full pl-9 pr-8 py-2 text-sm rounded-lg bg-background/50 border border-fundo-da-grota-ash/60 focus:border-fundo-da-grota-orange/70 focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setAberto(false); }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {aberto && query.length >= 2 && (
        <div className="absolute left-4 right-4 top-full z-50 mt-1 rounded-lg border border-fundo-da-grota-ash/60 bg-fundo-da-grota-charcoal shadow-2xl overflow-hidden max-h-72 overflow-y-auto">
          {resultados.length === 0 ? (
            <p className="px-4 py-3 text-sm text-muted-foreground italic text-center">
              Nenhum resultado para "{query}"
            </p>
          ) : (
            resultados.map(r => (
              <button
                key={r.id}
                onClick={() => ir(r.url)}
                className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-fundo-da-grota-ash/40 transition-colors text-left border-b border-fundo-da-grota-ash/20 last:border-0"
              >
                <span className="text-base shrink-0 w-6 text-center">{r.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">{r.titulo}</p>
                  <p className="text-xs text-muted-foreground truncate">{r.meta}</p>
                </div>
                <span className="text-xs text-fundo-da-grota-orange shrink-0 border border-fundo-da-grota-orange/30 px-1.5 py-0.5 rounded font-medium">
                  {r.categoria}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
