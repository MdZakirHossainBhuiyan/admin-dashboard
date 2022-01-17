import Link from 'next/link';
import styles from '../../styles/UIElementsList.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.uiList}>
                <Link href="/userPages/login"><a>Login Page</a></Link>
            </ul>

            <Link href="/userPages/registration"><a><button>Create Account</button></a></Link>
            <Link href="/"><a><button>Back to Dashboard</button></a></Link>
        </div>
    );
};

export default Login;