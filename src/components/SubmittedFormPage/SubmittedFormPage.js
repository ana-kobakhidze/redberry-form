import React from 'react';
import styles from './SubmittedFormPage.module.css';

const SubmittedFormPage = () => {
    return (
        <div className={styles.SubmitedPage}>
        <h3 className={styles.Header}>Submitted Applications</h3>
        <div className={styles.Dropdown}>
            <p className={styles.NumberOfForms}>1</p>
            <span className={styles.DropDownIcon}/>
        </div>
            
        </div>
    )
}

export default SubmittedFormPage
