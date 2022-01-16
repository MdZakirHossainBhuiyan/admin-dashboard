import styles from '../../../styles/SideBarIndex.module.css';
import Charts from './Charts';
import DashboardLink from './DashboardLink';
import Documentation from './Documentation';
import FormElements from './FormElements';
import Icons from './Icons';
import Tables from './Tables';
import UIElements from './UIElements';
import UserPages from './UserPages';

const SideBarIndex = () => {
    return (
        <section className={styles.container}>
            <DashboardLink />
            <p>UI ELEMENTS</p>
            <UIElements />
            <p>FORMS AND DATA</p>
            <FormElements />
            <Charts />
            <Tables />
            <Icons />
            <p>pages</p>
            <UserPages />
            <p>help</p>
            <Documentation />
        </section>
    );
};

export default SideBarIndex;