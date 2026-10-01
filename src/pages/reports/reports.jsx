import { useState } from "react";
import {
  CalendarDays,
  Download,
  RefreshCw,
} from "lucide-react";

import Button from "../../components/common/button";
import Loading from "../../components/common/loading";

import Sidebar from "../../components/layout/sidebar";
import Navbar from "../../components/layout/navbar";

import styles from "../../css/reports.module.css";

function Reports() {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [reportData, setReportData] = useState([]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleFilter = () => {
    if (!startDate || !endDate) {
      alert(
        "Silakan pilih tanggal mulai dan tanggal akhir."
      );
      return;
    }

    if (startDate > endDate) {
      alert(
        "Tanggal akhir tidak boleh lebih kecil dari tanggal mulai."
      );
      return;
    }

    setLoading(true);

    // Data sementara untuk testing tampilan laporan.
    // Nantinya bisa diganti dengan data dari API backend.
    setTimeout(() => {
      const dummyData = [
        {
          id: 1,
          code: "PRD-001",
          name: "Laptop ASUS",
          supplier: "PT ASUS Indonesia",
          price: 8500000,
          stockBefore: 10,
          stockAdded: 5,
          stockAfter: 15,
          currentStock: 15,
        },
        {
          id: 2,
          code: "PRD-002",
          name: "Mouse Logitech",
          supplier: "PT Logitech Indonesia",
          price: 250000,
          stockBefore: 25,
          stockAdded: 10,
          stockAfter: 35,
          currentStock: 35,
        },
        {
          id: 3,
          code: "PRD-003",
          name: "Keyboard Mechanical",
          supplier: "PT Digital Store",
          price: 750000,
          stockBefore: 12,
          stockAdded: 8,
          stockAfter: 20,
          currentStock: 20,
        },
        {
          id: 4,
          code: "PRD-004",
          name: "Monitor 24 Inch",
          supplier: "PT Monitor Indonesia",
          price: 1850000,
          stockBefore: 8,
          stockAdded: 5,
          stockAfter: 13,
          currentStock: 13,
        },
        {
          id: 5,
          code: "PRD-005",
          name: "Kabel HDMI",
          supplier: "PT Elektronik Jaya",
          price: 85000,
          stockBefore: 40,
          stockAdded: 10,
          stockAfter: 50,
          currentStock: 50,
        },
      ];

      setReportData(dummyData);
      setLoading(false);
    }, 700);
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setReportData([]);
  };

  const handleDownload = () => {
    if (!startDate || !endDate) {
      alert(
        "Silakan pilih tanggal mulai dan tanggal akhir."
      );
      return;
    }

    if (startDate > endDate) {
      alert(
        "Tanggal akhir tidak boleh lebih kecil dari tanggal mulai."
      );
      return;
    }

    if (reportData.length === 0) {
      alert(
        "Belum ada data laporan. Silakan tampilkan laporan terlebih dahulu."
      );
      return;
    }

    const headers = [
      "No.",
      "Kode Produk",
      "Nama Produk",
      "Supplier",
      "Harga Satuan",
      "Stok Sebelum",
      "Stok Ditambah",
      "Stok Sesudah",
      "Stok Saat Ini",
    ];

    const rows = reportData.map((product, index) => [
      index + 1,
      product.code,
      product.name,
      product.supplier,
      product.price,
      product.stockBefore,
      product.stockAdded,
      product.stockAfter,
      product.currentStock,
    ]);

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map((value) => {
            const stringValue = String(value ?? "");

            return `"${stringValue.replace(
              /"/g,
              '""'
            )}"`;
          })
          .join(",")
      )
      .join("\n");

    // BOM supaya karakter Indonesia terbaca
    // dengan baik oleh Microsoft Excel.
    const BOM = "\uFEFF";

    const blob = new Blob(
      [BOM + csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `laporan-inventory-${startDate}-sd-${endDate}.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.layout}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`${styles.mainContent} ${
          collapsed ? styles.collapsed : ""
        }`}
      >
        <Navbar />

        <main className={styles.page}>
          {/* HEADER */}
          <div className={styles.header}>
            <div>
              <h1>Laporan Inventory</h1>

              <p>
                Laporan stok produk berdasarkan
                periode tertentu.
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              icon={Download}
              onClick={handleDownload}
              disabled={reportData.length === 0}
            >
              Unduh Laporan
            </Button>
          </div>

          {/* FILTER */}
          <section className={styles.filterCard}>
            <div className={styles.filterHeader}>
              <div className={styles.filterTitle}>
                <CalendarDays size={18} />

                <div>
                  <h2>Filter Periode</h2>

                  <p>
                    Pilih periode laporan yang ingin
                    ditampilkan.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className={styles.resetButton}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>

            <div className={styles.filterForm}>
              <div className={styles.dateField}>
                <label htmlFor="startDate">
                  Tanggal Mulai
                </label>

                <input
                  id="startDate"
                  type="date"
                  value={startDate}
                  max={endDate || undefined}
                  onChange={(event) =>
                    setStartDate(event.target.value)
                  }
                />
              </div>

              <div className={styles.dateField}>
                <label htmlFor="endDate">
                  Tanggal Akhir
                </label>

                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  min={startDate || undefined}
                  onChange={(event) =>
                    setEndDate(event.target.value)
                  }
                />
              </div>

              <div className={styles.filterAction}>
                <Button
                  type="button"
                  variant="primary"
                  icon={RefreshCw}
                  onClick={handleFilter}
                >
                  Tampilkan
                </Button>
              </div>
            </div>
          </section>

          {/* REPORT TABLE */}
          <section className={styles.reportCard}>
            <div className={styles.reportHeader}>
              <div>
                <h2>Data Laporan</h2>

                <p>
                  {startDate && endDate
                    ? `Periode ${startDate} s/d ${endDate}`
                    : "Silakan pilih periode laporan."}
                </p>
              </div>

              <span className={styles.totalData}>
                {reportData.length} Produk
              </span>
            </div>

            {loading ? (
              <div className={styles.loading}>
                <Loading
                  size="medium"
                  text="Memuat laporan..."
                />
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table className={styles.reportTable}>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Kode Produk</th>
                      <th>Nama Produk</th>
                      <th>Supplier</th>
                      <th>Harga Satuan</th>
                      <th>Stok Sebelum</th>
                      <th>Stok Ditambah</th>
                      <th>Stok Sesudah</th>
                      <th>Stok Saat Ini</th>
                    </tr>
                  </thead>

                  <tbody>
                    {reportData.length === 0 ? (
                      <tr>
                        <td
                          colSpan="9"
                          className={styles.empty}
                        >
                          Belum ada data laporan.
                        </td>
                      </tr>
                    ) : (
                      reportData.map(
                        (product, index) => (
                          <tr key={product.id}>
                            <td>{index + 1}</td>

                            <td>
                              <strong>
                                {product.code}
                              </strong>
                            </td>

                            <td>
                              {product.name}
                            </td>

                            <td>
                              {product.supplier}
                            </td>

                            <td>
                              {formatCurrency(
                                product.price
                              )}
                            </td>

                            <td>
                              {product.stockBefore}
                            </td>

                            <td>
                              {product.stockAdded}
                            </td>

                            <td>
                              {product.stockAfter}
                            </td>

                            <td>
                              <strong>
                                {product.currentStock}
                              </strong>
                            </td>
                          </tr>
                        )
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Reports;

