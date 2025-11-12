import { useState } from 'react';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import AboutProject from '../../features/AboutProject/ui/AboutProject';
import Button from '../../shared/ui/Button/Button';
import styles from './Header.module.css';

function Header() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleOpenAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  const handleCloseAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>ASTON Blog</h1>
          <div className={styles.actions}>
            <Button 
              onClick={handleOpenAboutModal}
              variant="outline"
              size="small"
            >
              О проекте
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <AboutProject 
        isOpen={isAboutModalOpen} 
        onClose={handleCloseAboutModal} 
      />
    </>
  );
}

export default Header;