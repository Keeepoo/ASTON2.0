import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './UserTabs.module.css';

interface UserTabsProps {
  userId?: string;
}

const UserTabs: React.FC<UserTabsProps> = ({ userId }) => {
  const params = useParams();
  const currentUserId = userId || params.id || '1';

  const tabs = [
    { path: '/posts', label: 'Все посты' },
    { path: `/users/${currentUserId}`, label: 'Мой профиль' },
    { path: `/users/${currentUserId}/albums`, label: 'Альбомы' },
    { path: `/users/${currentUserId}/todos`, label: 'Задачи' },
  ];

  return (
    <nav className={styles.tabs}>
      {tabs.map(tab => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => 
            `${styles.tab} ${isActive ? styles.active : ''}`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default UserTabs;
