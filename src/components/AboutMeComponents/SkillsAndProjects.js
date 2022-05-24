import styles from "./SkillsAndProjects.module.css";
import SectionCard from "../ui/SectionCard";

function SkillsAndProjects() {
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
            <tr className={styles.actions}>
              <td><button>Aim Trainer</button></td>
              <td><button>Accident Simulator</button></td>
            </tr>
            <div className={styles.vl}/>
            <div className={styles.text}>
                <p>something</p>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
export default SkillsAndProjects;
