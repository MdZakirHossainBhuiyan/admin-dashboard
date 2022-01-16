import Link from 'next/link';
import styles from '../../../styles/UIElementsList.module.css';

const FormElementsList = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.uiList}>
                <Link href="/formElement/basicElements"><a><li>Basic Elements</li></a></Link>
            </ul>
        </div>
    );
};

export default FormElementsList;