import { useState } from "react";
import { Search, X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StoryCard from "@/components/StoryCard";
import { historias } from "@/data/historias";
import { temporadas as totalTemporadas } from "@/data/mapas";

const TEMPORADAS = Array.from({ length: totalTemporadas }, (_, i) => i + 1);

const Historias = () => {
  const [aba, setAba]     = useState<number | "lore">(1);
  const [query, setQuery] = useState("");

  const hasLoreGeral = historias.some(h => h.temporada === null);
  const buscando     = query.trim().length >= 2;

  const filtradas = buscando
    ? historias.filter(h =>
        [h.titulo, h.resumo, h.dataIngame].join(" ").toLowerCase().includes(query.toLowerCase())
      )
    : historias.filter(h =>
        aba === "lore" ? h.temporada === null : h.temporada === aba
      );

  return (
    <div className="pagina">
      <PageHeader
        titulo="Histórias"
        descricao="Os eventos e lendas que moldaram o mundo"
      />

      {/* Search */}
      <div className="campo-busca">
        <Search className="campo-busca-icone icone-pequeno" />
        <input
          type="text"
          placeholder="Pesquisar em todas as histórias e lore..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="campo-busca-input"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="campo-busca-limpar"
          >
            <X className="icone-pequeno" />
          </button>
        )}
      </div>

      {/* Tabs — ocultos durante busca */}
      {!buscando && (
        <div className="abas">
          {TEMPORADAS.map(t => (
            <button
              key={t}
              onClick={() => setAba(t)}
              className={`aba ${aba === t ? "aba-ativa" : "aba-inativa"}`}
            >
              Temporada {t}
            </button>
          ))}

          {hasLoreGeral && (
            <button
              onClick={() => setAba("lore")}
              className={`aba ${aba === "lore" ? "aba-ouro-ativa" : "aba-ouro-inativa"}`}
            >
              📜 Lore Geral
            </button>
          )}
        </div>
      )}

      {/* Contador */}
      <p className="historias-contador">
        {buscando
          ? `${filtradas.length} ${filtradas.length === 1 ? "resultado" : "resultados"} para "${query}"`
          : aba === "lore"
            ? `Lore Geral · ${filtradas.length} ${filtradas.length === 1 ? "evento" : "eventos"}`
            : `Temporada ${aba}`
        }
      </p>

      {/* Cards */}
      {filtradas.length > 0 ? (
        <div className="historias-lista">
          {filtradas.map(historia => (
            <StoryCard key={historia.id} historia={historia} />
          ))}
        </div>
      ) : (
        <div className="estado-vazio">
          <p className="estado-vazio-icone">{buscando ? "🔍" : "📖"}</p>
          <p className="estado-vazio-texto">
            {buscando
              ? `Nenhuma história encontrada para "${query}".`
              : "Nenhuma história registrada nesta temporada ainda."
            }
          </p>
        </div>
      )}


      <div className="divisor divisor-forte">
        <div className="divisor-conteudo divisor-conteudo-emoji">
          🔥
        </div>
      </div>
    </div>
  );
};

export default Historias;
