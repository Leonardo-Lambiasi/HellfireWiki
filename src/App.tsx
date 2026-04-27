import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Flame, Users, BookOpen, Map, Gamepad2, Info, Sparkles, ScrollText } from "lucide-react";
import SidebarNav from "./components/SidebarNav";
import type { NavItem } from "./components/SidebarNav";
import Home from "./pages/Home";
import PersonagensPCs from "./pages/PersonagensPCs";
import PersonagensNPCs from "./pages/PersonagensNPCs";
import Jogadores from "./pages/Jogadores";
import Historias from "./pages/Historias";
import Mapas from "./pages/Mapas";
import Sobre from "./pages/Sobre";
import AlbumFigurinhas from "./pages/AlbumFigurinhas";
import Regras from "./pages/Regras";

const navItems: NavItem[] = [
  { title: "Home", url: "/", icon: Flame },
  {
    title: "Personagens",
    icon: Users,
    subitems: [
      { title: "Heróis", url: "/personagens/pcs" },
      { title: "NPCs", url: "/personagens/npcs" },
    ],
  },
  { title: "Álbum dos Heróis", url: "/album", icon: Sparkles },
  { title: "Jogadores", url: "/jogadores", icon: Gamepad2 },
  { title: "Histórias", url: "/historias", icon: BookOpen },
  { title: "Mapas", url: "/mapas", icon: Map },
  { title: "Regras", url: "/regras", icon: ScrollText },
  { title: "Sobre", url: "/sobre", icon: Info },
];

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex relative z-10">
      <aside className="w-64 bg-hellfire-charcoal/90 border-r-2 border-hellfire-orange backdrop-blur-sm shadow-[4px_0_20px_rgba(255,107,53,0.3)] fixed h-full overflow-y-auto">
        <div className="p-6 border-b border-hellfire-ash">
          <h1 className="text-3xl font-bold text-gradient-hellfire animate-ember-glow">
            HELLFIRE
          </h1>
          <p className="text-xs text-hellfire-gold tracking-[0.3em] mt-1">
            D&D WIKI
          </p>
        </div>
        <SidebarNav items={navItems} />
      </aside>

      <main className="ml-64 flex-1 p-8 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personagens" element={<Navigate to="/personagens/pcs" replace />} />
          <Route path="/personagens/pcs" element={<PersonagensPCs />} />
          <Route path="/personagens/npcs" element={<PersonagensNPCs />} />
          <Route path="/album" element={<AlbumFigurinhas />} />
          <Route path="/jogadores" element={<Jogadores />} />
          <Route path="/historias" element={<Historias />} />
          <Route path="/mapas" element={<Mapas />} />
          <Route path="/regras" element={<Regras />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
