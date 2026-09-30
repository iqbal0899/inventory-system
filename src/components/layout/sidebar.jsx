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

import { useNavigate, useLocation } from "react-router-dom";

import styles from "../../css/sidebar.module.css";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Produk",
    icon: Package,
    path: "/products",
  },
  {
    label: "Stok",
    icon: Boxes,
    path: "/stock",
  },
  {
    label: "Permintaan Kasir",
    icon: ClipboardList,
    path: "/requests",
  },
  {
    label: "Supplier",
    icon: Truck,
    path: "/suppliers",
  },
  {
    label: "Pembelian",
    icon: ShoppingCart,
    path: "/purchases",
  },
  {
    label: "Laporan",
    icon: FileText,
    path: "/reports",
  },
  {
    label: "Audit Log",
    icon: History,
    path: "/audit-logs",
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login");
  };

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
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.path)}
                className={`${styles.menuItem} ${
                  isActive ? styles.active : ""
                }`}
              >
                <Icon size={19} strokeWidth={1.8} />

                <span className={styles.menuLabel}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className={styles.sidebarBottom}>
        <button
          type="button"
          className={styles.menuItem}
          onClick={() => navigate("/settings")}
        >
          <Settings size={19} strokeWidth={1.8} />
          <span>Pengaturan</span>
        </button>

        <button
          type="button"
          className={`${styles.menuItem} ${styles.logout}`}
          onClick={handleLogout}
        >
          <LogOut size={19} strokeWidth={1.8} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;