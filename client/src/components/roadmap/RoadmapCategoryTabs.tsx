import { useState } from "react";

const categories = [
  "DSA Roadmap",
  "Web Development",
  "AIML",
  "System Design",
] as const;

export type RoadmapCategory = (typeof categories)[number];

interface RoadmapCategoryTabsProps {
  activeCategory?: RoadmapCategory;
  onSelectCategory?: (category: RoadmapCategory) => void;
}

export default function RoadmapCategoryTabs({
  activeCategory = "DSA Roadmap",
  onSelectCategory,
}: RoadmapCategoryTabsProps) {
  const [selected, setSelected] = useState<RoadmapCategory>(activeCategory);

  const handleSelect = (cat: RoadmapCategory) => {
    setSelected(cat);
    onSelectCategory?.(cat);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mt-6">
      {categories.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            className={`px-6 py-2 text-sm font-semibold rounded-xl transition-all ${
              isActive
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
