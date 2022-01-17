import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../styles/Home.module.css';

const basicElements = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.pageTitle}>
                <h1>Basic Form Element Page</h1>
            </div>
        </div>
    );
};

export default basicElements;