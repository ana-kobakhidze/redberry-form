import React, { useState } from "react";
import styles from "./ButtonForSteps.module.css";

import { PAGES } from "../../Constants/CONSTANTS";

const ButtonsForSteps = ({ step, setPageCounter, validated }) => {
  const [errorMessage, setErrorMessage] = useState(false)
  let style;
  switch (step) {
    case PAGES.FIRST_STEP:
      style = {
        position: "absolute",
        top: "878px",
        left: "341px",
      };
      break;
    case PAGES.SECOND_STEP:
      style = {
        position: "absolute",
        top: "878px",
        left: "308px",
      };
      break;
    case PAGES.THIRD_STEP:
      style = {
        position: "absolute",
        top: " 1289px",
        left: "267px",
      };
      break;
    case PAGES.FOURTH_STEP:
      style = {
        position: "absolute",
        top: "991px",
        left: "304px",
      };
      break;
    default:
      break;
  }

 const handleNextClick = () => {
   if(step === PAGES.FIRST_STEP && validated.firstStep){
    return setPageCounter((prev) => prev + 1)
   }else if(step === PAGES.SECOND_STEP && validated.secondStep){
    return setPageCounter((prev) => prev + 1)
   }else if(step === PAGES.SECOND_STEP && validated.secondStep === false){
    setErrorMessage(true)
   }
   else if(step === PAGES.THIRD_STEP && validated.thirdStep){
    return setPageCounter((prev) => prev + 1)
   }else if(step === PAGES.FOURTH_STEP && validated.fourthStep){
    return setPageCounter((prev) => prev + 1)
   }else{  return null }
  
 }

  return (
    <div style={style}>
      <div className={styles.Wraper}>
        <span
          className={styles.Previous}
          onClick={() =>
            step > PAGES.WELCOME_PAGE
              ? setPageCounter((prev) => prev - 1)
              : null
          }
        />
        <button
          className={styles.FirstStep}
          onClick={() =>
            validated.firstStep && setPageCounter(PAGES.FIRST_STEP)
          }
          style={{ opacity: step >= PAGES.FIRST_STEP && "1" }}
        />
        <button
          className={styles.SecondStep}
          onClick={() =>
            (validated.firstStep || validated.secondStep) && setPageCounter(PAGES.SECOND_STEP)
          }
          style={{ opacity: step >= PAGES.SECOND_STEP && "1" }}
        />
        <button
          className={styles.ThirdStep}
          onClick={() =>
            validated.secondStep ||
            (validated.thirdStep && setPageCounter(PAGES.THIRD_STEP))
          }
          style={{ opacity: step >= PAGES.THIRD_STEP && "1" }}
        />
        <button
          className={styles.ForthStep}
          onClick={() =>
            validated.thirdStep ||
            (validated.fourthStep && setPageCounter(PAGES.FOURTH_STEP))
          }
          style={{ opacity: step >= PAGES.FOURTH_STEP && "1" }}
        />
        <button
          className={styles.FifthStep}
          onClick={() =>
            validated.fourthStep && setPageCounter(PAGES.SUBMIT_PAGE)
          }
        />
        <span
          type="submit"
          className={styles.Next}
          onClick={() => handleNextClick()}
        />
      </div>
      {errorMessage && validated.secondStep === false && <p className={styles.ErrorMessage}>* add at least one skill</p>}
    </div>
  );
};

export default ButtonsForSteps;
