"use client";

// Input component to add new tasks

import { useState } from "react";
import { Todo } from "../types/todo";

export default function TodoInput({ setTodos, setShowInput }: any) {
  const [text, setText] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
    };

    setTodos((prev: Todo[]) => [...prev, newTodo]);
    setText("");
    setShowInput(false); // input close after add
  };

  return (
    <div className="mb-6 max-w-md">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
        onBlur={addTodo}
        className="..."
      />
    </div>
  );
}