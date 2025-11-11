import { useState } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.NavBar} ${isOpen ? styles.open : ""}`}>
      {/* Hamburger toggle */}

      <button
        className={`${styles.toggleBtn} ${isOpen ? styles.openBtn : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>

      {/* Sidebar menu */}
      <ul className={styles.menu}>
        <li>Home</li>
        <li>All MOCs</li>
        <li>Team Management</li>
        <li>Reports</li>
      </ul>
    </div>
  );
}

export default NavBar;
