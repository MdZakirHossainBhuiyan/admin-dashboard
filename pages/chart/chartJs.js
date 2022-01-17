import NavBar from '../../Components/NavBar/NavBar';
import styles from '../../styles/Home.module.css';

const chartJs = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.pageTitle}>
                <h1>Chart Js Page</h1>
            </div>
        </div>
    );
};

export default chartJs;