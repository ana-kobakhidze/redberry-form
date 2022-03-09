import React, { useEffect } from "react";
import styles from "./SubmitPage.module.css";
import axios from "axios";
import { PAGES } from "../../Constants/CONSTANTS";

const SubmitPage = ({
  setPageCounter,
  personalInfo,
  techSkillInfo,
  covidInfo,
  insightInfo,
  setTechSKillInfo,
  setPersonalInfo,
}) => {
  useEffect(() => {
    let skills = [...techSkillInfo];
    skills.forEach((item) => delete item.title);
    setTechSKillInfo(skills);
  }, []);

  const data = {
    token: "2b9e57c2-b2ce-4d99-818f-b387ac55d6ba",
    first_name: personalInfo.first_name,
    last_name: personalInfo.last_name,
    email: personalInfo.email,
    phone: personalInfo.phone,
    skills: techSkillInfo,
    work_preference: covidInfo.work_preference,
    had_covid: covidInfo.had_covid,
    had_covid_at: covidInfo.had_covid_at,
    vaccinated: covidInfo.vaccinated,
    vaccinated_at: covidInfo.vaccinated_at,
    will_organize_devtalk: insightInfo.will_organize_devtalk,
    devtalk_topic: insightInfo.devtalk_topic,
    something_special: insightInfo.something_special,
  };

  let updatedData = { ...data };
  if (personalInfo.phone === "") {
    delete updatedData.phone;
  }
  if (covidInfo.had_covid === false) {
    delete updatedData.had_covid_at;
  }
  if (covidInfo.vaccinated === false) {
    delete updatedData.vaccinated_at;
  }
  if (insightInfo.will_organize_devtalk === false) {
    delete updatedData.devtalk_topic;
  }

  const submitHandler = () => {
    setPageCounter(PAGES.THANKS_PAGE);
    axios
      .post("https://bootcamp-2022.devtest.ge/api/application", updatedData, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => console.log(response));
  };

  return (
    <div className={styles.SubmitStep}>
      <button className={styles.SubmitButton} onClick={submitHandler}>
        Submit
      </button>
      <p
        className={styles.BackButton}
        onClick={() => setPageCounter(PAGES.FOURTH_STEP)}
      >
        go back
      </p>
    </div>
  );
};

export default SubmitPage;
