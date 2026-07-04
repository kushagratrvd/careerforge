import { useState } from "react";
import { BookOpen, Hexagon, Database, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface RecommendedItem {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  subtitle: string;
}

const topicsData: RecommendedItem[] = [
  {
    icon: BookOpen,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    title: "Binary Trees",
    subtitle: "DSA • 12 min read",
  },
  {
    icon: Hexagon,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "React Hooks",
    subtitle: "Web Dev • 15 min read",
  },
  {
    icon: Database,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    title: "SQL Joins",
    subtitle: "SQL • 10 min read",
  },
  {
    icon: Settings,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    title: "System Design Basics",
    subtitle: "System Design • 20 min read",
  },
];

const tabs = ["Topics", "Resources", "Contests"] as const;

export default function RecommendedSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Topics");

  return (
    <div className="bg-white p-6 rounded-3xl custom-shadow border border-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold">Recommended For You</h3>
        <a
          className="text-indigo-600 text-xs font-bold hover:underline"
          href="#"
        >
          View All
        </a>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-100 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-xs font-bold pb-2 transition-colors ${
              activeTab === tab
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-slate-400 hover:text-slate-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Items list */}
      <div className="space-y-4">
        {topicsData.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className={`${item.iconBg} p-2.5 rounded-xl`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <div>
                <h4 className="text-xs font-bold">{item.title}</h4>
                <p className="text-[10px] text-slate-400 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-indigo-600 hover:bg-slate-50 transition">
              Study
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
