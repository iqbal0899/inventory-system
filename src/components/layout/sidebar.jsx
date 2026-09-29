import {
  LayoutDashboard,
  Package,
  Boxes,
  ClipboardList,
  Truck,
  ShoppingCart,
  FileText,
  History,
  Settings,
  LogOut,
} from "lucide-react";

import styles from "../../css/sidebar.module.css";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Produk",
    icon: Package,
    comingSoon: true,
  },
  {
    label: "Stok",
    icon: Boxes,
    comingSoon: true,
  },
  {
    label: "Permintaan Kasir",
    icon: ClipboardList,
    comingSoon: true,
  },
  {
    label: "Supplier",
    icon: Truck,
    comingSoon: true,
  },
  {
    label: "Pembelian",
    icon: ShoppingCart,
    comingSoon: true,
  },
  {
    label: "Laporan",
    icon: FileText,
    comingSoon: true,
  },
  {
    label: "Audit Log",
    icon: History,
    comingSoon: true,
  },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarBrand}>
        <div className={styles.brandIcon}>TI</div>

        <div>
          <h2>Toko Iqbal</h2>
          <span>Inventory</span>
        </div>
      </div>

      <div className={styles.menuSection}>
        <p className={styles.menuTitle}>MENU UTAMA</p>

        <nav className={styles.sidebarMenu}>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                disabled={item.comingSoon}
                className={`${styles.menuItem} ${
                  item.active ? styles.active : ""
                } ${item.comingSoon ? styles.disabled : ""}`}
              >
                <Icon size={19} strokeWidth={1.8} />

                <span className={styles.menuLabel}>
                  {item.label}
                </span>

                {item.comingSoon && (
                  <span className={styles.comingSoonBadge}>
                    Segera Hadir
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className={styles.sidebarBottom}>
        <button type="button" className={styles.menuItem}>
          <Settings size={19} />
          <span>Pengaturan</span>
        </button>

        <button
          type="button"
          className={`${styles.menuItem} ${styles.logout}`}
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;