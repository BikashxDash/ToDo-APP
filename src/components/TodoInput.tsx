"use client";

// Input component to add new tasks

import { useState } from "react";
import { Todo } from "../types/todo";

export default function TodoInput({ setTodos, setShowInput }: any) {
  const [text, setText] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    if (!text.trim()) return; // prevent empty input

    const newTodo: Todo = {
      id: Date.now().toString(), // simple unique id
      text,
      completed: false,
    };

    // Add new todo to existing list
    setTodos((prev: Todo[]) => [...prev, newTodo]);

    // Clear input and close field
    setText("");
    setShowInput(false);
  };

  return (
    <div className="mb-6 max-w-md">
      <input
        className="w-full p-3 rounded-xl bg-neutral-900 outline-none text-white placeholder-gray-500"
        value={text}
        onChange={(e) => setText(e.target.value)}

        // Allow Enter key to submit
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}

        placeholder="Add a task..."
      />
    </div>
  );
}