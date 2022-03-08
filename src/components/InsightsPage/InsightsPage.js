import React, { useEffect } from "react";
import styles from "./InsightsPage.module.css";
import { useForm } from "react-hook-form";

const InsightsPage = ({ insightInfo, setInsightInfo, valid, setValid }) => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
    getValues,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (isValid) {
      setValid({ ...valid, fourthStep: true });
      setInsightInfo({
        ...insightInfo, devtalk_topic:getValues("devtalk_topic"), something_special: getValues("something_special")
      })
    }
  },[isValid]);

  return (
    <div className={styles.ForthStep}>
      <h3 className={styles.LeftHeader}>What about you?</h3>
      <div className={styles.RightPage}>
        <h3 className={styles.RightHeader}>Redberrian Insights</h3>
        <p className={styles.RightBody}>
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </p>
      </div>

      <form className={styles.Activities}>
        <div className={styles.WillOrganizeDevtalk}>
          <p className={styles.Activity}>
            Would you attend Devtalks and maybe also organize your own?
          </p>
          <input
            className={styles.YesButton}
            type="radio"
            checked={insightInfo.will_organize_devtalk === "Yes"}
            defaultValue="Yes"
            {...register("will_organize_devtalk", {
              required: true,
            })}
            onClick={() =>
              setInsightInfo({
                ...insightInfo,
                will_organize_devtalk: "Yes",
              })
            }
          />
          <label className={styles.Yes}>Yes</label>
          <input
            className={styles.NoButton}
            type="radio"
            checked={insightInfo.will_organize_devtalk === "No"}
            defaultValue="No"
            {...register("will_organize_devtalk", {
              required: true,
            })}
            onClick={() =>
              setInsightInfo({
                ...insightInfo,
                will_organize_devtalk: "No",
              })
            }
          />
          <label className={styles.No}>No</label>
        </div>

       { getValues("will_organize_devtalk") === "Yes" &&
       <div>
        <label className={styles.Devtalk}>
          What would you speak about at Devtalk?
          </label>
          <textarea
          className={styles.DevtalkTextArea}
          placeholder= "I would..."
          defaultValue={insightInfo.devtalk_topic}
          {...register("devtalk_topic", {required: "* field is required"})}
          onBlur={()=>{
            trigger("devtalk_topic")
          }}
          />
          {errors.devtalk_topic && (<p className={styles.DevTalkError}>{errors.devtalk_topic.message}</p>)}
          </div>
       }
       <div className={getValues("will_organize_devtalk") === "Yes" ? styles.SomethingSpecialHide : styles.SomethingSpecial }>
        <label className={styles.Special}>Tell us something special</label>
          <textarea className={styles.SpecialTextArea}
          defaultValue={insightInfo.something_special}
          placeholder="I..."
          {...register("something_special", {required: "* field is required"})}
          onBlur={()=>{
            trigger("something_special")
          }}
          />
          {errors.something_special && (<p className={styles.SomethingSpecialError}>{errors.something_special.message}</p>)}
          </div>
        
      </form>
    </div>
  );
};

export default InsightsPage;
