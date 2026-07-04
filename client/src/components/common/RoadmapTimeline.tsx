import { Check, Zap, ChevronDown } from "lucide-react";

interface TimelineItem {
  step: number;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "locked";
  progress?: number;
}

const timelineData: TimelineItem[] = [
  {
    step: 1,
    title: "Strengthen Fundamentals",
    description: "Basics of Programming, Data Types, Functions, Arrays, Strings",
    status: "completed",
  },
  {
    step: 2,
    title: "Core DSA",
    description: "Linked List, Stack, Queue, Trees, Hashing, Heap",
    status: "in-progress",
    progress: 60,
  },
  {
    step: 3,
    title: "Advanced DSA",
    description: "Graphs, DP, Tries, Backtracking, Greedy",
    status: "in-progress",
    progress: 20,
  },
  {
    step: 4,
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
    status: "locked",
  },
  {
    step: 5,
    title: "Core Subjects",
    description: "DBMS, OOPS, OS, Computer Networks",
    status: "locked",
  },
  {
    step: 6,
    title: "Placement Preparation",
    description: "Aptitude, SQL, System Design, Resume, Mock Interviews",
    status: "locked",
  },
];

function TimelineNode({ item }: { item: TimelineItem }) {
  const isCompleted = item.status === "completed";
  const isLocked = item.status === "locked";

  return (
    <div
      className={`relative flex items-start gap-6 group ${
        isLocked ? "opacity-50" : ""
      }`}
    >
      {/* Node circle */}
      <div
        className={`z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
          isCompleted
            ? "bg-emerald-500 text-white"
            : isLocked
              ? "bg-slate-200 text-slate-500"
              : "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
        }`}
      >
        {isCompleted ? <Check className="w-4 h-4" /> : item.step}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-bold text-sm">{item.step}</span>
            <h4
              className={`font-bold ${
                isCompleted
                  ? "text-emerald-600"
                  : isLocked
                    ? "text-slate-700"
                    : ""
              }`}
            >
              {item.title}
              {isCompleted && (
                <span className="text-slate-400 font-normal ml-1">
                  (Completed)
                </span>
              )}
            </h4>
          </div>
          <span
            className={`text-xs font-bold ${
              isCompleted
                ? "text-emerald-600"
                : isLocked
                  ? "text-slate-400"
                  : "text-slate-700"
            }`}
          >
            {isCompleted
              ? "Completed"
              : `${item.progress ?? 0}%`}
          </span>
        </div>
        <p className="text-slate-400 text-xs mb-3">{item.description}</p>
        {!isCompleted && (
          <div className="progress-track w-full overflow-hidden">
            {item.progress ? (
              <div
                className="progress-fill bg-indigo-600"
                style={{ width: `${item.progress}%` }}
              />
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default function RoadmapTimeline() {
  return (
    <div className="bg-white p-8 rounded-3xl custom-shadow border border-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-xl font-bold">Your Roadmap</h2>
          <p className="text-slate-400 text-sm mt-1">
            Semester-wise plan recommended for you
          </p>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 transition">
            You are in: <span className="text-indigo-600">Semester 3</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
            24 Months Remaining
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6 relative" data-purpose="roadmap-timeline">
        {/* Vertical Line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-100" />

        {timelineData.map((item) => (
          <TimelineNode key={item.step} item={item} />
        ))}
      </div>

      {/* Tip Box */}
      <div className="mt-10 bg-indigo-50/50 p-4 rounded-2xl flex items-center gap-3 border border-indigo-100/50">
        <div className="text-indigo-600">
          <Zap className="w-5 h-5" />
        </div>
        <p className="text-xs font-medium text-indigo-700">
          Keep following your roadmap. Consistency is the key to success!
        </p>
      </div>
    </div>
  );
}
