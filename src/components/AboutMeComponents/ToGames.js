import styles from "./ToGames.module.css";
import SectionCard from "../ui/SectionCard";
import Link from "next/link";

function ToGames() {
  return (
    <div className={styles.main}>
      <SectionCard>
        <h1 className={styles.h1}>
          While you're here... Let's play some games
        </h1>
        <div className={styles.actions}>
          <button>
            <Link href="Games">
              <a>Play Games</a>
            </Link>
          </button>
        </div>
      </SectionCard>
    </div>
  );
}
export default ToGames;
