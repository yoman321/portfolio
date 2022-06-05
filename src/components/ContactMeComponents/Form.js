import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Form.module.css";
import SentModal from "./SentModal";
import ErrorModal from "./ErrorModal";
import Card from "../ui/Card";

const Form = () => {
  const form = useRef();
  const [sent, showSent] = useState(false);
  const [errors, showError] = useState(false);

  const EmailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lvjrdoh",
        "template_pgfjjfk",
        form.current,
        "WK9aYYrLyZNtGEGbK"
      )
      .then(
        (result) => {
          console.log(result.text);
          showSent(true);
          setTimeout(() => showSent(false), 5000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          showError(true);
          setTimeout(() => showError(false), 5000);
        }
      );
  };
  return (
    <div>
      {sent && <SentModal />}
      {errors && <ErrorModal />}
      <Card>
        <div className={styles.section}>
          <div className={styles.h1}>
            <h1>Contact Form</h1>
          </div>
          <form className={styles.form} ref={form} onSubmit={EmailHandler}>
            <div className={styles.control}>
              <label htmlFor="name">
                Name
                <input type="text" id="name" name="name" />
              </label>
            </div>
            <div className={styles.control}>
              <label htmlFor="email">
                Email
                <input type="email" id="email" name="email" />
              </label>
            </div>
            <div className={styles.control}>
              <label htmlFor="subject">
                Subject
                <input type="text" id="text" name="subject" />
              </label>
            </div>
            <div className={styles.control}>
              <label htmlFor="message">
                Message
                <textarea id="message" rows="5" name="message" />
              </label>
            </div>
            <div className={styles.actions}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};
export default Form;
