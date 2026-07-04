import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import RoadmapPage from "@/pages/roadmap/RoadmapPage";

// Stub component for pages not yet built
function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-32">
      <div className="bg-indigo-50 p-4 rounded-2xl mb-4">
        <span className="text-4xl">🚧</span>
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-slate-400 text-sm">This page is coming soon.</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "roadmap",
        element: <RoadmapPage />,
      },
      {
        path: "sheets",
        element: <ComingSoon title="Sheets" />,
      },
      {
        path: "resources",
        element: <ComingSoon title="Resources" />,
      },
      {
        path: "contests",
        element: <ComingSoon title="Coding Contests" />,
      },
      {
        path: "practice",
        element: <ComingSoon title="Practice Problems" />,
      },
      {
        path: "chat",
        element: <ComingSoon title="Chat Rooms" />,
      },
      {
        path: "progress",
        element: <ComingSoon title="Progress" />,
      },
      {
        path: "achievements",
        element: <ComingSoon title="Achievements" />,
      },
      {
        path: "profile",
        element: <ComingSoon title="Profile" />,
      },
      {
        path: "admin",
        element: <ComingSoon title="Admin Panel" />,
      },
    ],
  },
]);
