import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../../styles/Notification.module.css';

const Notification = () => {
    return (
        <div className={styles.container}>
            <p>N<FontAwesomeIcon icon={faBell} /></p>
        </div>
    );
};

export default Notification;