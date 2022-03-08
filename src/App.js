import React, { useState } from "react";
import styles from "./App.module.css";

import WelcomePage from "./components/WelcomePage/WelcomePage";
import SubmittedFormPage from "./components/SubmittedFormPage/SubmittedFormPage";
import ThanksPage from "./components/ThanksPage/ThanksPage";
import SubmitPage from "./components/SubmitPage/SubmitPage";
import InsightsPage from "./components/InsightsPage/InsightsPage";
import CovidStuffPage from "./components/CovidStuffPage/CovidStuffPage";
import PersonalInfoPage from "./components/PersonalInfoPage/PersonalInfoPage";
import TechSkillsPage from "./components/TechSkillsPage/TechSkillsPage";
import ButtonForSteps from "./components/ButtonsForSteps/ButtonsForSteps";

import { PAGES } from "./Constants/CONSTANTS";

const App = () => {
  const [pageCounter, setPageCounter] = useState(0);
  const [valid, setValid] = useState({
    firstStep: false,
    secondStep: false,
    thirdStep: false,
    fourthStep: false,
  });
  //1st step lifted-up state
  const [personalInfo, setPersonalInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  // 2nd step lifted-up state
  const [techSkillInfo, setTechSKillInfo] = useState([]);

  //3rd step lifted-up state
  const [covidInfo, setCovidInfo] = useState({
    work_preference: "From Sairme Office",
    had_covid: "No",
    had_covid_at: "",
    vaccinated: "No",
    vaccinated_at: "",
  });

  //4rth step lifted-up state
  const [insightInfo, setInsightInfo] = useState({
    will_organize_devtalk: "No",
    devtalk_topic: "",
    something_special: "",
  });
  
console.log(insightInfo)
  // rendering components by count number
  const pageHandler = () => {
    switch (pageCounter) {
      case PAGES.WELCOME_PAGE:
        return <WelcomePage setPageCounter={setPageCounter} />;
      case PAGES.FIRST_STEP:
        return (
          <PersonalInfoPage
            personalInfo={personalInfo}
            valid={valid}
            setValid={setValid}
            setPersonalInfo={setPersonalInfo}
          />
        );
      case PAGES.SECOND_STEP:
        return (
          <TechSkillsPage
            count={pageCounter}
            stepIsValid={valid}
            setStepAsValid={setValid}
            collectedData={techSkillInfo}
            setCollectedData={setTechSKillInfo}
          />
        );
      case PAGES.THIRD_STEP:
        return (
          <CovidStuffPage
            count={pageCounter}
            covidInfo={covidInfo}
            setCovidInfo={setCovidInfo}
            valid={valid}
            setValid={setValid}
          />
        );
      case PAGES.FOURTH_STEP:
        return (
          <InsightsPage
            count={pageCounter}
            valid={valid}
            setValid={setValid}
            insightInfo={insightInfo}
            setInsightInfo={setInsightInfo}
          />
        );
      case PAGES.SUBMIT_PAGE:
        return (
          <SubmitPage count={pageCounter} setPageCounter={setPageCounter} />
        );
      case PAGES.THANKS_PAGE:
        return <ThanksPage count={pageCounter} />;
      case PAGES.SUBMITED_FORMS_PAGE:
        return <SubmittedFormPage />;
      default:
        break;
    }
  };

  return (
    <div className={styles.App}>
      {pageHandler()}
      {pageCounter > PAGES.WELCOME_PAGE && pageCounter < PAGES.SUBMIT_PAGE ? (
        <ButtonForSteps
          validated={valid}
          style={styles.Buttons}
          step={pageCounter}
          setPageCounter={setPageCounter}
        />
      ) : null}
    </div>
  );
};

export default App;
