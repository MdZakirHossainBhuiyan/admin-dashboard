import styles from '../../styles/SelectCategoryModal.module.css';

const SelectCategoryModal = () => {
    const {selectCategoryModal, selectCategoryContent, hrStyle, selectCategoryTitle, content, title} = styles;

    return (
        <div className={selectCategoryModal}>
            <p className={selectCategoryTitle}>Select category</p>
            <hr className={hrStyle} />

            <div className={selectCategoryContent}>
                <p className={title}>Bootstrap Bundle</p>
                <p className={content}>This is a Bundle featuring 16 unique dashboards</p>
            </div>
            <hr className={hrStyle} />

            <div className={selectCategoryContent}>
                <p className={title}>Angular Bundle</p>
                <p className={content}>Everything you’ll ever need for your Angular projects</p>
            </div>
            <hr className={hrStyle} />

            <div className={selectCategoryContent}>
                <p className={title}>VUE Bundle</p>
                <p className={content}>Bundle of 6 Premium Vue Admin Dashboard</p>
            </div>
            <hr className={hrStyle} />

            <div className={selectCategoryContent}>
                <p className={title}>React Bundle</p>
                <p className={content}>Bundle of 8 Premium React Admin Dashboard</p>
            </div>
        </div>
    );
};

export default SelectCategoryModal;