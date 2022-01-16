import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../../styles/TopBarCalender.module.css';

const TopBarCalender = () => {
    return (
        <div className={styles.container}>
            <button className={styles.calenderButton}>c</button>
            {/* <FontAwesomeIcon icon={faCalendarAlt} /> */}
            <input className={styles.calenderInput} type="text" />
        </div>
    );
};

export default TopBarCalender;