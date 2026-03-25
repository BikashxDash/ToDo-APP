// Displays list of todos

import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }: any) {

  // Empty state
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No tasks yet. Add one.
      </p>
    );
  }

  return (
    <div>
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}