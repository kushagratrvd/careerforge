import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  progress: number; // 0-100
  subtitle: string;
  color: "indigo" | "blue" | "emerald" | "orange";
}

const colorMap = {
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    fill: "bg-indigo-600",
    labelText: "text-indigo-600",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    fill: "bg-blue-600",
    labelText: "text-blue-600",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    fill: "bg-emerald-600",
    labelText: "text-emerald-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    fill: "bg-orange-600",
    labelText: "text-orange-600",
  },
};

export default function StatsCard({
  icon: Icon,
  label,
  value,
  progress,
  subtitle,
  color,
}: StatsCardProps) {
  const colors = colorMap[color];

  return (
    <div className="bg-white p-5 rounded-2xl custom-shadow border border-slate-100">
      <div className="flex items-center gap-4 mb-4">
        <div className={`${colors.bg} p-2.5 rounded-xl`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <div>
          <p
            className={`text-[10px] uppercase font-bold ${colors.labelText} tracking-wider`}
          >
            {label}
          </p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
      <div className="progress-track overflow-hidden">
        <div
          className={`progress-fill ${colors.fill}`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">{subtitle}</p>
    </div>
  );
}
