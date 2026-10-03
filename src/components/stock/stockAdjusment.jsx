import { useState } from "react";
import Button from "../common/button";
import Modal from "../common/modal";
import Loading from "../common/loading";
import styles from "../../css/stockAdjusment.module.css";

function StockAdjustment({
  isOpen,
  onClose,
  product,
  loading = false,
  onSubmit,
}) {
  const [type, setType] = useState("add");
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = Number(quantity);

    if (!Number.isInteger(value) || value <= 0) {
      setError("Jumlah stok harus berupa angka lebih dari 0.");
      return;
    }

    if (!reason.trim()) {
      setError("Alasan penyesuaian wajib diisi.");
      return;
    }

    if (!product?.id) {
      setError("Produk tidak ditemukan.");
      return;
    }

    onSubmit?.({
      productId: product.id,
      type,
      quantity: value,
      note: reason.trim(),
    });
  };

  const handleClose = () => {
    setQuantity("");
    setReason("");
    setError("");
    setType("add");
    onClose?.();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Penyesuaian Stok"
      size="medium"
    >
      {loading ? (
        <Loading
          size="medium"
          text="Memproses stok..."
        />
      ) : (
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          {product && (
            <div className={styles.productInfo}>
              <span>Produk</span>
              <strong>{product.name}</strong>
              <small>
                Stok saat ini: {product.stock ?? 0} unit
              </small>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="adjustmentType">
              Jenis Penyesuaian
            </label>

            <select
              id="adjustmentType"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
                setError("");
              }}
            >
              <option value="add">
                Tambah Stok
              </option>
              <option value="subtract">
                Kurangi Stok
              </option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="quantity">
              Jumlah
            </label>

            <input
              id="quantity"
              type="number"
              min="1"
              step="1"
              value={quantity}
              onChange={(event) => {
                setQuantity(event.target.value);
                setError("");
              }}
              placeholder="Masukkan jumlah"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reason">
              Alasan
            </label>

            <textarea
              id="reason"
              rows="4"
              value={reason}
              onChange={(event) => {
                setReason(event.target.value);
                setError("");
              }}
              placeholder="Masukkan alasan penyesuaian"
            />
          </div>

          <div className={styles.actions}>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={loading}
            >
              Batal
            </Button>

            <Button
              type="submit"
              variant="primary"
              loading={loading}
            >
              Simpan
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}

export default StockAdjustment;