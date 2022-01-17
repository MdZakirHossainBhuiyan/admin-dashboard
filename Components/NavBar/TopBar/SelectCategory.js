import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "../../../styles/SelectCategory.module.css"

const SelectCategory = () => {
    return (
        <div className={styles.container}>
            <button className={styles.selectButton}>Select Category <span><FontAwesomeIcon className={styles.selectButtonIcon} icon={faAngleDown} /></span></button>
        </div>
    );
};

export default SelectCategory;