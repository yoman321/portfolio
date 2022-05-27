import PropTypes from "prop-types";
import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";

const propTypes = {
  children: PropTypes.Node.isRequired,
};

const defaultPropTypes = {};

const Layout = ({ children }) => (
  <div className={styles.background}>
    <MainNavigation />
    {children}
  </div>
);

Layout.propTypes = propTypes;
Layout.defaultPropTypes = defaultPropTypes;

export default Layout;
