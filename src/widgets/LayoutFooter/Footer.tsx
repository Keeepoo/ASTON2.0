import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.copyright}>
                    © 2025 ASTON Homework. Все права защищены.
                </p>
                <p className={styles.description}>
                    Проект выполнен в рамках изучения React и TypeScript
                </p>
            </div>
        </footer>
    );
}

export default Footer;