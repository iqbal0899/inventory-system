import Modal from "../common/modal";
import ProductForm from "./productForm";

function ProductModal({
  isOpen,
  onClose,
  product = null,
  loading = false,
  onSubmit,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product ? "Edit Produk" : "Tambah Produk"}
      size="large"
    >
      <ProductForm
        initialData={product}
        loading={loading}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}

export default ProductModal;