// Utility functions to handle localStorage

import { Todo } from "../types/todo";

const KEY = "todos"; // key used in localStorage

// Get todos from localStorage
export const getTodos = (): Todo[] => {
  // Prevent errors during server-side rendering
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

// Save todos to localStorage
export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(KEY, JSON.stringify(todos));
};