import React, {useEffect} from "react";
import styles from "./PersonalInfoPage.module.css";
import { useForm } from "react-hook-form";

const PersonalInfoPage = ({ personalInfo, valid, setPersonalInfo, setValid }) => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
    getValues,
  } = useForm({mode: "onChange"});



useEffect(() => {
if(isValid){
  setPersonalInfo({
    first_name: getValues("first_name"),
    last_name: getValues("last_name"),
    email: getValues("email"),
    phone: getValues("phone")});
    setValid({...valid, firstStep: true})
  };
},[isValid])


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
      <form >
        <input
          type="text"
          className={errors.first_name ?  styles.InvalidFormName : styles.FormName }
          defaultValue={personalInfo.first_name || ''}
          autoComplete="off"
          placeholder="First Name"
          {...register("first_name", {
            required: "* first name is required",
            minLength: {
              value: 2,
              message: "* first name should include 2 or more characters",
            },
          })}
          onBlur={() => {
            trigger("first_name");
          }}
          
        />
      
        {errors.first_name && (
          <p className={styles.ErrorForName}>{errors.first_name.message}</p>
        )}


        <input
          className={errors.last_name ? styles.InvalidFormSurname : styles.FormSurname }
          placeholder="Last Name"
          defaultValue={personalInfo.last_name || ''}
          autoComplete="off"
          type="text"
          {...register("last_name", {
            required: "* last name is required",
            minLength: {
              value: 2,
              message: "* last name should include 2 or more characters",
            },
          })}
          onBlur={() => {
            trigger("last_name");
          }}
          
        />
        {errors.last_name && (
          <p className={styles.ErrorForSurname}>{errors.last_name.message}</p>
        )}
        
        <input
          className={errors.email ? styles.InvalidFormEmail : styles.FormEmail}
          placeholder="E-mail"
          defaultValue={personalInfo.email || ''}
          autoComplete="off"
          type="email"
          {...register("email", {
            required: "* Email is required",
            pattern: {
              value:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
              message: "* Invalid email address",
            },
          })}
          onBlur={() => {
            trigger("email");
          }}
        />
        {errors.email && (
          <p className={styles.ErrorForEmail}>{errors.email.message}</p>
        )}
        <input
          className={errors.phone ? styles.InvalidPhone : styles.Phone}
          placeholder="+ 995 5_ _ _ _"
          autoComplete="off"
          type="tel"
          defaultValue={personalInfo.phone || ''}
          {...register("phone", {
            required: false,
            pattern: {
              value: /^\+995\d{9}$/,
              message: "* Invalid phone number",
            },
          })}
          onBlur={() => {
            trigger("phone");
          }}
        />
        {errors.phone && (
          <p className={styles.ErrorForPhone}>{errors.phone.message}</p>
        )}
      </form>
      
      {/* <ButtonForSteps style={styles.Buttons} step={props.count} setPageCounter={props.setPageCounter}/> */}
    </div>
  );
};

export default PersonalInfoPage;
