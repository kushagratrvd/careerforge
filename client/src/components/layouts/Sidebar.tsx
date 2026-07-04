import { NavLink } from "react-router-dom";
import {
  Home,
  Map,
  FileText,
  BookOpen,
  Monitor,
  Code,
  BarChart3,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Star,
} from "lucide-react";

const mainNavItems = [
  { to: "/dashboard", icon: Home, label: "Dashboard" },
  { to: "/roadmap", icon: Map, label: "Roadmaps" },
  { to: "/sheets", icon: FileText, label: "Sheets" },
  { to: "/resources", icon: BookOpen, label: "Resources" },
];

const practiceNavItems = [
  { to: "/contests", icon: Monitor, label: "Coding Contests" },
  { to: "/practice", icon: Code, label: "Practice Problems" },
];

const trackNavItems = [
  { to: "/progress", icon: BarChart3, label: "Progress" },
  { to: "/achievements", icon: Sparkles, label: "Achievements" },
];

interface NavSectionProps {
  title: string;
  items: { to: string; icon: React.ElementType; label: string }[];
  showChevron?: boolean;
}

function NavSection({ title, items, showChevron = false }: NavSectionProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center ${showChevron ? "justify-between" : ""} px-3 py-2 transition-colors ${
                isActive
                  ? "sidebar-active font-medium"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5" />
              {item.label}
            </div>
            {showChevron && <ChevronRight className="w-4 h-4" />}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside
      className="w-64 bg-white border-r border-slate-200 flex-col hidden lg:flex"
      data-purpose="main-sidebar"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">CareerForge</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-6 overflow-y-auto flex-1">
          <NavSection title="Main" items={mainNavItems} />
          <NavSection title="Practice" items={practiceNavItems} showChevron />
          <NavSection title="Track" items={trackNavItems} showChevron />
        </nav>

        {/* Premium Card */}
        <div className="mt-auto pt-6">
          <div className="bg-indigo-600 rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                <span className="font-bold">Go Premium</span>
              </div>
              <p className="text-xs text-indigo-100 mb-4 leading-relaxed">
                Unlock all features, premium contests and more.
              </p>
              <button className="w-full bg-white text-indigo-600 font-semibold py-2 rounded-lg text-sm transition hover:bg-slate-100">
                Upgrade Now
              </button>
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </aside>
  );
}
