import { useState } from "react";

import Sidebar from "../components/shared/Sidebar";
import Navbar from "../components/shared/Navbar";

import styles from "../css/layout.module.css";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`${styles.mainWrapper} ${
          collapsed ? styles.mainWrapperCollapsed : ""
        }`}
      >
        <Navbar />

        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;