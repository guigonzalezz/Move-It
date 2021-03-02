import styles from '../styles/components/MenuBar.module.css';

export function MenuBar() {

    return (
        <div>
            <div className={styles.menuBar}>
                <img src="icons/logo.svg" alt="moveit logo"/>
                <img src="icons/home.svg" alt="home logo"/>
                <img src="icons/badge.svg" alt="badge logo"/>
            </div>
        </div>
    );
}