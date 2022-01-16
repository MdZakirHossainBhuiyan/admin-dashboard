import Link from 'next/link';
import styles from '../../../styles/UIElementsList.module.css';

const TableList = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.uiList}>
                <Link href="/table/basicTable"><a><li>Basic table</li></a></Link>
            </ul>
        </div>
    );
};

export default TableList;