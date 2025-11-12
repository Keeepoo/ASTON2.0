import React from 'react';
import { useTodos } from '../../model/hooks/useTodos';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Загрузка задач...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Ошибка: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Мои задачи</h1>
        <p className={styles.subtitle}>Организуйте свои дела и будьте продуктивными</p>
      </div>

      <AddTodo onAdd={addTodo} />

      <div className={styles.todosContainer}>
        {todos.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z"></path>
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>Нет задач</h3>
            <p className={styles.emptyDescription}>Добавьте свою первую задачу выше</p>
          </div>
        ) : (
          <div className={styles.todosList}>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
