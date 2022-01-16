import Link from 'next/link';
import styles from '../../../styles/UIElementsList.module.css';

const ChartList = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.uiList}>
                <Link href="/chart/chartJs"><a><li>ChartJs</li></a></Link>
            </ul>
        </div>
    );
};

export default ChartList;