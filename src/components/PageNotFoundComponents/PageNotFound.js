import { Link } from "react-router-dom";
import SectionCard from "../ui/SectionCard";
import styles from "./PageNotFound.module.css";
import PageNotFoundPic from "../../images/PageNotFoundPic.jpg";

function PageNotFound() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <a
          href="https://www.freepik.com/vectors/disconnect"
          target="_blank"
          rel="noreferrer"
        >
          <img src={PageNotFoundPic} alt="Page Not Found" />
        </a>
      </div>
      <div>
        <h1>Oops... Seems like the page cannot be found</h1>
      </div>
      <div className={styles.actions}>
        <button type="button">
          <Link to="/">To About Me</Link>
        </button>
      </div>
    </div>
  );
}
export default PageNotFound;
