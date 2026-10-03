import { Edit, Eye, Trash2 } from "lucide-react";
import Button from "../common/button";
import Table from "../common/table";
import Pagination from "../common/pagination";
import styles from "../../css/productTable.module.css";

function ProductTable({
  products = [],
  loading = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  onView,
  onEdit,
  onDelete,
}) {
  const columns = [
    {
      key: "code",
      label: "Kode",
      render: (product) => (
        <strong className={styles.code}>{product.code || "-"}</strong>
      ),
    },
    {
      key: "name",
      label: "Produk",
      render: (product) => (
        <div className={styles.product}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
          ) : (
            <div className={styles.imagePlaceholder}>P</div>
          )}

          <div>
            <strong>{product.name}</strong>
            <span>{product.category || "-"}</span>
          </div>
        </div>
      ),
    },
    {
      key: "price",
      label: "Harga",
      align: "right",
      render: (product) =>
        product.price
          ? `Rp ${Number(product.price).toLocaleString("id-ID")}`
          : "-",
    },
    {
      key: "stock",
      label: "Stok",
      align: "center",
      render: (product) => (
        <span
          className={`${styles.stock} ${
            product.stock <= 0
              ? styles.empty
              : product.stock <= 10
                ? styles.low
                : styles.available
          }`}
        >
          {product.stock ?? 0}
        </span>
      ),
    },
    {
  key: "status",
  label: "Status",
  align: "center",
  render: (product) => {
    const isActive = product.status === "ACTIVE";

    return (
      <span
        className={`${styles.status} ${
          isActive
            ? styles.active
            : styles.inactive
        }`}
      >
        {isActive ? "Aktif" : "Nonaktif"}
      </span>
    );
  },
},
    {
      key: "actions",
      label: "Aksi",
      align: "center",
      render: (product) => (
        <div className={styles.actions}>
          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Eye}
            onClick={() => onView?.(product)}
            aria-label="Lihat produk"
          />

          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Edit}
            onClick={() => onEdit?.(product)}
            aria-label="Edit produk"
          />

          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Trash2}
            onClick={() => onDelete?.(product)}
            aria-label="Hapus produk"
          />
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <Table
        columns={columns}
        data={products}
        loading={loading}
        emptyMessage="Belum ada produk."
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

export default ProductTable;