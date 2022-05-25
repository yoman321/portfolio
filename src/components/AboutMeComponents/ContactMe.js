import styles from "./ContactMe.module.css";
import SectionCard from "../ui/SectionCard";
import { Link } from "react-router-dom";

function ContactMe() {
  return (
    <div className={styles.main}>
      <SectionCard>
        <h1 className={styles.h1}>Let's Chat</h1>
        <div className={styles.h1}>
          <p>
            If you have employement opportunity or just want to chat, you can
            contact me via Linkedin and email.
          </p>
        </div>
        <div className={styles.actions}>
            <button>
                <Link to='/ContactMe'>Contact Me</Link>
            </button>
        </div>
      </SectionCard>
    </div>
  );
}
export default ContactMe;
