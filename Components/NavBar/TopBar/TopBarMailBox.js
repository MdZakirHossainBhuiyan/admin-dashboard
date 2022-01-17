import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../../styles/TopBarMailBox.module.css';

const TopBarMailBox = () => {
    return (
        <div className={styles.container}>
            <p><FontAwesomeIcon className={styles.mailBoxIcon} icon={faEnvelope} /></p>
        </div>
    );
};

export default TopBarMailBox;