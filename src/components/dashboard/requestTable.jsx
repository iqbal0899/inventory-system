import { useMemo, useState } from "react";
import { Eye, ArrowRight } from "lucide-react";

import Button from "../common/button";
import Table from "../common/table";
import Modal from "../common/modal";
import styles from "../../css/requestTable.module.css";

function RequestTable({
  requests = [],
  loading = false,
  onViewAll,
}) {
  const [selectedRequest, setSelectedRequest] =
    useState(null);

  const statusLabel = {
    pending: "Menunggu",
    approved: "Disetujui",
    rejected: "Ditolak",
    completed: "Selesai",
  };

  const handleDetail = (request) => {
    setSelectedRequest(request);
  };

  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

  const columns = useMemo(
    () => [
      {
        key: "id",
        label: "ID Request",
        render: (request) => (
          <strong className={styles.requestId}>
            {request.id}
          </strong>
        ),
      },

      {
        key: "product",
        label: "Produk",
        render: (request) => (
          <span className={styles.productName}>
            {request.product}
          </span>
        ),
      },

      {
        key: "quantity",
        label: "Jumlah",
        render: (request) => (
          <span className={styles.quantity}>
            {request.quantity} unit
          </span>
        ),
      },

      {
        key: "requester",
        label: "Requester",
        render: (request) => (
          <span className={styles.requester}>
            {request.requester}
          </span>
        ),
      },

      {
        key: "date",
        label: "Tanggal",
        render: (request) => (
          <span className={styles.date}>
            {request.date}
          </span>
        ),
      },

      {
        key: "status",
        label: "Status",
        render: (request) => (
          <span
            className={`${styles.status} ${
              styles[request.status] || ""
            }`}
          >
            {statusLabel[request.status] ||
              request.status}
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
            onClick={() =>
              handleDetail(request)
            }
          >
            Detail
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <>
      <div className={styles.tableCard}>
        <div className={styles.cardHeader}>
          <div>
            <h3>Permintaan Stok</h3>

            <p>
              Permintaan stok terbaru dari kasir
            </p>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={ArrowRight}
            iconPosition="right"
            onClick={onViewAll}
          >
            Lihat Semua
          </Button>
        </div>

        <Table
          columns={columns}
          data={requests}
          loading={loading}
          emptyMessage="Belum ada permintaan stok."
          rowKey="id"
        />
      </div>

      <Modal
        isOpen={Boolean(selectedRequest)}
        onClose={handleCloseModal}
        title="Detail Permintaan Stok"
        size="small"
      >
        {selectedRequest && (
          <div className={styles.detailContent}>
            <div className={styles.detailItem}>
              <span>ID Request</span>
              <strong>
                {selectedRequest.id}
              </strong>
            </div>

            <div className={styles.detailItem}>
              <span>Produk</span>
              <strong>
                {selectedRequest.product}
              </strong>
            </div>

            <div className={styles.detailItem}>
              <span>Jumlah</span>
              <strong>
                {selectedRequest.quantity} unit
              </strong>
            </div>

            <div className={styles.detailItem}>
              <span>Requester</span>
              <strong>
                {selectedRequest.requester}
              </strong>
            </div>

            <div className={styles.detailItem}>
              <span>Tanggal</span>
              <strong>
                {selectedRequest.date}
              </strong>
            </div>

            <div className={styles.detailItem}>
              <span>Status</span>

              <span
                className={`${styles.status} ${
                  styles[
                    selectedRequest.status
                  ] || ""
                }`}
              >
                {statusLabel[
                  selectedRequest.status
                ] || selectedRequest.status}
              </span>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default RequestTable;