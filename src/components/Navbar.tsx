"use client";

// Floating Navbar with Apple-style hover effect

import { CheckSquare, Flame, Folder, User } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab }: any) {
  // Navigation tabs
  const tabs = [
    { key: "tasks", label: "Tasks", icon: CheckSquare },
    { key: "habits", label: "Habits", icon: Flame },
    { key: "projects", label: "Projects", icon: Folder },
    { key: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="w-full bg-neutral-900/80 backdrop-blur-lg rounded-full px-8 py-3 shadow-2xl border border-neutral-800 flex justify-between items-center transition-all duration-300">

      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="group relative flex flex-col items-center justify-center gap-1 text-xs min-w-16"
          >
            {/* Icon */}
            <div className="transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1">
              <Icon
                size={22}
                strokeWidth={1.5}
                className={`transition-all duration-300 ${
                  activeTab === tab.key
                    ? "text-blue-500"
                    : "text-gray-400"
                }`}
              />
            </div>

            {/* Label */}
            <span
              className={`transition-all duration-200 ${
                activeTab === tab.key
                  ? "text-blue-500"
                  : "text-gray-400"
              }`}
            >
              {tab.label}
            </span>

            {/* Active indicator dot */}
            {activeTab === tab.key && (
              <div className="absolute -bottom-1 w-1 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}