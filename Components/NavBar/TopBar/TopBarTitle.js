import styles from '../../../styles/TopBarTitle.module.css';

const TopBarTitle = () => {
    return (
        <div className={styles.container}>
            <h1>Star<span style={{color: "blue"}}>Admin</span></h1>
        </div>
    );
};

export default TopBarTitle;