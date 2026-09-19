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
      <div className="min-h-screen flex relative z-10">

        {/* Overlay mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/60 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed h-full z-40 w-64
          bg-fundo-da-grota-charcoal/95 border-r-2 border-fundo-da-grota-orange
          backdrop-blur-sm shadow-[4px_0_20px_hsl(var(--fundo-da-grota-orange)/0.3)]
          overflow-y-auto transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}>
          <div className="p-6 border-b border-fundo-da-grota-ash flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient-fundo-da-grota animate-ember-glow">
                FUNDO DA GROTA
              </h1>
              <p className="text-xs text-fundo-da-grota-gold tracking-[0.3em] mt-1">
                D&D WIKI
              </p>
            </div>
            <button
              className="md:hidden text-muted-foreground hover:text-fundo-da-grota-orange"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <GlobalSearch onNavigate={() => setSidebarOpen(false)} />
          <SidebarNav items={navItems} onNavigate={() => setSidebarOpen(false)} />
        </aside>

        {/* Botão hamburger mobile */}
        <button
          className="fixed top-4 left-4 z-50 md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-fundo-da-grota-charcoal border border-fundo-da-grota-orange text-fundo-da-grota-orange shadow-lg"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Conteúdo principal */}
        <main className="md:ml-64 flex-1 p-4 md:p-8 pt-16 md:pt-8 pb-20 md:pb-16 relative z-10">
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
