import React from "react";
import styles from "./CovidStuffPage.module.css";



const CovidStuffPage = () => {
  return (
    <div className={styles.ThirdStep}>
      <h3 className={styles.LeftHeader}>Covid Stuff</h3>
      <div className={styles.RightPage}>
        <h3 className={styles.RightHeader}>Redberry Covid Policies</h3>
        <p className={styles.RightBody}>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications {">"} Zoom meetings. Both on the fun and
          productivity scales.
        </p>
      </div>
      <form className={styles.WorkLocation}>
        <p className={styles.Location}>how would you prefer to work?</p>
         {" "}
        <input
          className={styles.OfficeButton}
          type="radio"
          value="From Sairme Office"
          name="location"
        />
        <label className={styles.Office}>From Sairme Office</label> <br />
        <input
          className={styles.HomeButton}
          type="radio"
          value="From Home"
          name="location"
        />
        <label className={styles.Home}>From Home</label>
        <br />
        <input
          className={styles.HybridButton}
          type="radio"
          value="Hybrid"
          name="location"
        />
        <label className={styles.Hybrid}>Hybrid</label>
        <br />
      </form>
      <form>
        <p className={styles.Contact}>Did you contact covid 19? :(</p>
         {" "}
        <input
          className={styles.YesButton}
          type="radio"
          value="Yes"
          name="Contact"
        />
        <label className={styles.Yes}>Yes</label> <br />
        <input
          className={styles.NoButton}
          type="radio"
          value="No"
          name="Contact"
        />
        <label className={styles.No}>No</label>
        <br />
      </form>

      <form>
        <p className={styles.When}>When?</p>
        <input
          className={styles.DateOfCovid}
          type="date"
        />
      </form>

      <form>
        <p className={styles.Vaccinate}>Have you been vaccinated?</p>
        <input
          className={styles.VaccinatedButton}
          type="radio"
          value="Yes"
          name="Vaccinate"
        />
        <label className={styles.Vaccinated}>Yes</label> <br />
        <input
          className={styles.NotVaccinatedButton}
          type="radio"
          value="No"
          name="Vaccinate"
        />
        <label className={styles.NotVaccinated}>No</label>
        <br />
      </form>
      <form>
        <p className={styles.LastVaccine}>
          When did you get your last covid vaccine?
        </p>
        <input
          className={styles.DateOfVaccine}
          type="date"
          value="Date"
        />
      </form>

    </div>
  );
};

export default CovidStuffPage;
