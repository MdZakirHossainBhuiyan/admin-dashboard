import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../../styles/TopBarSearchBox.module.css';

const TopBarSearchBox = () => {
    return (
        <div className={styles.container}>
            <p><FontAwesomeIcon className={styles.searchBoxIcon} icon={faSearch} /></p>
        </div>
    );
};

export default TopBarSearchBox;