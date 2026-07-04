import { FileText, PlayCircle, Video, ArrowRight } from "lucide-react";

interface ResourceItem {
  id: number;
  title: string;
  type: "Sheet" | "Playlist";
  icon: typeof FileText;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeText: string;
}

const resources: ResourceItem[] = [
  {
    id: 1,
    title: "Striver A2Z DSA Sheet",
    type: "Sheet",
    icon: FileText,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
  },
  {
    id: 2,
    title: "NeetCode 150",
    type: "Playlist",
    icon: PlayCircle,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
  },
  {
    id: 3,
    title: "Abdul Bari DSA Playlist",
    type: "Playlist",
    icon: Video,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
  },
];

export default function RoadmapResourcesCard() {
  return (
    <div className="bg-white p-6 rounded-3xl custom-shadow border border-slate-100">
      <h3 className="font-bold text-lg mb-6">Recommended Resources</h3>
      <div className="space-y-4">
        {resources.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 ${item.iconBg} ${item.iconColor} rounded-lg flex items-center justify-center shrink-0`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold truncate text-slate-800">
                {item.title}
              </p>
            </div>
            <span
              className={`px-2 py-0.5 ${item.badgeBg} ${item.badgeText} text-[9px] font-bold rounded shrink-0`}
            >
              {item.type}
            </span>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 flex items-center justify-center gap-2 text-indigo-600 font-bold text-xs hover:gap-3 transition-all">
        View all resources
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
