import React from "react";
import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <div className={styles["page-container"]}>
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
