import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/products/productForm";

import styles from "../../css/addProduct.module.css";

function AddProduct() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    console.log("Create product:", data);
    navigate("/products");
  };

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>Tambah Produk</h1>
          <p>
            Tambahkan produk baru ke inventory.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <ProductForm
          loading={false}
          onSubmit={handleSubmit}
          onCancel={() => navigate("/products")}
        />
      </div>
    </main>
  );
}

export default AddProduct;