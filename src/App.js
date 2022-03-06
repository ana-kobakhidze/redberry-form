import React, { useState } from "react";
import styles from "./App.module.css";

import WelcomePage from "./components/WelcomePage/WelcomePage";
import SubmittedFormPage from './components/SubmittedFormPage/SubmittedFormPage';
import ThanksPage from "./components/ThanksPage/ThanksPage";
import SubmitPage from "./components/SubmitPage/SubmitPage";
import InsightsPage from "./components/InsightsPage/InsightsPage";
import CovidStuffPage from "./components/CovidStuffPage/CovidStuffPage";
import PersonalInfoPage from "./components/PersonalInfoPage/PersonalInfoPage";
import TechSkillsPage from "./components/TechSkillsPage/TechSkillsPage";
import ButtonForSteps from "./components/ButtonsForSteps/ButtonsForSteps";

import { PAGES } from './Constants/CONSTANTS';

const App = () => {
  const [pageCounter, setPageCounter] = useState(0);
  console.log(pageCounter);
  // rendering components by count number
  const pageHandler = () => {
    switch (pageCounter) {
      case PAGES.WELCOME_PAGE:
        return <WelcomePage setPageCounter={setPageCounter} />;
      case PAGES.FIRST_STEP:
        return <PersonalInfoPage count={pageCounter} />;
      case PAGES.SECOND_STEP:
        return <TechSkillsPage count={pageCounter} />;
      case PAGES.THIRD_STEP:
        return <CovidStuffPage count={pageCounter} />;
      case PAGES.FOURTH_STEP:
        return <InsightsPage count={pageCounter} />;
      case PAGES.SUBMIT_PAGE:
        return <SubmitPage count={pageCounter} setPageCounter={setPageCounter}/>;
      case PAGES.THANKS_PAGE:
        return <ThanksPage count={pageCounter}  />;
      case PAGES.SUBMITED_FORMS_PAGE:
        return <SubmittedFormPage />
      default:
        break;
    }
  };

  return (
    <div className={styles.App}>
      {pageHandler()}
      {pageCounter > PAGES.WELCOME_PAGE && pageCounter < PAGES.SUBMIT_PAGE ? (
        <ButtonForSteps
          style={styles.Buttons}
          step={pageCounter}
          setPageCounter={setPageCounter}
        />
      ) : null}
    </div>
  );
};

export default App;
