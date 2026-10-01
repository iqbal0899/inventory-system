import { useState } from "react";

import {
  Package,
  Boxes,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

import styles from "../../css/dashboard.module.css";

import Sidebar from "../../components/layout/sidebar";
import Navbar from "../../components/layout/navbar";
import StatCard from "../../components/dashboard/statCard";
import RequestTable from "../../components/dashboard/requestTable";
import LowStock from "../../components/dashboard/lowStock";

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.appLayout}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`${styles.mainWrapper} ${
          collapsed ? styles.collapsed : ""
        }`}
      >
        <Navbar />

        <main className={styles.dashboard}>
          <div className={styles.pageHeading}>
            <div>
              <h1>Dashboard Inventory</h1>

              <p>
                Pantau stok dan aktivitas inventory secara real-time.
              </p>
            </div>

            <button className={styles.dateButton}>
              29 September 2026
            </button>
          </div>

          <section className={styles.statsGrid}>
            <StatCard
              title="Total Produk"
              value="1,248"
              description="+12 produk bulan ini"
              icon={<Package size={22} />}
              iconClass="blue"
            />

            <StatCard
              title="Total Stok"
              value="18,420"
              description="Unit tersedia"
              icon={<Boxes size={22} />}
              iconClass="green"
            />

            <StatCard
              title="Permintaan Pending"
              value="24"
              description="Menunggu persetujuan"
              icon={<ClipboardList size={22} />}
              iconClass="orange"
            />

            <StatCard
              title="Stok Menipis"
              value="18"
              description="Perlu segera direstock"
              icon={<AlertTriangle size={22} />}
              iconClass="red"
            />
          </section>

          <section className={styles.contentGrid}>
            <div className={styles.chartCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3>Pergerakan Stok</h3>

                  <p>
                    Aktivitas stok 7 hari terakhir
                  </p>
                </div>

                <select>
                  <option>7 Hari</option>
                  <option>30 Hari</option>
                  <option>3 Bulan</option>
                </select>
              </div>

              <div className={styles.chart}>
                <div className={styles.chartBars}>
                  {[45, 65, 50, 80, 60, 90, 72].map(
                    (height, index) => (
                      <div
                        className={styles.barWrapper}
                        key={index}
                      >
                        <div
                          className={styles.bar}
                          style={{
                            height: `${height}%`,
                          }}
                        />

                        <span>
                          {
                            [
                              "Sen",
                              "Sel",
                              "Rab",
                              "Kam",
                              "Jum",
                              "Sab",
                              "Min",
                            ][index]
                          }
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <LowStock />
          </section>

          <RequestTable />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;