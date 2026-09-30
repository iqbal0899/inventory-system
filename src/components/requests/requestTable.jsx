import { Eye } from "lucide-react";
import Button from "../common/button";
import Table from "../common/table";
import Pagination from "../common/pagination";
import styles from "../../css/requestTable.module.css";

function RequestTable({
  requests = [],
  loading = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  onView,
}) {
  const statusLabel = {
    pending: "Menunggu",
    approved: "Disetujui",
    rejected: "Ditolak",
    completed: "Selesai",
  };

  const columns = [
    {
      key: "id",
      label: "ID Request",
      render: (request) => (
        <strong>{request.id || "-"}</strong>
      ),
    },
    {
      key: "product",
      label: "Produk",
      render: (request) =>
        request.product?.name ||
        request.product ||
        "-",
    },
    {
      key: "quantity",
      label: "Jumlah",
      align: "center",
      render: (request) =>
        `${request.quantity ?? 0} unit`,
    },
    {
      key: "requester",
      label: "Requester",
      render: (request) =>
        request.requester?.username ||
        request.requester ||
        "-",
    },
    {
      key: "date",
      label: "Tanggal",
      render: (request) =>
        request.date
          ? new Date(request.date).toLocaleDateString("id-ID")
          : "-",
    },
    {
      key: "status",
      label: "Status",
      align: "center",
      render: (request) => (
        <span
          className={`${styles.status} ${
            styles[request.status] || ""
          }`}
        >
          {statusLabel[request.status] ||
            request.status ||
            "-"}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Aksi",
      align: "center",
      render: (request) => (
        <Button
          type="button"
          variant="outline"
          size="small"
          icon={Eye}
          onClick={() => onView?.(request)}
        >
          Detail
        </Button>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <Table
        columns={columns}
        data={requests}
        loading={loading}
        emptyMessage="Belum ada permintaan stok."
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

export default RequestTable;