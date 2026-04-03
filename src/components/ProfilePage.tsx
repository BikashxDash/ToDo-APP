"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Heart,
  Settings,
  LayoutGrid,
  CheckSquare,
  Calendar,
  Bell,
  History,
  Share2,
  Star,
  Mail,
  Link,
  Image,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-6">

      {/* 🧾 SUPPORT CARD */}
      <div className="bg-neutral-900 rounded-2xl p-5 flex justify-between items-center">
        <p className="text-sm text-gray-300">
          This app is ad-free. <br />
          Your support means a lot!
        </p>

        <button className="bg-green-600 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-green-500 transition">
          Sure 🤍
        </button>
      </div>

      {/* 💚 FEATURES */}
      <div className="bg-neutral-900 rounded-2xl p-4 flex items-center gap-3">
        <Heart className="text-green-500" size={18} />
        <span>Get All Features</span>
      </div>

      {/* ⚙️ SETTINGS GROUP */}
      <div className="bg-neutral-900 rounded-2xl p-4 space-y-4">

        <div className="flex items-center gap-3">
          <Settings size={18} />
          <span>Customize</span>
        </div>

        <div className="flex items-center gap-3">
          <LayoutGrid size={18} />
          <span>Widgets</span>
        </div>

        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <CheckSquare size={18} />
            <span>Move Completed Task Down</span>
          </div>
          <span className="text-sm text-gray-400">On</span>
        </div>

        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            <span>Week Start On</span>
          </div>
          <span className="text-sm text-gray-400">Sunday</span>
        </div>

        <div className="flex items-center gap-3">
          <Bell size={18} />
          <span>Reminders</span>
        </div>
      </div>

      {/* 📦 EXTRA */}
      <div className="bg-neutral-900 rounded-2xl p-4 space-y-4">

        <div className="flex items-center gap-3">
          <History size={18} />
          <span>Task History</span>
        </div>

        <div className="flex items-center gap-3">
          <Share2 size={18} />
          <span>Share This App</span>
        </div>

        <div className="flex items-center gap-3">
          <Star size={18} />
          <span>Rate This App</span>
        </div>
      </div>

      {/* 🧑‍💻 APP INFO */}
      <div className="bg-neutral-900 rounded-2xl p-5 space-y-3">
        <h2 className="text-2xl font-semibold">Todo One</h2>
        <p className="text-sm text-gray-400">Version 1.0</p>
        <p className="text-sm text-gray-400">Developed by You</p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-3">
          <div className="bg-neutral-800 p-2 rounded-lg">
            <Mail size={18} />
          </div>
          <div className="bg-neutral-800 p-2 rounded-lg">
            <Image size={18} />
          </div>
          <div className="bg-neutral-800 p-2 rounded-lg">
            <Link size={18} />
          </div>
        </div>
      </div>

      {/* 🔧 SYSTEM */}
      <div className="bg-neutral-900 rounded-2xl p-4 space-y-4">

        <div className="flex items-center gap-3">
          <span>🔄</span>
          <span>Check for Updates</span>
        </div>

        <div className="flex items-center gap-3">
          <span>📄</span>
          <span>Privacy Policy</span>
        </div>

        <div className="flex items-center gap-3">
          <span>🐞</span>
          <span>Report Bug</span>
        </div>

        <div className="flex items-center gap-3">
          <span>💬</span>
          <span>Propose better translation</span>
        </div>
      </div>

    </div>
  );
}