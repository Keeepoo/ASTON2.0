import { useState, useCallback, useEffect } from 'react';
import type { Todo, TodoListState, TodoListActions } from '../types/todo';

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const useTodos = (): TodoListState & TodoListActions => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          updatedAt: new Date(todo.updatedAt),
        }));
        setTodos(parsedTodos);
      }
    } catch (err) {
      setError('Ошибка загрузки задач');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem('todos', JSON.stringify(todos));
      } catch (err) {
        setError('Ошибка сохранения задач');
      }
    }
  }, [todos, loading]);

  const addTodo = useCallback((text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: generateId(),
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setTodos(prev => [newTodo, ...prev]);
    }
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
        : todo
    ));
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const editTodo = useCallback((_id: string, _newText: string) => {
  }, []);

  const clearCompleted = useCallback(() => {
  }, []);

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
  };
};
