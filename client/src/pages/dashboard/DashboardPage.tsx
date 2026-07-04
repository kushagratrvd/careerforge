import { TrendingUp, FileText, CheckCircle, AlertCircle } from "lucide-react";
import StatsCard from "@/components/common/StatsCard";
import RoadmapTimeline from "@/components/common/RoadmapTimeline";
import CalendarWidget from "@/components/common/CalendarWidget";
import RecommendedSection from "@/components/common/RecommendedSection";
import UpcomingContests from "@/components/common/UpcomingContests";
import ChatRoomsBar from "@/components/common/ChatRoomsBar";

export default function DashboardPage() {
  // TODO: Pull user name from auth context
  const userName = "Akash";

  return (
    <>
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Hi {userName}! 👋
        </h1>
        <p className="text-slate-500 mt-1">
          Let's continue your preparation and achieve your dream placement.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left column: Stats + Roadmap */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatsCard
              icon={TrendingUp}
              label="Overall Progress"
              value="52%"
              progress={52}
              subtitle="Great going!"
              color="indigo"
            />
            <StatsCard
              icon={FileText}
              label="Sheets Completed"
              value="18 / 48"
              progress={37.5}
              subtitle="Keep it up!"
              color="blue"
            />
            <StatsCard
              icon={CheckCircle}
              label="Problems Solved"
              value="842"
              progress={100}
              subtitle="This Month"
              color="emerald"
            />
            <StatsCard
              icon={AlertCircle}
              label="Contests Attended"
              value="12"
              progress={60}
              subtitle="Keep participating!"
              color="orange"
            />
          </div>

          {/* Roadmap */}
          <RoadmapTimeline />
        </div>

        {/* Right column: Calendar + Recommended + Contests */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <CalendarWidget />
          <RecommendedSection />
          <UpcomingContests />
        </div>
      </div>

      {/* Chat Rooms Footer */}
      <ChatRoomsBar />
    </>
  );
}
