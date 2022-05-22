import styles from "./Layout.module.css";
import Background from "./Background";

function Layout(props) {
  return (
    <div className={styles.Background}>
      <div>{props.children}</div>
    </div>
  );
}
export default Layout;
