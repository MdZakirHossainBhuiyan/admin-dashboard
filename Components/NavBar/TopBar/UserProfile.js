import Image from 'next/image';
import face from "../../../Images/face21.jpg";

import styles from '../../../styles/UserProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.userImage} src={face} alt='' />
        </div>
    );
};

export default UserProfile;