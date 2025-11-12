import React from 'react';
import type { Todo } from '../../model/types/todo';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <button
        className={styles.checkbox}
        onClick={handleToggle}
        aria-label={todo.completed ? 'Отметить как невыполненное' : 'Отметить как выполненное'}
      >
        {todo.completed && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
        )}
      </button>

      <div className={styles.content}>
        <span className={styles.text}>
          {todo.text}
        </span>
      </div>

      <button
        className={styles.deleteButton}
        onClick={handleDelete}
        aria-label="Удалить задачу"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3,6 5,6 21,6"></polyline>
          <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
