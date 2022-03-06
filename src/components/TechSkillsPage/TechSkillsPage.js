import React from "react";
import styles from "./TechSkillsPage.module.css";

import ButtonForSteps from '../ButtonsForSteps/ButtonsForSteps';

const TechSkillsPage = () => {
  return (
    <div className={styles.SecondStep}>
      <h3 className={styles.LeftHeader}>Tell us about your skills</h3>
      <div className={styles.RightPage}>
        <h3 className={styles.RightHeader}>A bit about our battles</h3>
        <p className={styles.RightBody}>
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>

      <div className={styles.DropDown}>
        <p className={styles.PlaceHolder}>Skills</p>
        <i className={styles.Arrow} />
      </div>

      <form>
      <label>
        <input
          className={styles.Duration}
          type="text"
          placeholder="Experience Duration in Years"
        />
        <input
          className={styles.AddButton}
          type="submit"
          value="Add Programming Language"
        />
        </label>
      </form>
      <div className={styles.SkillList}></div>
      <p className={styles.SelectedInfo}>PHP  Years of Experience: 3</p>
      <span className={styles.RemoveButton}/>
      {/* <ButtonForSteps style={styles.SecondStepButton}/> */}
    </div>
  );
};

export default TechSkillsPage;
