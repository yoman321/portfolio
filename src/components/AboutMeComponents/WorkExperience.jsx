import { useState } from "react";
import Card from "../ui/Card";
import styles from "./WorkExperience.module.css";

const WORK_EXPERIENCE = ["Société Générale - Fall 2022"];
const WORK_DESCRIPTION = {
  "Société Générale - Fall 2022":
    "This was my first internship as a developer. During fall 2022 at Société Générale, I held the position of Full-Stack Developer intern which allowed me to work and complete a feature from front-end to back-end. More specifically, I had the opportunity to gain experience using Typescript React and Spring Boot. I also had the chance to use other tools to help my development process such as Git, Jira, and Jest for front-end testing." +
    "\n\n Furthermore, I had the opportunity to work with the design team for my feature. As such, I was greatly involved in the UI and UX design in order to provide the best user experience possible.",
};
const WorkExperience = () => {
  const [workDescription, setWorkDescription] = useState(
    WORK_DESCRIPTION["Société Générale - Fall 2022"]
  );
  const buttonHandler = (e) => {
    if (e in WORK_DESCRIPTION) {
      setWorkDescription(workDescription[e]);
    }
  };
  return (
    <div className={styles.main}>
      <Card>
        <section className={styles.section}>
          <h1>Work Experience</h1>
          <div className={styles.content}>
            <table>
              <tbody>
                {WORK_EXPERIENCE.map((experience) => {
                  return (
                    <tr className={styles.table} key={experience}>
                      <td>
                        <button
                          type="button"
                          onClick={(e) => {
                            return buttonHandler(e);
                          }}
                        >
                          {experience}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles["sperating-line"]} />
            <div className={styles.text}>
              <p>{workDescription}</p>
            </div>
          </div>
        </section>
      </Card>
    </div>
  );
};
export default WorkExperience;
