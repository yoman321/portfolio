import styles from "./PicAndName.module.css";
import ProfilePic from "../../images/some-profile-pic.jpg";
import Card from "../ui/Card";

function PicAndName() {
  return (
    <div className={styles.main}>
      <Card>
        <div className={styles.layout}>
          <div className={styles.image}>
            <img src={ProfilePic} alt="profile pic"/>
          </div>
          <div className={styles.content}>
            <section className={styles.section}>
              <h1>Your Name</h1>
              <p>Student in Computer Science at McGill University</p>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default PicAndName;
