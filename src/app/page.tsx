"use client";

import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { getTodos, saveTodos } from "../lib/storage";

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import Navbar from "../components/Navbar";

export default function Home() {
  // Calendar state
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // Todo state
  const [todos, setTodos] = useState<Todo[]>([]);

  // Input toggle
  const [showInput, setShowInput] = useState(false);

  // Tab state
  const [activeTab, setActiveTab] = useState("tasks");

  // Load todos
  useEffect(() => {
    setTodos(getTodos());
  }, []);

  // Save todos
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Date info
  const now = new Date();
  const today = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  return (
    <main className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-5xl px-6">

        {/* APP TITLE */}
        <h1 className="text-3xl font-semibold mt-8 mb-6">TODO</h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-[0.85fr_1.15fr] gap-10">

          {/* LEFT → CALENDAR */}
          <div className="bg-neutral-900 rounded-2xl p-4">

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
                        ? "border border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] text-white"
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

          {/* RIGHT → TASKS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tasks</h2>

            <div className="max-w-sm">
              {showInput && (
                <TodoInput
                  setTodos={setTodos}
                  setShowInput={setShowInput}
                />
              )}
            </div>

            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </div>

        {/* + BUTTON (navbar ke upar right me) */}
        {activeTab === "tasks" && (
          <button
            onClick={() => setShowInput((prev) => !prev)}
            className="fixed bottom-28 right-[calc((100vw-80rem)/2+9.5rem)] z-50 border-2 border-neutral-700 text-white rounded-full px-5 py-3 flex items-center gap-2 shadow-md hover:border-neutral-500 hover:scale-105 transition"
          >
            <span className="text-sm">Add</span>
            <span className="text-xl">+</span>
            
          </button>
        )}

        {/* NAVBAR */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

      </div>
    </main>
  );
}