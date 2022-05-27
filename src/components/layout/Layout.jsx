import PropTypes from "prop-types";
import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultPropTypes = {};

const Layout = ({ children }) => {
  return (
    <div className={styles.background}>
      <MainNavigation />
      {children}
    </div>
  );
};

Layout.propTypes = propTypes;
Layout.defaultPropTypes = defaultPropTypes;

export default Layout;
