import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/common/button";
import Loading from "../../components/common/loading";
import Modal from "../../components/common/modal";

import styles from "../../css/supplierDetail.module.css";

function SupplierDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const loading = false;

  const supplier = {
    id,
    code: "",
    name: "",
    phone: "",
    email: "",
    address: "",
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
        isOpen
        onClose={() => navigate("/suppliers")}
        title="Detail Supplier"
        size="medium"
      >
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

          <Button
            type="button"
            variant="outline"
            fullWidth
            onClick={() => navigate("/suppliers")}
          >
            Kembali
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default SupplierDetail;