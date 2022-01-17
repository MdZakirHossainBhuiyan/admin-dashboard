import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from '../../../styles/UIElements.module.css';

const Documentation = () => {
    return (
        <div className={styles.container}>
            <Link href="/documentation"><a><button className={styles.dashboardLinkButton}><FontAwesomeIcon className={styles.dashboardIcon} icon={faFileAlt} /> <span>Documentation</span></button></a></Link>
        </div>
    );
};

export default Documentation;