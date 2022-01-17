import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../styles/Home.module.css';

const basicTable = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.pageTitle}>
                <h1>Basic Table Page</h1>
            </div>
        </div>
    );
};

export default basicTable;