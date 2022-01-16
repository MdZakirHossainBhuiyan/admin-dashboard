import MenuButton from "./MenuButton";
import Notification from "./Notification";
import SelectCategory from "./SelectCategory";
import TopBarCalender from "./TopBarCalender";
import TopBarMailBox from "./TopBarMailBox";
import TopBarMessage from "./TopBarMessage";
import TopBarSearchBox from "./TopBarSearchBox";
import TopBarTitle from "./TopBarTitle";
import UserProfile from "./UserProfile";

import styles from '../../../styles/TopBarIndex.module.css';


const TopBarIndex = () => {
    const {container, topBarHeading, topBarProperties} = styles;

    return (
        <section className={container}>
            <div className={topBarHeading}>
                <MenuButton />
                <TopBarTitle />
            </div>
            <div className={topBarProperties}>
                <TopBarMessage />
                <SelectCategory />
                <TopBarCalender />
                <TopBarSearchBox />
                <TopBarMailBox />
                <Notification />
                <UserProfile />
            </div>
        </section>
    );
};

export default TopBarIndex;