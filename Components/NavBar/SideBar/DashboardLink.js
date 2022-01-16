import styles from '../../../styles/DashboardLink.module.css';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const DashboardLink = () => {
    return (
        <div className={styles.container}>
            <Link href="/"><a><button className={styles.dashboardLinkButton}><FontAwesomeIcon className={styles.dashboardIcon} icon={faBorderAll} /> <span>Dashboard</span></button></a></Link>
        </div>
    );
};

export default DashboardLink;