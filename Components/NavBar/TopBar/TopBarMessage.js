import styles from '../../../styles/TopBarMessage.module.css';

const TopBarMessage = () => {
    return (
        <div className={styles.container}>
            <h1>Good Morning, <span className={styles.welcomeText}>John Doe</span></h1>
            <p>Your performance summary this week</p>
        </div>
    );
};

export default TopBarMessage;