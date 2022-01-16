import Link from 'next/link';
import styles from '../../../styles/UIElementsList.module.css';

const UIElementsList = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.uiList}>
                <Link href="/uiElement/button"><a><li>Buttons</li></a></Link>
                <Link href="/uiElement/Dropdowns"><a><li>Dropdowns</li></a></Link>
                <Link href="/uiElement/Typography"><a><li>Typography</li></a></Link>
            </ul>
        </div>
    );
};

export default UIElementsList;