import { Link } from "react-router-dom";
import styles from "./ToGames.module.css";
import SectionCard from "../ui/SectionCard";

function ToGames() {
  return (
    <div className={styles.main}>
      <SectionCard>
        <h1 className={styles.h1}> 
          While you&apos;re here... Let&apos;s play some games
        </h1>
        <div className={styles.actions}>
          <button type="button">
            <Link to="/*">Play Games</Link>
          </button>
        </div>
      </SectionCard>
    </div>
  );
}
export default ToGames;
