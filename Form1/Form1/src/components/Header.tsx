import styles from "./Header.module.css";
import profileImg from "../assets/profile.jpeg";

function Header() {
  return (
    <header className={styles.header}>
      
      <div className={styles.card} style={{width:50}}>
        <h4 className={styles.left}>MOC</h4>
      </div>

      <div className={styles.card}>
        <h4 className={styles.right}>Justin</h4>
        <img src={profileImg} alt="Profile" className={styles.profileImg} />
      </div>

    </header>
  );
}

export default Header;
