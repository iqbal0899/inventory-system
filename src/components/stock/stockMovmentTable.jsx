import Table from "../common/table";
import Pagination from "../common/pagination";
import styles from "../../css/stockMovmentTable.module.css";

function StockMovementTable({
  movements = [],
  loading = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) {
  const movementLabels = {
    INITIAL: "Stok Awal",
    SALE: "Penjualan",
    RESTOCK: "Restock",
    ADJUSTMENT: "Penyesuaian",
  };

  const columns = [
    {
      key: "date",
      label: "Tanggal",
      render: (movement) =>
        movement.date
          ? new Date(movement.date).toLocaleString("id-ID")
          : "-",
    },
    {
      key: "product",
      label: "Produk",
      render: (movement) =>
        movement.product?.name ||
        movement.productName ||
        "-",
    },
    {
      key: "type",
      label: "Jenis",
      align: "center",
      render: (movement) => (
        <span
          className={`${styles.type} ${
            styles[movement.type?.toLowerCase()] || ""
          }`}
        >
          {movementLabels[movement.type] ||
            movement.type ||
            "-"}
        </span>
      ),
    },
    {
      key: "stockBefore",
      label: "Sebelum",
      align: "center",
      render: (movement) =>
        movement.stockBefore ?? "-",
    },
    {
      key: "quantity",
      label: "Perubahan",
      align: "center",
      render: (movement) => (
        <span
          className={
            Number(movement.quantity) >= 0
              ? styles.increase
              : styles.decrease
          }
        >
          {Number(movement.quantity) >= 0 ? "+" : ""}
          {movement.quantity ?? 0}
        </span>
      ),
    },
    {
      key: "stockAfter",
      label: "Sesudah",
      align: "center",
      render: (movement) =>
        movement.stockAfter ?? "-",
    },
    {
      key: "user",
      label: "Oleh",
      render: (movement) =>
        movement.user?.username ||
        movement.username ||
        "-",
    },
  ];

  return (
    <div className={styles.container}>
      <Table
        columns={columns}
        data={movements}
        loading={loading}
        emptyMessage="Belum ada riwayat pergerakan stok."
        rowKey="id"
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default StockMovementTable;