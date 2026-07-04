import { Gift, Shield, Calendar, Clock, Lightbulb } from "lucide-react";

interface Contest {
  title: string;
  date: string;
  time: string;
  duration: string;
  problems: number;
  color: "indigo" | "emerald";
}

const contests: Contest[] = [
  {
    title: "Weekly Contest 123",
    date: "12 May 2024",
    time: "10:00 AM",
    duration: "90 min",
    problems: 3,
    color: "indigo",
  },
  {
    title: "CodeSprint 45",
    date: "18 May 2024",
    time: "06:00 PM",
    duration: "120 min",
    problems: 5,
    color: "emerald",
  },
];

const colorStyles = {
  indigo: {
    cardBg: "bg-indigo-50/30",
    cardBorder: "border-indigo-50",
    iconBg: "bg-indigo-100",
    iconText: "text-indigo-600",
    btnBg: "bg-white",
    btnBorder: "border-slate-200",
    btnText: "text-indigo-600",
    btnHover: "hover:bg-indigo-50",
  },
  emerald: {
    cardBg: "bg-emerald-50/30",
    cardBorder: "border-emerald-50",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    btnBg: "bg-emerald-50",
    btnBorder: "border-emerald-100",
    btnText: "text-emerald-600",
    btnHover: "hover:bg-emerald-100",
  },
};

function ContestCard({ contest }: { contest: Contest }) {
  const styles = colorStyles[contest.color];
  const IconComponent = contest.color === "indigo" ? Gift : Shield;

  return (
    <div
      className={`p-4 ${styles.cardBg} border ${styles.cardBorder} rounded-2xl`}
    >
      <div className="flex items-start gap-4">
        <div className={`${styles.iconBg} p-2.5 rounded-xl`}>
          <IconComponent className={`w-6 h-6 ${styles.iconText}`} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-xs font-bold">{contest.title}</h4>
          </div>
          <div className="grid grid-cols-2 gap-y-1 text-[10px] font-bold text-slate-400 uppercase">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {contest.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {contest.time}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Duration: {contest.duration}
            </span>
            <span className="flex items-center gap-1">
              <Lightbulb className="w-3 h-3" />
              {contest.problems} Problems
            </span>
          </div>
          <button
            className={`w-full mt-3 ${styles.btnBg} border ${styles.btnBorder} py-1.5 rounded-lg text-xs font-bold ${styles.btnText} ${styles.btnHover} transition`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingContests() {
  return (
    <div className="bg-white p-6 rounded-3xl custom-shadow border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold">Upcoming Contests</h3>
        <a
          className="text-indigo-600 text-xs font-bold hover:underline"
          href="#"
        >
          View All
        </a>
      </div>
      <div className="space-y-4">
        {contests.map((contest) => (
          <ContestCard key={contest.title} contest={contest} />
        ))}
      </div>
    </div>
  );
}
