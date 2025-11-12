import React from 'react';
import Modal from '../../../shared/ui/Modal/Modal';
import Button from '../../../shared/ui/Button/Button';
import styles from './AboutProject.module.css';

interface AboutProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutProject: React.FC<AboutProjectProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Описание проекта</h3>i
          <p>
            Это React-приложение, демонстрирующее современные подходы к разработке 
            пользовательских интерфейсов
          </p>
        </div>

        <div className={styles.section}>
          <h3>Технологии</h3>
          <ul>
            <li>React 18 с TypeScript</li>
            <li>Vite для сборки</li>
            <li>CSS Modules для стилизации</li>
            <li>Feature-Sliced Design архитектура</li>
            <li>React Context для управления состоянием</li>
            <li>React Portal для модальных окон</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Функциональность</h3>
          <ul>
            <li>Отображение списка постов</li>
            <li>Переключение светлой и тёмной темы</li>
            <li>Модальное окно с информацией о проекте</li>
            <li>Адаптивный дизайн</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Автор</h3>
          <p>Денис Ганеев - студент ASTON</p>
        </div>

        <div className={styles.actions}>
          <Button onClick={onClose} variant="primary">
            Закрыть
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AboutProject;
