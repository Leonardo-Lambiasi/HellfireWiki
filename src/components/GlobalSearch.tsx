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
    <div ref={ref} className="busca-global">
      <div className="campo-busca campo-busca-compacto">
        <Search className="campo-busca-icone icone-pequeno" />
        <input
          type="text"
          placeholder="Pesquisar no mundo..."
          value={query}
          onChange={e => { setQuery(e.target.value); setAberto(true); }}
          onFocus={() => setAberto(true)}
          className="campo-busca-input"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setAberto(false); }}
            className="campo-busca-limpar"
          >
            <X className="icone-mini" />
          </button>
        )}
      </div>

      {aberto && query.length >= 2 && (
        <div className="busca-global-resultados">
          {resultados.length === 0 ? (
            <p className="busca-global-vazio">
              Nenhum resultado para "{query}"
            </p>
          ) : (
            resultados.map(r => (
              <button
                key={r.id}
                onClick={() => ir(r.url)}
                className="busca-global-item"
              >
                <span className="busca-global-icone">{r.icon}</span>
                <div className="busca-global-texto">
                  <p className="busca-global-titulo">{r.titulo}</p>
                  <p className="busca-global-meta">{r.meta}</p>
                </div>
                <span className="busca-global-categoria">
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
