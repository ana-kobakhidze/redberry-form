import React from "react";
import styles from "./PersonalInfoPage.module.css";
import ButtonForSteps from '../ButtonsForSteps/ButtonsForSteps';

const PersonalInfoPage = (props) => {
  console.log(props.count)

  return (
    <div className={styles.FirstStep}>
      <h3 className={styles.LeftHeader}>
        Hey, Rocketeer, what are your coordinates?
      </h3>
      <div className={styles.RightPage}>
        <h3 className={styles.RightHeader}>Redberry Origins</h3>
        <p className={styles.RightBody}>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
      <form>
        <input
          className={styles.FormName}
          placeholder="First Name"
          type="text"
          required
        />
        <input
          className={styles.FormSurname}
          placeholder="Last Name"
          type="text"
          required
        />
        <input
          className={styles.FormEmail}
          placeholder="E-mail"
          type="email"
          required
        />
        <input
          className={styles.FormNumber}
          placeholder="+ 995 5_ _ _ _"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
      </form>
      {/* <ButtonForSteps style={styles.Buttons} step={props.count} setPageCounter={props.setPageCounter}/> */}
    </div>
  );
};

export default PersonalInfoPage;
