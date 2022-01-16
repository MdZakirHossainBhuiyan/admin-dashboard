import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/UIElements.module.css';

const Documentation = () => {
    return (
        <div className={styles.container}>
            <button className={styles.dashboardLinkButton}><FontAwesomeIcon className={styles.dashboardIcon} icon={faFileAlt} /> <span>Documentation</span></button>
        </div>
    );
};

export default Documentation;