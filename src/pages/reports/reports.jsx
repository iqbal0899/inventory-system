import { useState } from "react";
import {
  FileText,
  Package,
  ClipboardList,
  Download,
} from "lucide-react";

import Button from "../../components/common/button";
import Loading from "../../components/common/loading";

import Sidebar from "../../components/layout/sidebar";
import Navbar from "../../components/layout/navbar";

import styles from "../../css/reports.module.css";

function Reports() {
  const [loading, setLoading] = useState(false);

  const reports = [
    {
      id: "product",
      title: "Laporan Produk",
      description:
        "Laporan seluruh data produk inventory.",
      icon: Package,
    },
    {
      id: "stock",
      title: "Laporan Stok",
      description:
        "Laporan kondisi dan jumlah stok produk.",
      icon: FileText,
    },
    {
      id: "transaction",
      title: "Laporan Transaksi",
      description:
        "Laporan transaksi inventory.",
      icon: ClipboardList,
    },
  ];

  const handleDownload = async (type) => {
    setLoading(true);

    try {
      console.log("Download report:", type);

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.layout}>
      <Navbar />
      <Sidebar />

      <div className={styles.mainContent}>
        <main className={styles.page}>
          <div className={styles.header}>
            <div>
              <h1>Laporan</h1>
              <p>
                Kelola dan unduh laporan inventory.
              </p>
            </div>
          </div>

          {loading ? (
            <Loading
              fullPage
              size="medium"
              text="Menyiapkan laporan..."
            />
          ) : (
            <section className={styles.grid}>
              {reports.map((report) => {
                const Icon = report.icon;

                return (
                  <div
                    className={styles.card}
                    key={report.id}
                  >
                    <div className={styles.icon}>
                      <Icon size={24} />
                    </div>

                    <div className={styles.content}>
                      <h2>{report.title}</h2>

                      <p>{report.description}</p>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      icon={Download}
                      fullWidth
                      onClick={() =>
                        handleDownload(report.id)
                      }
                    >
                      Unduh Laporan
                    </Button>
                  </div>
                );
              })}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Reports;