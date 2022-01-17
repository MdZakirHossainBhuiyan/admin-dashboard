import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import styles from "../../../styles/SelectCategory.module.css"
import SelectCategoryModal from '../../Moduls/SelectCategoryModal';

const SelectCategory = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        showModal?setShowModal(false):setShowModal(true);
    }

    return (
        <>
            <div className={styles.container}>
                <button onClick={handleModal} className={styles.selectButton}>Select Category <span><FontAwesomeIcon className={styles.selectButtonIcon} icon={faAngleDown} /></span></button>
            </div>
            <div className={styles.modalArea}>
                {
                    showModal && <SelectCategoryModal />
                }
            </div>
        </>
    );
};

export default SelectCategory;