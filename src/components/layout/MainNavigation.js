import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import Card from "../ui/Card";

function MainNavigation() {
  return (
    <Card>
      <header className={styles.header}>
        <h3 className={styles.logo}>Welcome</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Card>
  );
}
export default MainNavigation;
