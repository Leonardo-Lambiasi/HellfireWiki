import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SubItem {
  title: string;
  url: string;
}

export interface NavItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  subitems?: SubItem[];
}

interface SidebarNavProps {
  items: NavItem[];
  onNavigate?: () => void;
}

const SidebarNav = ({ items, onNavigate }: SidebarNavProps) => {
  const location = useLocation();

  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    items.forEach(item => {
      if (item.subitems?.some(sub => location.pathname.startsWith(sub.url))) {
        initial.add(item.title);
      }
    });
    return initial;
  });

  const toggle = (title: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  return (
    <nav className="menu-lateral">
      {items.map(item => {
        if (item.subitems) {
          const isExpanded = expanded.has(item.title);
          const isActive = item.subitems.some(sub =>
            location.pathname.startsWith(sub.url)
          );

          return (
            <div key={item.title} className="menu-grupo">
              <button
                onClick={() => toggle(item.title)}
                className={`menu-item menu-item-grupo ${isActive ? "menu-item-ativo" : "menu-item-inativo"}`}
              >
                <div className="menu-item-rotulo">
                  <item.icon className="icone-medio" />
                  <span className="menu-item-texto">{item.title}</span>
                </div>
                <ChevronDown
                  className={`menu-seta ${isExpanded ? "menu-seta-aberta" : ""}`}
                />
              </button>

              {isExpanded && (
                <div className="submenu">
                  {item.subitems.map(sub => (
                    <NavLink
                      key={sub.url}
                      to={sub.url}
                      onClick={onNavigate}
                      className={({ isActive }) =>
                        `submenu-link ${isActive ? "submenu-link-ativo" : "submenu-link-inativo"}`
                      }
                    >
                      {sub.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <NavLink
            key={item.url}
            to={item.url!}
            end={item.url === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `menu-item menu-item-link ${isActive ? "menu-item-ativo" : "menu-item-inativo"}`
            }
          >
            <item.icon className="icone-medio" />
            <span className="menu-item-texto">{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default SidebarNav;
