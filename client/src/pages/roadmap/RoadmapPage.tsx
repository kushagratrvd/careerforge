import RoadmapCategoryTabs from "@/components/roadmap/RoadmapCategoryTabs";
import SemesterRoadmapTimeline from "@/components/roadmap/SemesterRoadmapTimeline";
import RoadmapAchievementsCard from "@/components/roadmap/RoadmapAchievementsCard";
import RoadmapResourcesCard from "@/components/roadmap/RoadmapResourcesCard";

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      {/* Section Title and Category Filters */}
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight">Roadmaps</h2>
        <p className="text-slate-500 text-sm mt-1">
          Semester-wise roadmaps to guide your placement preparation journey.
        </p>
        <RoadmapCategoryTabs />
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Center Column - Roadmap Timeline */}
        <div className="col-span-12 lg:col-span-8">
          <SemesterRoadmapTimeline />
        </div>

        {/* Right Column - Achievements & Recommended Resources */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <RoadmapAchievementsCard />
          <RoadmapResourcesCard />
        </div>
      </div>
    </div>
  );
}
