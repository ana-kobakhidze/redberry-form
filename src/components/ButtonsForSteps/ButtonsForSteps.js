import React from "react";
import styles from "./ButtonForSteps.module.css";

import { PAGES } from '../../Constants/CONSTANTS';

const ButtonsForSteps = ({ step, setPageCounter }) => {
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

  return (
    <div style={style}>
      <div className={styles.Wraper}>
        <span
          className={styles.Previous}
          onClick={() => (step > PAGES.WELCOME_PAGE ? setPageCounter((prev) => prev - 1) : null)}
        />
        <button
          className={styles.FirstStep}
          onClick={() => setPageCounter(PAGES.FIRST_STEP)}
          style={{ opacity: step >= PAGES.FIRST_STEP && "1" }}
        />
        <button
          className={styles.SecondStep}
          onClick={() => setPageCounter(PAGES.SECOND_STEP)}
          style={{ opacity: step >= PAGES.SECOND_STEP && "1" }}
        />
        <button
          className={styles.ThirdStep}
          onClick={() => setPageCounter(PAGES.THIRD_STEP)}
          style={{ opacity: step >= PAGES.THIRD_STEP && "1" }}
        />
        <button
          className={styles.ForthStep}
          onClick={() => setPageCounter(PAGES.FOURTH_STEP)}
          style={{ opacity: step >= PAGES.FOURTH_STEP && "1" }}
        />
        <button
          className={styles.FifthStep}
          onClick={() => setPageCounter(PAGES.SUBMIT_PAGE)}
        />
        <span
          className={styles.Next}
          onClick={() => (step > PAGES.WELCOME_PAGE ? setPageCounter((prev) => prev + 1) : null)}
        />
      </div>
    </div>
  );
};

export default ButtonsForSteps;
