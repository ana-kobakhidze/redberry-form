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
            checked={covidInfo.work_preference === "From Sairme Office"}
            defaultValue="From Sairme Office"
            {...register("work_preference", {
              required: "* select at least one option",
            })}
            onClick={() =>
              setCovidInfo({
                ...covidInfo,
                work_preference: "From Sairme Office",
              })
            }
          />
          <label className={styles.Office}>From Sairme Office</label>
          <input
            className={styles.HomeButton}
            defaultValue="From Home"
            checked={covidInfo.work_preference === "From Home"}
            type="radio"
            {...register("work_preference", {
              required: "* select at least one option",
            })}
            onClick={() =>
              setCovidInfo({ ...covidInfo, work_preference: "From Home" })
            }
          />
          <label className={styles.Home}>From Home</label>
          <input
            className={styles.HybridButton}
            type="radio"
            defaultValue="Hybrid"
            checked={covidInfo.work_preference === "Hybrid"}
            {...register("work_preference", {
              required: "* select at least one option",
            })}
            onClick={() =>
              setCovidInfo({ ...covidInfo, work_preference: "Hybrid" })
            }
          />
          <label className={styles.Hybrid}>Hybrid</label>
        </div>

        <div className={styles.HadCovid}>
          <p className={styles.Contact}>Did you contact covid 19? :(</p> {" "}
          <input
            className={styles.YesButton}
            type="radio"
            defaultValue="Yes"
            checked={covidInfo.had_covid === "Yes"}
            {...register("had_covid", {
              required: "* select at least one option",
            })}
            onClick={() => setCovidInfo({ ...covidInfo, had_covid: "Yes" })}
          />
          <label className={styles.Yes}>Yes</label>
          <input
            className={styles.NoButton}
            defaultValue="No"
            checked={covidInfo.had_covid === "No"}
            type="radio"
            {...register("had_covid", {
              required: "* select at least one option",
            })}
            onClick={() => setCovidInfo({ ...covidInfo, had_covid: "No" })}
          />
          <label className={styles.No}>No</label>
        </div>

        {getValues("had_covid") === "Yes" && (
          <div className={styles.HadCovidAtWraper}>
            <p className={styles.When}>When?</p>
            <input
              className={styles.DateOfCovid}
              type="date"
              defaultValue={covidInfo.had_covid_at || ""}
              {...register("had_covid_at", { required: "* select Date" })}
              onChange={(e) => {
                setCovidInfo({ ...covidInfo, had_covid_at: e.target.value });
              }}
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
            getValues("had_covid") === "Yes"
              ? styles.VaccinatedWraper
              : styles.VaccinatedDateWraper
          }
        >
          <p className={styles.Vaccinate}>Have you been vaccinated?</p>
          <input
            className={styles.VaccinatedButton}
            type="radio"
            checked={covidInfo.vaccinated === "Yes"}
            defaultValue="Yes"
            {...register("vaccinated", {
              required: "* select at least one option",
            })}
            onClick={() => setCovidInfo({ ...covidInfo, vaccinated: "Yes" })}
          />
          <label className={styles.Vaccinated}>Yes</label>
          <input
            className={styles.NotVaccinatedButton}
            type="radio"
            checked={covidInfo.vaccinated === "No"}
            defaultValue="No"
            {...register("vaccinated", {
              required: "* select at least one option",
            })}
            onClick={() => setCovidInfo({ ...covidInfo, vaccinated: "No" })}
          />
          <label className={styles.NotVaccinated}>No</label>
        </div>
        
        {getValues("vaccinated") === "Yes" && (
          <div
            className={
              getValues("had_covid") === "No" && styles.LastVaccineWraper
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
              onChange={(e) => {
                setCovidInfo({ ...covidInfo, vaccinated_at: e.target.value });
              }}
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
