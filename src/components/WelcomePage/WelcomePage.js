import React from 'react'
import styles from './WelcomePage.module.css';

import { PAGES } from '../../Constants/CONSTANTS';


const WelcomePage = ({setPageCounter}) => {
    return (
        <div className={styles.Page}>
            <h4 className={styles.Header}>Welcome Rocketeer!</h4>
            <button className={styles.Start} onClick={() => setPageCounter(PAGES.FIRST_STEP)}>Start Questionnaire</button>
            <p className={styles.Applications} onClick={() => setPageCounter(PAGES.SUBMITED_FORMS_PAGE)}>Submitted Applications</p>
            <div className={styles.Rocketman}></div>
        </div>
    )
}

export default WelcomePage



