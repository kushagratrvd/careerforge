import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

// TODO: Replace with real auth context data
const mockUser = {
  name: "Akash",
  subtitle: "IT A, 3rd Year",
  avatarUrl: undefined,
};

export default function DashboardLayout() {
  return (
    <div className="flex min-h-dvh">
      <Sidebar />
      <main className="flex-1 min-w-0 overflow-y-auto">
        <TopNav user={mockUser} streak={12} notificationCount={3} />
        <div className="p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
