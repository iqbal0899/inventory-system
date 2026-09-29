import { Bell, Search, ChevronDown } from "lucide-react";
import styles from "../../css/navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
  <div className={styles.search}>
    <Search size={19} />

    <input
      type="text"
      placeholder="Cari produk, request, supplier..."
    />
  </div>

  <div className={styles.actions}>
    <button className={styles.notificationButton}>
      <Bell size={20} />
      <span className={styles.notificationDot} />
    </button>

    <div className={styles.userProfile}>
      <div className={styles.avatar}>AI</div>

      <div className={styles.userInfo}>
        <strong>Admin Inventory</strong>
        <span>Administrator</span>
      </div>

      <ChevronDown size={17} />
    </div>
  </div>
</header>
  );
}

export default Navbar;