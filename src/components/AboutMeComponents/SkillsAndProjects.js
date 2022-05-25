import styles from "./SkillsAndProjects.module.css";
import SectionCard from "../ui/SectionCard";
import { useState } from "react";

const PROJECTS_DESCRIPTION = [
   {
       id: 1,
    description: "dasdfasdfasdfasdfaasdfasdfasdasdfasdfasdfasdffasdfasdasddasdfasdfasdfasdf\nasdfasdf\n",
  },
   {
       id: 2,
    description: "1234123412341234",
  },
];

function SkillsAndProjects() {
  const [id, setId] = useState(1);

  function buttonHandler(newId) {
    console.log(newId);
    setId(newId);
    console.log(id);
  }
  return (
    <div className={styles.main}>
      <SectionCard>
        <div className={styles.section}>
          <h1>Skills</h1>
          <section>
            <h3>I have experience in these languages:</h3>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>python</li>
              <li>c#</li>
              <li>c++</li>
              <li>SQL</li>
            </ul>
            <h3>I have experience in these framework and tools: </h3>
            <ul>
              <li>React</li>
              <li>JavaFX</li>
              <li>SceneBuilder</li>
              <li>Gradle</li>
            </ul>
          </section>
        </div>
      </SectionCard>
      <SectionCard>
        <div className={styles.section}>
          <h1>Projects</h1>
          <div className={styles.content}>
            <table>
              <tbody>
                <tr className={styles.actions}>
                  <td>
                    <button onClick={() => buttonHandler(1)}>
                      Aim Trainer
                    </button>
                  </td>
                  <td>
                    <button onClick={() => buttonHandler(2)}>
                      Accident Simulator
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.vl} />
            <div className={styles.text}>
              {PROJECTS_DESCRIPTION.map(desiredId =>{
                  if (desiredId.id === id){
                    return <p key={desiredId.id}>{desiredId.description}</p>
                  }
              })}
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
export default SkillsAndProjects;
