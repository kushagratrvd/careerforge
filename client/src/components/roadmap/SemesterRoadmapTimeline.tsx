import { Check } from "lucide-react";

export interface RoadmapStep {
  id: number;
  stepNumber: number;
  title: string;
  description: string;
  completedTopics: number;
  totalTopics: number;
  color: "success" | "blue" | "indigo" | "orange";
}

const stepsData: RoadmapStep[] = [
  {
    id: 1,
    stepNumber: 1,
    title: "Data Structures",
    description: "Arrays, Strings, Linked List, Stack, Queue",
    completedTopics: 5,
    totalTopics: 6,
    color: "success",
  },
  {
    id: 2,
    stepNumber: 2,
    title: "Basic Algorithms",
    description: "Sorting, Searching, Recursion, Backtracking",
    completedTopics: 3,
    totalTopics: 4,
    color: "blue",
  },
  {
    id: 3,
    stepNumber: 3,
    title: "Trees",
    description: "Binary Trees, BST, Tree Traversals",
    completedTopics: 2,
    totalTopics: 5,
    color: "indigo",
  },
  {
    id: 4,
    stepNumber: 4,
    title: "Graph",
    description: "BFS, DFS, Topological Sort, Shortest Path",
    completedTopics: 0,
    totalTopics: 5,
    color: "orange",
  },
  {
    id: 5,
    stepNumber: 5,
    title: "Dynamic Programming (Intro)",
    description: "Basics of DP, Memoization, Tabulation",
    completedTopics: 0,
    totalTopics: 4,
    color: "orange",
  },
];

const badgeColors = {
  success: "bg-emerald-500 text-white shadow-emerald-500/20",
  blue: "bg-blue-500 text-white shadow-blue-500/20",
  indigo: "bg-indigo-600 text-white shadow-indigo-600/20",
  orange: "bg-orange-500 text-white shadow-orange-500/20",
};

export default function SemesterRoadmapTimeline() {
  return (
    <section
      className="bg-white p-8 rounded-3xl custom-shadow border border-slate-100"
      data-purpose="roadmap-timeline"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
        <h3 className="font-bold text-xl">Semester 3 – Strengthen Core</h3>
        <div className="flex items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
            Overall Progress
          </p>
          <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-indigo-600 w-[40%] rounded-full" />
          </div>
          <span className="text-xs font-bold">40%</span>
        </div>
      </div>
      <p className="text-sm text-slate-500 mb-10">
        Focus on core data structures, algorithms and start competitive programming.
      </p>

      {/* Steps List */}
      <div className="relative space-y-12">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-slate-100 z-0" />

        {stepsData.map((step) => {
          const isStarted = step.completedTopics > 0;
          const isDone = step.completedTopics === step.totalTopics;

          return (
            <div key={step.id} className="relative flex gap-6 z-10 group">
              {/* Step number badge */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg ring-4 ring-white ${
                  badgeColors[step.color]
                }`}
              >
                {step.stepNumber}
              </div>

              {/* Step Card */}
              <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-4 custom-shadow group-hover:border-indigo-600 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-500">
                      {step.completedTopics} / {step.totalTopics} Topics
                    </span>
                    {isStarted ? (
                      <div className="w-5 h-5 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-200">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 border-2 border-dashed border-slate-300 rounded-full" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
