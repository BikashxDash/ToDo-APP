// Individual todo item

import { Todo } from "../types/todo";

export default function TodoItem({ todo, setTodos }: any) {

  // Toggle completion status
  const toggleTodo = () => {
    setTodos((prev: Todo[]) =>
      prev.map((t) =>
        t.id === todo.id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  // Delete a todo
  const deleteTodo = () => {
    setTodos((prev: Todo[]) =>
      prev.filter((t) => t.id !== todo.id)
    );
  };

  return (
    <div className="flex items-center justify-between bg-neutral-900 p-4 rounded-2xl mb-3 hover:bg-neutral-800 transition">

      {/* Left side: checkbox + text */}
      <div className="flex items-center gap-3">

        {/* Checkbox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
        />

        {/* Text content */}
        <div>
          <p
            className={`${
              todo.completed
                ? "line-through text-gray-500"
                : "text-white"
            }`}
          >
            {todo.text}
          </p>

          {/* Secondary text (placeholder for time) */}
          <p className="text-xs text-gray-500">
            just now
          </p>
        </div>
      </div>

      {/* Delete button */}
      <button
        onClick={deleteTodo}
        className="text-gray-500 hover:text-red-500 transition"
      >
        ✕
      </button>
    </div>
  );
}