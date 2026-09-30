import { Check, X } from "lucide-react";
import Button from "../common/button";
import Modal from "../common/modal";
import Loading from "../common/loading";
import styles from "../../css/requestAction.module.css";

function RequestAction({
  isOpen,
  onClose,
  request,
  action,
  loading = false,
  onConfirm,
}) {
  if (!request) {
    return null;
  }

  const isApprove = action === "approve";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isApprove ? "Setujui Request" : "Tolak Request"}
      size="small"
    >
      {loading ? (
        <Loading
          size="medium"
          text="Memproses request..."
        />
      ) : (
        <div className={styles.content}>
          <div className={styles.icon}>
            {isApprove ? (
              <Check size={24} />
            ) : (
              <X size={24} />
            )}
          </div>

          <h3>
            {isApprove
              ? "Setujui permintaan ini?"
              : "Tolak permintaan ini?"}
          </h3>

          <p>
            Request{" "}
            <strong>{request.id}</strong> untuk produk{" "}
            <strong>
              {request.product?.name ||
                request.product ||
                "-"}
            </strong>{" "}
            sebanyak{" "}
            <strong>
              {request.quantity ?? 0} unit
            </strong>.
          </p>

          <div className={styles.actions}>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Batal
            </Button>

            <Button
              type="button"
              variant={isApprove ? "success" : "danger"}
              loading={loading}
              onClick={() => onConfirm?.(request)}
            >
              {isApprove ? "Setujui" : "Tolak"}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default RequestAction;