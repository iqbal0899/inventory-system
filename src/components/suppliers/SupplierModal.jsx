import Modal from "../common/modal";

import SupplierForm from "./supplierForm";
import SupplierDetail from "../../pages/suppliers/supplierDetail";

function SupplierModal({
  isOpen,
  onClose,
  mode = "add",
  supplier = null,
  onSubmit,
  loading = false,
}) {
  const getTitle = () => {
    if (mode === "edit") {
      return "Edit Supplier";
    }

    if (mode === "detail") {
      return "Detail Supplier";
    }

    return "Tambah Supplier";
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={getTitle()}
      size="medium"
    >
      {mode === "add" && (
        <SupplierForm
          supplier={null}
          onSubmit={onSubmit}
          onCancel={onClose}
          loading={loading}
        />
      )}

      {mode === "edit" && (
        <SupplierForm
          supplier={supplier}
          onSubmit={onSubmit}
          onCancel={onClose}
          loading={loading}
        />
      )}

      {mode === "detail" && (
        <SupplierDetail
          supplier={supplier}
        />
      )}
    </Modal>
  );
}

export default SupplierModal;

