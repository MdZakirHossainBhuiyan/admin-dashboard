import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../styles/Home.module.css';

const mdiIcons = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.pageTitle}>
                <h1>MDI Icons Page</h1>
            </div>
        </div>
    );
};

export default mdiIcons;