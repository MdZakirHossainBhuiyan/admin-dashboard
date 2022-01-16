import styles from '../../../styles/SideBarIndex.module.css';
import DashboardLink from './DashboardLink';
import UIElements from './UIElements';

const SideBarIndex = () => {
    return (
        <section className={styles.container}>
            <DashboardLink />
            <p>UI ELEMENTS</p>
            <UIElements />
            <p>FORMS AND DATA</p>
            <p>pages</p>
            <p>help</p>
        </section>
    );
};

export default SideBarIndex;