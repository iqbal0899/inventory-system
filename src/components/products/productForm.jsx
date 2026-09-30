import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../common/button";
import Loading from "../common/loading";
import styles from "../../css/productForm.module.css";

const initialForm = {
  code: "",
  name: "",
  category: "",
  price: "",
  stock: "",
  image: "",
  isActive: true,
};

function ProductForm({
  initialData = null,
  loading = false,
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        code: initialData.code || "",
        name: initialData.name || "",
        category: initialData.category || "",
        price: initialData.price || "",
        stock: initialData.stock ?? "",
        image: initialData.image || "",
        isActive: initialData.isActive ?? true,
      });
    } else {
      setFormData(initialForm);
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.code.trim()) {
      setError("Kode produk wajib diisi.");
      return;
    }

    if (!formData.name.trim()) {
      setError("Nama produk wajib diisi.");
      return;
    }

    if (!formData.price) {
      setError("Harga produk wajib diisi.");
      return;
    }

    if (Number(formData.price) < 0) {
      setError("Harga tidak boleh negatif.");
      return;
    }

    if (Number(formData.stock) < 0) {
      setError("Stok tidak boleh negatif.");
      return;
    }

    onSubmit?.({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock || 0),
    });
  };

  if (loading) {
    return <Loading size="medium" text="Memproses produk..." />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="code">Kode Produk</label>
          <input
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Contoh: PRD-001"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Nama Produk</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama produk"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Kategori</label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Masukkan kategori"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Harga</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            value={formData.price}
            onChange={handleChange}
            placeholder="Masukkan harga"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="stock">Stok</label>
          <input
            id="stock"
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Masukkan stok"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">URL Gambar</label>
          <input
            id="image"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>
      </div>

      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
        />
        <span>Produk aktif</span>
      </label>

      <div className={styles.actions}>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Batal
        </Button>

        <Button
          type="submit"
          variant="primary"
          loading={loading}
        >
          {initialData ? "Simpan Perubahan" : "Tambah Produk"}
        </Button>
      </div>
    </form>
  );
}

ProductForm.propTypes = {
  initialData: PropTypes.object,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ProductForm;