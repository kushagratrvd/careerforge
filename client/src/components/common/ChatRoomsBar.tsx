import { MessageCircle, Users } from "lucide-react";

interface ChatRoom {
  name: string;
  onlineCount: number;
  color: string;
}

const chatRooms: ChatRoom[] = [
  { name: "1st Year", onlineCount: 120, color: "bg-blue-50 text-blue-600" },
  { name: "2nd Year", onlineCount: 98, color: "bg-indigo-50 text-indigo-600" },
  { name: "3rd Year", onlineCount: 87, color: "bg-purple-50 text-purple-600" },
  {
    name: "4th Year",
    onlineCount: 102,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "General Chat",
    onlineCount: 156,
    color: "bg-orange-50 text-orange-600",
  },
];

export default function ChatRoomsBar() {
  return (
    <div className="mt-8 bg-white p-6 rounded-3xl custom-shadow border border-slate-100 flex flex-wrap items-center justify-between gap-6">
      {/* Left: Icon + Title */}
      <div className="flex items-center gap-4">
        <div className="bg-indigo-600 p-3 rounded-2xl text-white">
          <MessageCircle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold">Chat Rooms</h3>
          <p className="text-xs text-slate-400 font-medium">
            Connect with peers and learn together
          </p>
        </div>
      </div>

      {/* Room List + CTA */}
      <div className="flex flex-wrap items-center gap-6">
        {chatRooms.map((room) => (
          <div key={room.name} className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${room.color}`}
            >
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold">{room.name}</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-[10px] text-slate-400 font-medium">
                  {room.onlineCount} online
                </span>
              </div>
            </div>
          </div>
        ))}

        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
          Open Chat
        </button>
      </div>
    </div>
  );
}
