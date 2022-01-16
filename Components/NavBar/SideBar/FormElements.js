import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from '../../../styles/UIElements.module.css';
import FormElementsList from './FormElementsList';

const FormElements = () => {
    const [showList, setShowList] = useState(false);

    const handleLinkList = () => {
        if(showList){
            setShowList(false);
        }
        else{
            setShowList(true);
        }
    }

    return (
        <div className={styles.container}>
            <button onClick={handleLinkList} className={styles.dashboardLinkButton}><FontAwesomeIcon className={styles.dashboardIcon} icon={faListAlt} /> <span>Form elements</span></button>

            {
                showList && <FormElementsList />
            }
        </div>
    );
};

export default FormElements;