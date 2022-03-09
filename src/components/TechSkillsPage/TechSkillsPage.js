import React, { useState, useEffect } from "react";
import styles from "./TechSkillsPage.module.css";

const TechSkillsPage = ({ stepIsValid, setStepAsValid, collectedData, setCollectedData, techSkillList }) => {
   const [data, setData] = useState(techSkillList);
  const [clicked, setClick] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [duration, setDuration] = useState();
  // const [collectedData, setCollectedData] = useState([]);
  const [submited, setSubmit] = useState();

  // useEffect(() => {
  //   axios
  //     .get("https://bootcamp-2022.devtest.ge/api/skills")
  //     .then((response) => {
  //       setData(response.data);
  //       if(techSkillList.length === 0){
  //         setTechSkillList(response.data);
  //       }
  //     })
  //     .catch((error) =>
  //       console.error(
  //         "There has been a problem with your fetch operation:",
  //         error
  //       )
  //     );
  // }, []);

  const skillClickHandler = (skill, id) => {
    setSelectedId(id);
    setSelectedSkill(skill);
    setClick(false);
  };

  const dropDownHandler = () => {
    setClick(!clicked);
    if (collectedData.length >= 1) {
      debugger
      const updatedData = techSkillList.filter(
        (d) => !collectedData.some((c) => c.id === d.id)
      );
      setData(updatedData);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedSkill !== "" && duration !== "") {
      setSubmit(true);
      const data = collectedData;
      data.push({ id: selectedId, title: selectedSkill, experience: duration });
      setDuration("");
      setSelectedSkill("");
      setCollectedData(data);
    }
    if (collectedData.length >= 1) {
      setStepAsValid({ ...stepIsValid, secondStep: true });
    }
  };

  const handleRemove = (id) => {
    const list = collectedData.filter((item) => item.id !== id);
    if (collectedData.length > 1) {
      setCollectedData(list);
    }
  };

  const durationHandler = (e) => {
    let value = e.target.value;
    ;
    setDuration(parseInt(value, 10));
  };

  let skills = [];
  data &&
  data.map((item) => {
      return skills.push(
        <li
          className={styles.SkillsItem}
          key={item.id}
          onClick={() => skillClickHandler(item.title, item.id)}
        >
          {item.title}
        </li>
      );
    });

  let selectedValues = [];
  if (collectedData.length >= 1) {
    collectedData.map((item) => {
      return selectedValues.push(
        <div className={styles.SkillList} key={item.id}>
          <p className={styles.SelectedSkillTitle}>{item.title}</p>
          <p className={styles.SelectedYears}>
            Years of Experience: {item.experience}
          </p>
          <span
            className={styles.RemoveButton}
            onClick={() => handleRemove(item.id)}
          />
        </div>
      );
    });
  }

  return (
    <div className={styles.SecondStep}>
      <h3 className={styles.LeftHeader}>Tell us about your skills</h3>
      <div className={styles.RightPage}>
        <h3 className={styles.RightHeader}>A bit about our battles</h3>
        <p className={styles.RightBody}>
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>

      <div className={styles.DropDown}>
        <p className={styles.PlaceHolder} onClick={dropDownHandler}>
          {selectedSkill === "" ? "Skills" : selectedSkill}
        </p>
        {clicked ? (
          <i className={styles.FlipedArrow} />
        ) : (
          <i className={styles.Arrow} />
        )}
        {clicked && <ul className={styles.Modal}>{skills}</ul>}
      </div>

      <form onSubmit={(e) => submitHandler(e)}>
        <label>
          <input
            className={styles.Duration}
            value={duration || ""}
            name="duration"
            autoComplete="off"
            type="text"
            placeholder="Experience Duration in Years"
            onChange={(e) => durationHandler(e)}
          />
          <input
            className={styles.AddButton}
            type="submit"
            value="Add Programming Language"
          />
        </label>
      </form>

      {selectedValues}
    </div>
  );
};

export default TechSkillsPage;
