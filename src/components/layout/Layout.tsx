import React from 'react';
import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.background}>
      <MainNavigation />
      {children}
    </div>
  );
};

export default Layout;
