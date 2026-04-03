"use client";

import { useState } from "react";

interface Habit {
  id: string;
  name: string;
  done: boolean;
}

export default function HabitPage() {
    interface Habit {
    id: string;
    name: string;
    done: boolean;
  }
  const [habits, setHabits] = useState<Habit[]>([]);
  const [input, setInput] = useState("");

  // ➕ Add habit
  const addHabit = () => {
  if (!input.trim()) return; // ❌ empty block

    const newHabit = {
    id: Date.now().toString(),
    name: input.trim(),
    done: false,
    };

    setHabits((prev) => [...prev, newHabit]);
    setInput(""); // reset input
  };

  // ✅ Toggle habit
  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, done: !h.done } : h
      )
    );
  };

  // ❌ Delete habit
  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Habits</h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a habit..."
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") addHabit();
          }}
          onBlur={addHabit} // click outside → add
          className="flex-1 p-2 rounded bg-neutral-900 outline-none"
        />

        <button
          onClick={addHabit}
          className="px-4 border border-neutral-700 rounded"
        >
          Add
        </button>
      </div>

      {/* List */}
      <div className="space-y-2">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="flex items-center justify-between bg-neutral-900 p-3 rounded-xl"
          >

            {/* LEFT SIDE (checkbox + name) */}
            <div className="flex items-center gap-3">

              {/* Bigger Checkbox */}
              <input
                type="checkbox"
                checked={habit.done}
                onChange={() => toggleHabit(habit.id)}
                className="w-5 h-5 cursor-pointer"
              />

              {/* Habit Name */}
              <span
                className={`${
                  habit.done ? "line-through text-gray-500" : "text-white"
                }`}
              >
                {habit.name}
              </span>
            </div>

            {/* RIGHT SIDE (delete button) */}
            <button
              onClick={() => deleteHabit(habit.id)}
              className="text-sm text-gray-400 hover:text-red-400 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}