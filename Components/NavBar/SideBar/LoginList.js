import Link from 'next/link';
import styles from '../../../styles/UIElementsList.module.css';

const LoginList = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.uiList}>
                <Link href="/userPages/login"><a><li>Login</li></a></Link>
            </ul>
        </div>
    );
};

export default LoginList;