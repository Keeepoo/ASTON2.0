import { useTheme } from '../../../shared/lib/theme/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={`${styles.themeSwitcher} ${styles[theme]}`}
      onClick={toggleTheme}
      aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
