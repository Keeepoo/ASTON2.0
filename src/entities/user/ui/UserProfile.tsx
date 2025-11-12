import React from 'react';
import { Link } from 'react-router-dom';
import type { User } from '../../../features/PostList/model/hooks/usePosts';
import styles from './UserProfile.module.css';

interface UserProfileProps {
  user: User;
  showBio?: boolean;
  compact?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, showBio = true, compact = false }) => {
  return (
    <div className={`${styles.userProfile} ${compact ? styles.compact : ''}`}>
      <div className={styles.avatar}>
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} />
        ) : (
          <div className={styles.avatarPlaceholder}>
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className={styles.userInfo}>
        <Link to={`/users/${user.id}/posts`} className={styles.userName}>
          {user.name}
        </Link>
        {showBio && user.bio && (
          <p className={styles.bio}>{user.bio}</p>
        )}
        {!compact && (
          <p className={styles.email}>{user.email}</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
