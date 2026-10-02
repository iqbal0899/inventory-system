import { useEffect, useState } from "react";
import { Save, X } from "lucide-react";

import Button from "../common/button";

import styles from "../../css/supplierForm.module.css";

function SupplierForm({
  supplier = null,
  onSubmit,
  onCancel,
  loading = false,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (supplier) {
      setFormData({
        name: supplier.name || "",
        phone: supplier.phone || "",
        email: supplier.email || "",
        address: supplier.address || "",
      });
    } else {
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
      });
    }

    setErrors({});
  }, [supplier]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama supplier wajib diisi";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Format email tidak valid";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    await onSubmit({
      name: formData.name.trim(),
      phone: formData.phone.trim() || null,
      email: formData.email.trim() || null,
      address: formData.address.trim() || null,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="name">
            Nama Supplier <span className={styles.required}>*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama supplier"
            disabled={loading}
            className={errors.name ? styles.inputError : ""}
          />

          {errors.name && (
            <span className={styles.errorText}>{errors.name}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Nomor Telepon</label>

          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Contoh: 081234567890"
            disabled={loading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="supplier@email.com"
            disabled={loading}
            className={errors.email ? styles.inputError : ""}
          />

          {errors.email && (
            <span className={styles.errorText}>{errors.email}</span>
          )}
        </div>

        <div className={styles.formGroupFull}>
          <label htmlFor="address">Alamat</label>

          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Masukkan alamat supplier"
            rows={4}
            disabled={loading}
          />
        </div>
      </div>

      <div className={styles.formActions}>
        <Button
          type="button"
          variant="outline"
          icon={X}
          onClick={onCancel}
          disabled={loading}
        >
          Batal
        </Button>

        <Button
          type="submit"
          variant="primary"
          icon={Save}
          loading={loading}
          disabled={loading}
        >
          {supplier ? "Simpan Perubahan" : "Simpan Supplier"}
        </Button>
      </div>
    </form>
  );
}

export default SupplierForm;

