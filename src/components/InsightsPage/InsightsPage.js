import React from "react";
import styles from "./InsightsPage.module.css";

const InsightsPage = () => {
  return (
    <div className={styles.ForthStep}>
      <h3 className={styles.LeftHeader}>What about you?</h3>
      <div className={styles.RightPage}>
        <h3 className={styles.RightHeader}>Redberrian Insights</h3>
        <p className={styles.RightBody}>
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </p>
      </div>
      <form className={styles.Activities}>
        <p className={styles.Activity}>Would you attend Devtalks and maybe also organize your own?</p>
        <input
          className={styles.YesButton}
          type="radio"
          value="Yes"
          name="Activity"
        />
        <label className={styles.Yes}>Yes</label> <br />
        <input
          className={styles.NoButton}
          type="radio"
          value="No"
          name="Activity"
        />
        <label className={styles.No}>No</label>
        <br />
      </form>
      <form>
      <label className={styles.Devtalk}>
           What would you speak about at Devtalk?
          <textarea className={styles.DevtalkTextArea}>I would...</textarea>
        </label>
      </form>

      <form>
      <label className={styles.Special} >
          Tell us something special
          <textarea className={styles.SpecialTextArea} >I...</textarea>
        </label>
      </form>

    </div>
  );
};

export default InsightsPage;
