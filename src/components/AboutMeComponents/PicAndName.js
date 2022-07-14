import styles from "./PicAndName.module.css";
import ProfilePic from "../../../public/some-profile-pic.jpg";
import Card from "../ui/Card";
import Image from "next/image";
function PicAndName() {
  return (
    <div className={styles.main}>
      <Card>
        <div className={styles.layout}>
          <div className={styles.image}>
            <Image src={ProfilePic} alt="profile pic"></Image>
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
