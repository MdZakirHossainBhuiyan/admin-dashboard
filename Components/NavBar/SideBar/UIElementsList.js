import Link from 'next/link';
import styles from '../../../styles/UIElementsList.module.css';

const UIElementsList = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.uiList}>
                <Link href="/uiElements/buttons"><a><li>Buttons</li></a></Link>
                <Link href="/uiElements/dropdown"><a><li>Dropdowns</li></a></Link>
                <Link href="/uiElements/typography"><a><li>Typography</li></a></Link>
            </ul>
        </div>
    );
};

export default UIElementsList;