import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/UIElements.module.css';
import { useState } from 'react';
import UIElementsList from './UIElementsList';

const UIElements = () => {
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
            <button onClick={handleLinkList} className={styles.dashboardLinkButton}><FontAwesomeIcon className={styles.dashboardIcon} icon={faSquare} /> <span>UI Elements</span></button>

            {
                showList && <UIElementsList />
            }
        </div>
    );
};

export default UIElements;