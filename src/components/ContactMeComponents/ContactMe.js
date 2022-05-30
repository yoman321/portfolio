import styles from "./ContactMe.module.css";
import Card from "../ui/Card";

function ContactMe() {
  return (
    <div className={styles.main}>
      <Card>
      <div className={styles.section}>
        <div className={styles.h1}>
          <h1>Contact Form </h1>
        </div>
        <form className={styles.form}>
          <div className={styles.control}>
            <label htmlFor="name">
              Name
              <input type="text" id="name" />
            </label>
          </div>
          <div className={styles.control}>
            <label htmlFor="email">
              Email
              <input type="text" id="email" />
            </label>
          </div>
          <div className={styles.control}>
            <label htmlFor="message">
              Message
              <textarea id="message" rows="5" />
            </label>
          </div>
        </form>
        <div className={styles.actions}>
        <button type='submit' >
            Submit
        </button>
        </div>
        </div>
      </Card>
    </div>
  );
}
export default ContactMe;
