import { Zap, Lightbulb, PieChart, Heart } from "lucide-react";

const achievements = [
  {
    icon: Zap,
    text: "Strong understanding of core data structures",
  },
  {
    icon: Lightbulb,
    text: "Solve medium level problems",
  },
  {
    icon: PieChart,
    text: "Start participating in coding contests",
  },
  {
    icon: Heart,
    text: "Build logic and problem solving skills",
  },
];

export default function RoadmapAchievementsCard() {
  return (
    <div className="bg-white p-6 rounded-3xl custom-shadow border border-slate-100">
      <h3 className="font-bold text-lg mb-6">What you'll achieve</h3>
      <ul className="space-y-4">
        {achievements.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-0.5 text-emerald-500 shrink-0">
              <item.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-slate-600">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
