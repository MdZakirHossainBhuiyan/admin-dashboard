import { faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from '../../../styles/UIElements.module.css';
import TableList from './TableList';

const Tables = () => {
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
            <button onClick={handleLinkList} className={styles.dashboardLinkButton}><FontAwesomeIcon className={styles.dashboardIcon} icon={faTable} /> <span>Tables</span></button>

            {
                showList && <TableList />
            }
        </div>
    );
};

export default Tables;