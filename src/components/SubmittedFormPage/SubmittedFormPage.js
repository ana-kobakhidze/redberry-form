import React, { useState, useEffect } from "react";
import styles from "./SubmittedFormPage.module.css";
import "react-accessible-accordion/dist/fancy-example.css";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const SubmittedFormPage = ({techSkillList}) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://bootcamp-2022.devtest.ge/api/applications?token=dec1a792-e48e-4c62-9fb0-e5a5d412c728",
        "accept: application/json"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);
  let list = [];

  return (
    <div className={styles.SubmitedPage}>
      <h3 className={styles.Header}>Submitted Applications</h3>

      <Accordion allowZeroExpanded className={[styles.accordionContainer]}>
        {data &&
          data.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton className={[styles.Dropdown]}>
                  <p className={[styles.NumberOfForms]}>{index + 1}</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={[styles.accordionContent]}>
                <div className={[styles.PersonalInfo]}>
                  <h6 className={[styles.PersonalHead]}>
                    Personal Information
                  </h6>
                  <span className={[styles.FirstName]}>
                    <p>First Name</p>
                    <p>{item.first_name}</p>
                  </span>
                  <span className={[styles.LastName]}>
                    <p>Last Name</p>
                    <p>{item.last_name}</p>
                  </span>
                  <span className={[styles.Email]}>
                    <p>E Mail</p>
                    <p>{item.email}</p>
                  </span>
                  <span className={[styles.Phone]}>
                    <p>Phone</p>
                    <p>{item.phone}</p>
                  </span>
                </div>
                <div className={[styles.Skillset]}>
                  <h6 className={[styles.SkillsetHead]}>Skillset</h6>
                {item.skills.map(skill=> 
                 {const filteredSkill = techSkillList.find(ts=>ts.id === skill.id);
                  return(<span className={[styles.WorkExperience]}>
                    <p className={[styles.SkillTittle]}>{filteredSkill?filteredSkill.title : ''}</p>
                    <p className={[styles.SkillDuration]}>Years of Experience: {skill.experience}</p>
                  </span>)
                })}
                </div>
                <div className={[styles.CovidStuff]}>
                  <h6 className={[styles.CovidHeader]}>Covid Situation</h6>
                  <p className={[styles.CovidQuestion]}>
                    how would you prefer to work?
                  </p>

                  <span className={[styles.CovidRadio]}>
                    <input
                      className={[styles.FromOffice]}
                      type="radio"
                      checked={item.work_preference === "from_office"}
                      disabled
                    />
                    <label className={[styles.LabelOffice]}>
                      From Sairme Office
                    </label>

                    <input
                      type="radio"
                      className={[styles.FromHome]}
                      checked={item.work_preference === "from_home"}
                      disabled
                    />
                    <label className={[styles.LabelFromHome]}>From Home</label>

                    <input
                      type="radio"
                      className={[styles.Hybrid]}
                      checked={item.work_preference === "hybrid"}
                      disabled
                    />
                    <label className={[styles.LabelHybrid]}>Hybrid</label>
                  </span>

                  <span className={[styles.HadCovidTopic]}>
                    <p className={[styles.HadCovidQuestion]}>
                      Did you have covid 19?
                    </p>
                    <input
                      type="radio"
                      className={[styles.YesCovidButton]}
                      checked={item.had_covid === true}
                      disabled
                    />
                    <label className={[styles.YesCovidLabel]}>Yes</label>

                    <input
                      type="radio"
                      className={[styles.NoCovidButton]}
                      checked={item.had_covid === false}
                      disabled
                    />
                    <label className={[styles.NoCovidLabel]}>No</label>
                  </span>

                  <span className={[styles.DateOfCovid]}>
                    <p className={[styles.HadCovidAtQuestion]}>
                      When did you have covid 19?
                    </p>
                    <input
                      type="date"
                      className={[styles.DateInput]}
                      defaultValue={item.had_covid_at}
                      disabled
                    />
                    <svg
                      className={[styles.DatePicker]}
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7H17M13 1V3M5 1V3M2 3H16C16.5523 3 17 3.44772 17 4V18C17 18.5523 16.5523 19 16 19H2C1.44772 19 1 18.5523 1 18V4C1 3.44772 1.44772 3 2 3ZM13 15H13.002V15.002H13V15ZM9 15H9.002V15.002H9V15ZM5 15H5.002V15.002H5V15ZM13 11H13.002V11.002H13V11ZM9 11H9.002V11.002H9V11ZM5 11H5.002V11.002H5V11Z"
                        stroke="#FE3B1F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>

                  <span className={[styles.VaccinatedTopic]}>
                    <p className={[styles.VaccinatedTopicQuestion]}>
                      Have you been vaccinated?
                    </p>
                    <span className={[styles.VaccinatedRadio]}>
                      <input
                        type="radio"
                        className={[styles.yesVaccineButton]}
                        checked={item.vaccinated === true}
                        disabled
                      />
                      <label className={[styles.YesVaccinatedLabel]}>Yes</label>

                      <input
                        types="radio"
                        className={[styles.VaccineNonButton]}
                        checked={item.vaccinated === false}
                        disabled
                      />
                      <label className={[styles.NoVaccinatedLabel]}>No</label>
                    </span>
                  </span>

                  <span className={[styles.VaccinatedAtTopic]}>
                    <p className={[styles.VaccinatedAtQuestion]}>
                      When did you get covid vaccine?
                    </p>
                    <input
                      type="date"
                      className={[styles.VaccinatedDateInput]}
                      defaultValue={item.vaccinated_at}
                      disabled
                    />
                    <svg
                      className={[styles.VaccinatedDatePicker]}
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7H17M13 1V3M5 1V3M2 3H16C16.5523 3 17 3.44772 17 4V18C17 18.5523 16.5523 19 16 19H2C1.44772 19 1 18.5523 1 18V4C1 3.44772 1.44772 3 2 3ZM13 15H13.002V15.002H13V15ZM9 15H9.002V15.002H9V15ZM5 15H5.002V15.002H5V15ZM13 11H13.002V11.002H13V11ZM9 11H9.002V11.002H9V11ZM5 11H5.002V11.002H5V11Z"
                        stroke="#FE3B1F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className={[styles.Insights]}>
                  <h6 className={[styles.InsightHeader]}>Insigts</h6>
                  <p className={[styles.InsightQuestion]}>
                    Would you attend Devtalks and maybe also organize your own?
                  </p>
                  <span className={[styles.InsightRadio]}>
                    <input
                      type="radio"
                      className={[styles.YesButton]}
                      checked={item.will_organize_devtalk === true}
                      disabled
                    />
                    <label className={[styles.YesLabel]}>Yes</label>

                    <input
                      type="radio"
                      className={[styles.NoButton]}
                      checked={item.will_organize_devtalk === false}
                      disabled
                    />
                    <label className={[styles.NoLabel]}>No</label>
                  </span>
                </div>
                <div className={[styles.DevTalkTopic]}>
                  <p className={[styles.DevTalkTopicQuestion]}>
                    What would you speak about at Devtalk?
                  </p>
                  <textarea
                    className={[styles.DevTalkArea]}
                    placeholder={item.devtalk_topic}
                    disabled
                  />
                </div>
                <div className={[styles.SpecialTopic]}>
                  <p className={[styles.SpecialTopicQuestion]}>
                    Tell us somthing special
                  </p>
                  <textarea
                    className={[styles.SpecialTopicArea]}
                    placeholder={item.something_special}
                    disabled
                  />
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
      </Accordion>
      {/* <div className={styles.Dropdown}>
            <p className={styles.NumberOfForms}>1</p>
            <span className={styles.DropDownIcon}/>
        </div>
             */}
    </div>
  );
};

export default SubmittedFormPage;
