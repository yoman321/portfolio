import { useState } from "react";
import styles from "./SkillsAndProjects.module.css";
import SectionCard from "../ui/SectionCard";

const PROJECTS_DESCRIPTION = [
  {
    id: 1,
    description:
      "This was my first attemp in creating a game in Java. The project is fully build in Java with JavaFX as the library and Scene Builder as the GUI tool. " +
      "\n\n There are 3 difficulties for this game and the goal is click on as many targets as possible before they disappear",
  },
  {
    id: 2,
    description: 'This was a Cegep project made in order to bring awareness to the dangers of collisions and falling objects in everyday life. It was built using Java, JavaFX as the library, and Scene Builder as a GUI tool.' +
    '\n\n In this project, we have created 3 simulations: falling object, vehicles collision, and speeding vehicle.'
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
        <div className={styles.sectionText}>
          <h1>Projects</h1>
          <div className={styles.content}>
            <table>
              <tbody>
                <tr className={styles.actions}>
                  <td>
                    <button type="button" onClick={() => buttonHandler(1)}>
                      Aim Trainer
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => buttonHandler(2)}>
                      Accident Simulator
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.vl} />
            <div className={styles.text}>
              {PROJECTS_DESCRIPTION.map((desiredId) => {
                if (desiredId.id === id) {
                  return <p key={desiredId.id}>{desiredId.description}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
export default SkillsAndProjects;
