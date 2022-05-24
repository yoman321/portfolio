import ProfilePic from "../images/some-profile-pic.jpg";
import Card from "../components/ui/Card";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <Card>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.image}>
            <img src={ProfilePic} alt="profile pic"></img>
          </div>
          <section className={styles.content}>
            <h1>Your Name</h1>
            <p>Student in Computer Science at McGill University</p>
          </section>
        </li>
      </ul>
    </Card>
  );
}
export default AboutMe;
