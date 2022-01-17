import Link from 'next/link';
import styles from '../../../styles/UIElementsList.module.css';

const IconList = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.uiList}>
                <Link href="/icon/mdiIcons"><a><li>mdi Icons</li></a></Link>
            </ul>
        </div>
    );
};

export default IconList;