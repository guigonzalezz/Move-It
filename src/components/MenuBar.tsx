import styles from '../styles/components/MenuBar.module.css';
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export function MenuBar() {

    const [buttonHome, setButtonHomeState] = useState(true);
    const [buttonAward, setButtonAwardState] = useState(false);

    function changeHomeButton(){
        setButtonHomeState(true);
        setButtonAwardState(false);
    }
    function changeAwardButton(){
        setButtonAwardState(true);
        setButtonHomeState(false);
    }

    useEffect(() => {
        
    }, [buttonHome, buttonAward])

    return (
        <div>
            <div className={`${styles.container}`}>
                <img src="icons/logo.svg" alt="moveit logo"/>
                <div className={styles.buttons}>
                    <button className={`${styles.selected}`}  onClick={changeHomeButton} type="button" disabled>
                        <div></div>
                        <FiHome size={32} />
                    </button>   
                    <button className={`${styles.selected}`} onClick={changeAwardButton} type="button" disabled>
                        <div></div>
                        <FiAward size={32}/>
                    </button>
                </div>
            </div>
        </div>
    );
}