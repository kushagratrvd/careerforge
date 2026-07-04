import { Search, Bell, Menu, ChevronDown } from "lucide-react";

interface TopNavProps {
  user?: {
    name: string;
    subtitle: string;
    avatarUrl?: string;
  };
  streak?: number;
  notificationCount?: number;
  onMenuToggle?: () => void;
}

export default function TopNav({
  user,
  streak = 0,
  notificationCount = 0,
  onMenuToggle,
}: TopNavProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-6 w-1/2">
        <button
          className="lg:hidden text-slate-500"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative w-full max-w-md">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-transparent focus:border-indigo-500 focus:ring-0 rounded-xl text-sm transition-all"
            placeholder="Search for topics, sheets, resources..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Streak Badge */}
        {streak > 0 && (
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
            <span className="text-orange-500">🔥</span>
            <span className="text-xs font-bold text-orange-700">
              {streak} Day Streak
            </span>
          </div>
        )}

        {/* Notification Bell */}
        <div className="relative">
          <Bell className="w-6 h-6 text-slate-400" />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-indigo-600 text-[10px] text-white flex items-center justify-center rounded-full border-2 border-white">
              {notificationCount}
            </span>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          {user?.avatarUrl ? (
            <img
              alt="User Avatar"
              className="w-10 h-10 rounded-xl object-cover"
              src={user.avatarUrl}
            />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
              {user?.name?.charAt(0) ?? "U"}
            </div>
          )}
          <div className="hidden sm:block">
            <p className="text-sm font-bold">{user?.name ?? "User"}</p>
            <p className="text-xs text-slate-400 font-medium">
              {user?.subtitle ?? ""}
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </header>
  );
}
