import React from 'react';
import type { Todo } from '../../model/types/todo';
import styles from './TodoStats.module.css';

interface TodoStatsProps {
  todos: Todo[];
  onClearCompleted: () => void;
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
}

const TodoStats: React.FC<TodoStatsProps> = ({ 
  todos, 
  onClearCompleted, 
  filter, 
  onFilterChange 
}) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  const filters = [
    { key: 'all' as const, label: 'Все', count: totalTodos },
    { key: 'active' as const, label: 'Активные', count: activeTodos },
    { key: 'completed' as const, label: 'Выполненные', count: completedTodos },
  ];

  return (
    <div className={styles.statsContainer}>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{totalTodos}</span>
          <span className={styles.statLabel}>Всего</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{activeTodos}</span>
          <span className={styles.statLabel}>Активных</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{completedTodos}</span>
          <span className={styles.statLabel}>Выполнено</span>
        </div>
      </div>

      <div className={styles.filters}>
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            className={`${styles.filterButton} ${filter === key ? styles.active : ''}`}
            onClick={() => onFilterChange(key)}
            disabled={count === 0 && key !== 'all'}
          >
            {label}
            {count > 0 && <span className={styles.count}>{count}</span>}
          </button>
        ))}
      </div>

      {completedTodos > 0 && (
        <button
          className={styles.clearButton}
          onClick={onClearCompleted}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3,6 5,6 21,6"></polyline>
            <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
          </svg>
          Очистить выполненные
        </button>
      )}
    </div>
  );
};

export default TodoStats;
