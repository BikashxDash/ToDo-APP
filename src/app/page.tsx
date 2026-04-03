"use client";

import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { getTodos, saveTodos } from "../lib/storage";

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import Navbar from "../components/Navbar";
import HabitPage from "../components/HabitPage";
import ProfilePage from "../components/ProfilePage";

export default function Home() {

  // 📅 Selected calendar date
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // 📝 Todo list state
  const [todos, setTodos] = useState<Todo[]>([]);

  // ➕ Toggle input visibility
  const [showInput, setShowInput] = useState(false);

  // 🧭 Active tab state
  const [activeTab, setActiveTab] = useState("tasks");

  // 🔄 Load todos from localStorage
  useEffect(() => {
    setTodos(getTodos());
  }, []);

  // 💾 Save todos on change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // 📆 Date info
  const now = new Date();
  const today = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  return (
    <main className="min-h-screen bg-black text-white flex justify-center">

      {/* 🧱 Main Container */}
      <div className="w-full max-w-5xl px-6 pb-32">

        {/* 🏷️ App Title */}
        <h1 className="text-2xl md:text-3xl font-semibold mt-6 md:mt-8 mb-4 md:mb-6">TODO</h1>

        {/* 📐 Layout (changes based on tab) */}
        <div
          className={`grid gap-6 ${
            activeTab === "profile"
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-[0.85fr_1.15fr]"
          }`}
        >

          {/* 📅 CALENDAR (hidden in profile tab) */}
          {activeTab !== "profile" && (
            <div className="bg-neutral-900 rounded-2xl p-3 md:p-4">

              {/* Header */}
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-semibold">{month}</h2>
                <span className="text-sm text-gray-400">{year}</span>
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                {["S","M","T","W","T","F","S"].map((d, i) => (
                  <div key={i} className="text-gray-500">{d}</div>
                ))}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {Array.from({ length: 31 }, (_, i) => {
                  const date = i + 1;
                  const isToday = date === today;
                  const isSelected = date === selectedDate;

                  return (
                    <div
                      key={i}
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 rounded-lg cursor-pointer transition ${
                        isSelected
                          ? "border border-neutral-400 text-white"
                          : isToday
                          ? "border border-gray-600 text-gray-300"
                          : "text-gray-400 hover:bg-neutral-800"
                      }`}
                    >
                      {date}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 📝 RIGHT SIDE (Dynamic Content) */}
          <div>

            {/* TASKS */}
            {activeTab === "tasks" && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Tasks</h2>

                <div className="w-full md:max-w-sm">
                  {showInput && (
                    <TodoInput
                      setTodos={setTodos}
                      setShowInput={setShowInput}
                    />
                  )}
                </div>

                <TodoList todos={todos} setTodos={setTodos} />
              </>
            )}

            {/* HABITS */}
            {activeTab === "habits" && <HabitPage />}

            {/* PROJECTS */}
            {activeTab === "projects" && (
              <p className="text-gray-400">Projects coming soon...</p>
            )}

            {/* PROFILE */}
            {activeTab === "profile" && <ProfilePage />}

          </div>
        </div>

        {/* ➕ Add Button (only for tasks) */}
        {activeTab === "tasks" && (
          <button
            onClick={() => setShowInput((prev) => !prev)}
            className="fixed bottom-24 right-4 md:right-[calc((100vw-80rem)/2+9.5rem)] z-50 border-2 border-neutral-700 text-white rounded-full px-5 py-3 flex items-center gap-2 shadow-md hover:border-neutral-500 hover:scale-105 transition"
          >
            <span className="text-sm">Add</span>
            <span className="text-xl">+</span>
          </button>
        )}

        {/* 🧭 Navbar */}
        <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 md:px-6">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

      </div>
    </main>
  );
}