import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/common/button";
import Loading from "../../components/common/loading";
import Modal from "../../components/common/modal";

import { getSupplierById } from "../../services/supplierApi";

import styles from "../../css/supplierDetail.module.css";

function SupplierDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadSupplier = async () => {
      if (!id) {
        setError("ID supplier tidak ditemukan");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await getSupplierById(id);

        if (!response?.success) {
          throw new Error(
            response?.message ||
              "Gagal mengambil data supplier"
          );
        }

        setSupplier(response.data);
      } catch (error) {
        console.error(
          "GET SUPPLIER DETAIL ERROR:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Gagal mengambil data supplier"
        );

        setSupplier(null);
      } finally {
        setLoading(false);
      }
    };

    loadSupplier();
  }, [id]);

  const handleClose = () => {
    navigate("/suppliers", {
      replace: true,
    });
  };

  if (loading) {
    return (
      <Loading
        fullPage
        text="Memuat supplier..."
      />
    );
  }

  return (
    <main className={styles.page}>
      <Modal
        isOpen={true}
        onClose={handleClose}
        title="Detail Supplier"
        size="medium"
      >
        {error ? (
          <div className={styles.error}>
            <p>{error}</p>

            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={handleClose}
            >
              Kembali
            </Button>
          </div>
        ) : supplier ? (
          <div className={styles.detail}>
            <div className={styles.item}>
              <span>Kode Supplier</span>
              <strong>
                {supplier.code || "-"}
              </strong>
            </div>

            <div className={styles.item}>
              <span>Nama Supplier</span>
              <strong>
                {supplier.name || "-"}
              </strong>
            </div>

            <div className={styles.item}>
              <span>Telepon</span>
              <strong>
                {supplier.phone || "-"}
              </strong>
            </div>

            <div className={styles.item}>
              <span>Email</span>
              <strong>
                {supplier.email || "-"}
              </strong>
            </div>

            <div className={styles.item}>
              <span>Alamat</span>
              <strong>
                {supplier.address || "-"}
              </strong>
            </div>

            <div className={styles.item}>
              <span>Dibuat</span>
              <strong>
                {supplier.createdAt
                  ? new Date(
                      supplier.createdAt
                    ).toLocaleString("id-ID")
                  : "-"}
              </strong>
            </div>

            <div className={styles.item}>
              <span>Diperbarui</span>
              <strong>
                {supplier.updatedAt
                  ? new Date(
                      supplier.updatedAt
                    ).toLocaleString("id-ID")
                  : "-"}
              </strong>
            </div>

            <div className={styles.actions}>
              <Button
                type="button"
                variant="outline"
                fullWidth
                onClick={handleClose}
              >
                Kembali
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.error}>
            <p>
              Supplier tidak ditemukan.
            </p>

            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={handleClose}
            >
              Kembali
            </Button>
          </div>
        )}
      </Modal>
    </main>
  );
}

export default SupplierDetail;

