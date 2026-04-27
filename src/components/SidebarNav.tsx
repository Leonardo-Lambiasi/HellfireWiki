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

const SidebarNav = ({ items }: { items: NavItem[] }) => {
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
    <nav className="p-4">
      {items.map(item => {
        if (item.subitems) {
          const isExpanded = expanded.has(item.title);
          const isActive = item.subitems.some(sub =>
            location.pathname.startsWith(sub.url)
          );

          return (
            <div key={item.title} className="mb-1">
              <button
                onClick={() => toggle(item.title)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-hellfire-orange/20 text-hellfire-gold border-l-4 border-hellfire-gold"
                    : "text-muted-foreground hover:bg-hellfire-ash hover:text-hellfire-orange hover:border-l-4 hover:border-hellfire-orange"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {isExpanded && (
                <div className="ml-8 mt-1 space-y-1 border-l border-hellfire-ash/50 pl-3">
                  {item.subitems.map(sub => (
                    <NavLink
                      key={sub.url}
                      to={sub.url}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                          isActive
                            ? "text-hellfire-gold font-semibold"
                            : "text-muted-foreground hover:text-hellfire-orange"
                        }`
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
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-md mb-1 transition-all duration-200 ${
                isActive
                  ? "bg-hellfire-orange/20 text-hellfire-gold border-l-4 border-hellfire-gold"
                  : "text-muted-foreground hover:bg-hellfire-ash hover:text-hellfire-orange hover:border-l-4 hover:border-hellfire-orange"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default SidebarNav;
