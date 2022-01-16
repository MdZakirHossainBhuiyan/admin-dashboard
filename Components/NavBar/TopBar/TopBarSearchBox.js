import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../../styles/TopBarSearchBox.module.css';

const TopBarSearchBox = () => {
    return (
        <div className={styles.container}>
            <p>S<FontAwesomeIcon icon={faSearch} /></p>
        </div>
    );
};

export default TopBarSearchBox;