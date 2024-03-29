import styles from "./PicAndName.module.css";
import ProfilePic from "../../images/profile-pic.jpg";
import Card from "../ui/Card";

const PicAndName = () => {
  return (
    <div className={styles.main}>
      <Card>
        <div className={styles.layout}>
          <div className={styles.image}>
            <img src={ProfilePic} alt="profile pic" />
          </div>
          <div className={styles.content}>
            <section className={styles.section}>
              <h1>Philip Luo</h1>
              <p>Student in Computer Science at McGill University</p>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default PicAndName;
