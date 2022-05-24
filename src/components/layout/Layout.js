import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div className={styles.background}>
      <MainNavigation />
      {props.children}
    </div>
  );
}
export default Layout;
