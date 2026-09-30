import Modal from "../common/modal";
import Button from "../common/button";
import styles from "../../css/requestDetail.module.css";

function RequestDetail({
  isOpen,
  onClose,
  request,
  onApprove,
  onReject,
}) {
  if (!request) {
    return null;
  }

  const statusLabel = {
    pending: "Menunggu",
    approved: "Disetujui",
    rejected: "Ditolak",
    completed: "Selesai",
  };

  const isPending = request.status === "pending";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Detail Permintaan Stok"
      size="medium"
    >
      <div className={styles.detail}>
        <div className={styles.item}>
          <span>ID Request</span>
          <strong>{request.id || "-"}</strong>
        </div>

        <div className={styles.item}>
          <span>Produk</span>
          <strong>
            {request.product?.name ||
              request.product ||
              "-"}
          </strong>
        </div>

        <div className={styles.item}>
          <span>Jumlah</span>
          <strong>
            {request.quantity ?? 0} unit
          </strong>
        </div>

        <div className={styles.item}>
          <span>Requester</span>
          <strong>
            {request.requester?.username ||
              request.requester ||
              "-"}
          </strong>
        </div>

        <div className={styles.item}>
          <span>Tanggal</span>
          <strong>
            {request.date
              ? new Date(request.date).toLocaleString(
                  "id-ID"
                )
              : "-"}
          </strong>
        </div>

        <div className={styles.item}>
          <span>Status</span>
          <strong>
            {statusLabel[request.status] ||
              request.status ||
              "-"}
          </strong>
        </div>

        {request.reason && (
          <div className={styles.item}>
            <span>Alasan</span>
            <p>{request.reason}</p>
          </div>
        )}
      </div>

      {isPending && (
        <div className={styles.actions}>
          <Button
            type="button"
            variant="danger"
            onClick={() => onReject?.(request)}
          >
            Tolak
          </Button>

          <Button
            type="button"
            variant="success"
            onClick={() => onApprove?.(request)}
          >
            Setujui
          </Button>
        </div>
      )}
    </Modal>
  );
}

export default RequestDetail;