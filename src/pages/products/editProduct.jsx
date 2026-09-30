import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../../components/products/productForm";
import Loading from "../../components/common/loading";

import styles from "../../css/editProduct.module.css";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const loading = false;
  const productLoading = false;

  const product = {
    id,
    code: "",
    name: "",
    category: "",
    price: "",
    stock: 0,
    image: "",
    isActive: true,
  };

  const handleSubmit = async (data) => {
    console.log("Update product:", id, data);
    navigate("/products");
  };

  if (productLoading) {
    return (
      <Loading
        fullPage
        text="Memuat data produk..."
      />
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>Edit Produk</h1>
          <p>
            Perbarui informasi produk.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <ProductForm
          initialData={product}
          loading={loading}
          onSubmit={handleSubmit}
          onCancel={() => navigate("/products")}
        />
      </div>
    </main>
  );
}

export default EditProduct;