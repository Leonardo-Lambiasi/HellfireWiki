import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Flame, Users, BookOpen, Map, MapPin, Gamepad2, Info, Sparkles, ScrollText, Menu, X } from "lucide-react";
import SidebarNav from "./components/SidebarNav";
import type { NavItem } from "./components/SidebarNav";
import GlobalSearch from "./components/GlobalSearch";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import PersonagensPCs from "./pages/PersonagensPCs";
import PersonagensNPCs from "./pages/PersonagensNPCs";
import HistoriaPersonagensPCs from "./pages/HistoriaPersonagensPCs";
import HistoriaPersonagensNPCs from "./pages/HistoriaPersonagensNPCs";
import Jogadores from "./pages/Jogadores";
import Historias from "./pages/Historias";
import Regioes from "./pages/Regioes";
import MapaDeArk from "./pages/MapaDeArk";
import Sobre from "./pages/Sobre";
import AlbumFigurinhas from "./pages/AlbumFigurinhas";
import Regras from "./pages/Regras";
import PersonagensTeste from "./pages/personagens_teste";
import ThemeToggleBar from "./components/ThemeToggleBar";

const navItems: NavItem[] = [
  { title: "Home",          url: "/",           icon: Flame     },
  {
    title: "Personagens",
    icon: Users,
    subitems: [
      { title: "Heróis", url: "/personagens/pcs" },
      { title: "NPCs",   url: "/personagens/npcs" },
      { title: "Roleta (Teste)", url: "/personagens_teste" },
    ],
  },
  { title: "Álbum dos Heróis", url: "/album",       icon: Sparkles  },
  {
    title: "Histórias",
    icon: BookOpen,
    subitems: [
      { title: "Aventura",                url: "/historias" },
      { title: "Personagens dos jogadores", url: "/historias/pcs" },
      { title: "Personagens NPCs",          url: "/historias/npcs" },
    ],
  },
  { title: "Mapa de Ark",      url: "/mapa-de-ark", icon: Map       },
  { title: "Regiões",          url: "/regioes",     icon: MapPin    },
  { title: "Jogadores",        url: "/jogadores",   icon: Gamepad2  },
  { title: "Regras",           url: "/regras",      icon: ScrollText },
  { title: "Sobre",            url: "/sobre",       icon: Info      },
];

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="app">

        {/* Overlay mobile */}
        {sidebarOpen && (
          <div
            className="menu-mobile-fundo"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`barra-lateral ${sidebarOpen ? "barra-lateral-aberta" : ""}`}>
          <div className="barra-lateral-topo">
            <div>
              <h1 className="marca-titulo texto-degrade animar-brasa">
                FUNDO DA GROTA
              </h1>
              <p className="marca-subtitulo">
                D&D WIKI
              </p>
            </div>
            <button
              className="barra-lateral-fechar"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="icone-medio" />
            </button>
          </div>
          <GlobalSearch onNavigate={() => setSidebarOpen(false)} />
          <SidebarNav items={navItems} onNavigate={() => setSidebarOpen(false)} />
        </aside>

        {/* Botão hamburger mobile */}
        <button
          className="botao-menu-mobile"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="icone-medio" />
        </button>

        {/* Conteúdo principal */}
        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personagens" element={<Navigate to="/personagens/pcs" replace />} />
            <Route path="/personagens/pcs" element={<PersonagensPCs />} />
            <Route path="/personagens/npcs" element={<PersonagensNPCs />} />
            <Route path="/album" element={<AlbumFigurinhas />} />
            <Route path="/jogadores" element={<Jogadores />} />
            <Route path="/historias" element={<Historias />} />
            <Route path="/historias/pcs" element={<HistoriaPersonagensPCs />} />
            <Route path="/historias/npcs" element={<HistoriaPersonagensNPCs />} />
            <Route path="/regioes" element={<Regioes />} />
            <Route path="/mapa-de-ark" element={<MapaDeArk />} />
            <Route path="/regras" element={<Regras />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/personagens_teste" element={<PersonagensTeste />} />
          </Routes>
        </main>

        <ThemeToggleBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
