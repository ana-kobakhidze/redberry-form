import React, { useEffect } from "react";
import styles from "./CovidStuffPage.module.css";
import { useForm } from "react-hook-form";

const CovidStuffPage = ({ covidInfo, setCovidInfo, setValid, valid }) => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
    getValues,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (isValid) {
      setCovidInfo({ ...covidInfo, had_covid_at: getValues("had_covid_at")});
      setCovidInfo({ ...covidInfo, vaccinated_at: getValues("vaccinated_at")});
      setValid({ ...valid, thirdStep: true });
    }
  }, [isValid]);

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

        <div className={styles.WorkExperience}>
          <p className={styles.Location}>how would you prefer to work?</p> {" "}
          <input
            className={styles.OfficeButton}
            type="radio"
            checked={covidInfo.work_preference === "from_office"}
            defaultValue="From Sairme Office"
            {...register("work_preference", {
              required: "* select at least one option",
            })}
            onClick={() =>
              setCovidInfo({
                ...covidInfo,
                work_preference: "from_office",
              })
            }
          />
          <label className={styles.Office}>From Sairme Office</label>
          <input
            className={styles.HomeButton}
            defaultValue="From Home"
            checked={covidInfo.work_preference === "from_home"}
            type="radio"
            {...register("work_preference", {
              required: "* select at least one option",
            })}
            onClick={() =>
              setCovidInfo({ ...covidInfo, work_preference: "from_home" })
            }
          />
          <label className={styles.Home}>From Home</label>
          <input
            className={styles.HybridButton}
            type="radio"
            defaultValue="Hybrid"
            checked={covidInfo.work_preference === "hybrid"}
            {...register("work_preference", {
              required: "* select at least one option",
            })}
            onClick={() =>
              setCovidInfo({ ...covidInfo, work_preference: "hybrid" })
            }
          />
          <label className={styles.Hybrid}>Hybrid</label>
        </div>

        <div className={styles.HadCovid}>
          <p className={styles.Contact}>Did you contact covid 19? :(</p> {" "}
          <input
            className={styles.YesButton}
            type="radio"
            defaultValue= {true}
            checked={covidInfo.had_covid === true}
            {...register("had_covid", {
              required: "* select at least one option",
            })}
            onClick={() => setCovidInfo({ ...covidInfo, had_covid: true })}

          />
          <label className={styles.Yes}>Yes</label>
          <input
            className={styles.NoButton}
            defaultValue={false}
            checked={covidInfo.had_covid === false}
            type="radio"
            {...register("had_covid", {
              required: "* select at least one option",
            })}
            onClick={() => setCovidInfo({ ...covidInfo, had_covid: false })}
          />
          <label className={styles.No}>No</label>
        </div>

        {getValues("had_covid") === 'true' && (
          <div className={styles.HadCovidAtWraper}>
            <p className={styles.When}>When?</p>
            <input
              className={styles.DateOfCovid}
              type="date"
              defaultValue={covidInfo.had_covid_at || ""}
              {...register("had_covid_at", { required: "* select Date" })}
              onBlur={() => {
                trigger("had_covid_at");
              }}
            />
            {errors.had_covid_at && (
              <p className={styles.ErrorForDate}>
                {errors.had_covid_at.message}
              </p>
            )}
          </div>
        )}

        <div
          className={
            getValues("had_covid") === 'true'
              ? styles.VaccinatedWraper
              : styles.VaccinatedDateWraper
          }
        >
          <p className={styles.Vaccinate}>Have you been vaccinated?</p>
          <input
            className={styles.VaccinatedButton}
            type="radio"
            checked={covidInfo.vaccinated === true}
            defaultValue= {true}
            {...register("vaccinated", {
              required: "* select at least one option",
            })}
            onClick={() => setCovidInfo({ ...covidInfo, vaccinated: true })}
          />
          <label className={styles.Vaccinated}>Yes</label>
          <input
            className={styles.NotVaccinatedButton}
            type="radio"
            checked={covidInfo.vaccinated === false}
            defaultValue={false}
            {...register("vaccinated", {
              required: "* select at least one option",
            })}
            onClick={() => setCovidInfo({ ...covidInfo, vaccinated: false })}
          />
          <label className={styles.NotVaccinated}>No</label>
        </div>
        
        {getValues("vaccinated") === 'true' && (
          <div
            className={
              getValues("had_covid") === 'false' && styles.LastVaccineWraper
            }
          >
            <p className={styles.LastVaccine}>
              When did you get your last covid vaccine?
            </p>
            <input
              className={styles.DateOfVaccine}
              type="date"
              defaultValue={covidInfo.vaccinated_at || ""}
              {...register("vaccinated_at", { required: "* select date" })}
              onBlur={() => {
                trigger("vaccinated_at");
              }}
            />
            {errors.vaccinated_at && (
              <p className={styles.ErrorsForVaccineDate}>
                {errors.vaccinated_at.message}
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default CovidStuffPage;
