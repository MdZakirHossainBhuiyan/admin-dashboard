import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from '../../../styles/UIElements.module.css';
import ChartList from './ChartList';
import FormElementsList from './FormElementsList';

const Icons = () => {
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
            <button onClick={handleLinkList} className={styles.dashboardLinkButton}><FontAwesomeIcon className={styles.dashboardIcon} icon={faIcons} /> <span>Icons</span></button>

            {
                showList && <ChartList />
            }
        </div>
    );
};

export default Icons;