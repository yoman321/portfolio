import Link from "next/link";
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
              <Link href="/">
                <a>About Me</a>
              </Link>
            </li>
            <li>
              <Link href="/Games">
                <a>Games</a>
              </Link>
            </li>
            <li>
              <Link href="/ContactMe">
                <a>Contact Me</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Card>
  );
}
export default MainNavigation;
