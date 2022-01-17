import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../styles/Home.module.css';

const dropdown = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.pageTitle}>
                <h1>Dropdown Page</h1>
            </div>
        </div>
    );
};

export default dropdown;