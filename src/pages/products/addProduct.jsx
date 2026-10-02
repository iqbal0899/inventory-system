import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductForm from "../../components/products/productForm";
import { createProduct } from "../../services/productApi";

import styles from "../../css/addProduct.module.css";

function AddProduct() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");

      console.log("DATA PRODUCT:", data);

      const response = await createProduct(data);

      console.log("CREATE PRODUCT RESPONSE:", response);

      navigate("/products");
    } catch (error) {
      console.error(
        "Create product error:",
        error
      );

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Gagal menambahkan produk.";

      setError(message);
    } finally {
      setLoading(false);
    }
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
        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        <ProductForm
          loading={loading}
          onSubmit={handleSubmit}
          onCancel={() =>
            navigate("/products")
          }
        />
      </div>
    </main>
  );
}

export default AddProduct;