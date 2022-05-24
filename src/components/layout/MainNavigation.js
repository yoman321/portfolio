import { Link } from "react-router-dom";
import styles from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.header}>
      <h3 className={styles.logo}>Welcome</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
              <Link to='/Games'>Games</Link>
          </li>
          <li>
              <Link to='/ContactMe'>Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
