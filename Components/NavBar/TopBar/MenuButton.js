import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../../styles/MenuButton.module.css';

const MenuButton = () => {
    return (
        <div>
            <button className={styles.menuBtn}><FontAwesomeIcon className={styles.menuButtonIcon} icon={faBars} /></button>
        </div>
    );
};

export default MenuButton;