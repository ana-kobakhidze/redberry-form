import React from 'react';
import styles from './SubmitPage.module.css';

import { PAGES } from '../../Constants/CONSTANTS';

const SubmitPage = ({setPageCounter, onSubmit}) => {
    // const handleClick = (e) => {
    //     e.preventDefaukt(); //
    //     setPageCounter(PAGES.THANKS_PAGE);

    // }

    return (
        <div className={styles.SubmitStep}>
        <button className={styles.SubmitButton} onClick={() => setPageCounter(PAGES.THANKS_PAGE)}>Submit</button>
        <p className={styles.BackButton} onClick={() => setPageCounter(PAGES.FOURTH_STEP)}>go back</p>
            
        </div>
    )
}

export default SubmitPage
