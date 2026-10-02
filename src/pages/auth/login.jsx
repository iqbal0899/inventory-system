import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  User,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

import Button from "../../components/common/button";
import axiosApi from "../../services/axiosApi";
import styles from "../../css/login.module.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

 const handleSubmit = async (event) => {
  event.preventDefault();

  if (!formData.username.trim()) {
    setError("Username wajib diisi.");
    return;
  }

  if (!formData.password) {
    setError("Password wajib diisi.");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const response = await axiosApi.post("/auth/login", {
      username: formData.username.trim(),
      password: formData.password,
    });

    console.log("LOGIN RESPONSE:", response.data);

    if (!response.data.success) {
      setError(
        response.data.message || "Login gagal."
      );
      return;
    }

    console.log("LOGIN BERHASIL");

    navigate("/dashboard", {
      replace: true,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    console.error("ERROR RESPONSE:", error.response);
    console.error("ERROR DATA:", error.response?.data);

    setError(
      error.response?.data?.message ||
        "Terjadi kesalahan. Silakan coba lagi."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginWrapper}>

        {/* ================= LEFT SIDE ================= */}
        <section className={styles.loginLeft}>
          <div className={styles.circleOne} />
          <div className={styles.circleTwo} />

          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandIcon}>
              <Box size={26} strokeWidth={2} />
            </div>

            <div>
              <h1>
                Inventory <span>System</span>
              </h1>

              <p>Kelola Stok, Tingkatkan Efisiensi</p>
            </div>
          </div>

          {/* Hero */}
          <div className={styles.hero}>
            <span className={styles.badge}>
              INVENTORY MANAGEMENT
            </span>

            <h2>
              Kelola Inventory
              <br />
              Lebih <strong>Mudah.</strong>
            </h2>

            <p>
              Kelola produk, pantau stok, dan kontrol inventory
              bisnis Anda dalam satu sistem yang sederhana,
              cepat, dan efisien.
            </p>
          </div>

          {/* Features */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Box size={22} strokeWidth={2} />
              </div>

              <div>
                <h3>Kelola Produk</h3>
                <p>Atur seluruh data produk dengan mudah.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <ChartNoAxesColumnIncreasing
                  size={22}
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3>Pantau Stok</h3>
                <p>Monitor ketersediaan stok dengan cepat.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={22} strokeWidth={2} />
              </div>

              <div>
                <h3>Data Terlindungi</h3>
                <p>Data inventory tersimpan dengan aman.</p>
              </div>
            </div>
          </div>

          {/* Warehouse Illustration */}
          <div className={styles.warehouse}>
            <div className={styles.shelf}>
              <div className={styles.shelfLevel}>
                <span className={styles.boxSmall} />
                <span className={styles.boxMedium} />
                <span className={styles.boxSmall} />
              </div>

              <div className={styles.shelfLevel}>
                <span className={styles.boxMedium} />
                <span className={styles.boxSmall} />
                <span className={styles.boxLarge} />
              </div>

              <div className={styles.shelfLevel}>
                <span className={styles.boxSmall} />
                <span className={styles.boxLarge} />
                <span className={styles.boxMedium} />
              </div>
            </div>

            <div className={styles.floor} />
          </div>
        </section>

        {/* ================= RIGHT SIDE ================= */}
        <section className={styles.loginRight}>
          <div className={styles.loginCard}>

            {/* Mobile Brand */}
            <div className={styles.mobileBrand}>
              <div className={styles.mobileBrandIcon}>
                <Box size={24} strokeWidth={2} />
              </div>

              <h2>
                Inventory <span>System</span>
              </h2>
            </div>

            {/* Form Header */}
            <div className={styles.formHeader}>
              <div className={styles.formLogo}>
                <Box size={28} strokeWidth={2} />
              </div>

              <h2>Selamat Datang</h2>

              <p>
                Silakan login untuk mengakses sistem inventory
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>

              {/* Username */}
              <div className={styles.formGroup}>
                <label htmlFor="username">
                  Username
                </label>

                <div className={styles.inputWrapper}>
                  <User
                    size={20}
                    strokeWidth={2}
                    className={styles.inputIcon}
                  />

                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Masukkan username"
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Password */}
              <div className={styles.formGroup}>
                <label htmlFor="password">
                  Password
                </label>

                <div className={styles.inputWrapper}>
                  <Lock
                    size={20}
                    strokeWidth={2}
                    className={styles.inputIcon}
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Masukkan password"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className={styles.passwordButton}
                    onClick={() =>
                      setShowPassword(
                        (previous) => !previous
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Sembunyikan password"
                        : "Tampilkan password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} strokeWidth={2} />
                    ) : (
                      <Eye size={19} strokeWidth={2} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className={styles.error}>
                  {error}
                </div>
              )}

              {/* Options */}
              <div className={styles.options}>
                <label>
                  <input type="checkbox" />
                  <span>Ingat saya</span>
                </label>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                variant="primary"
                size="large"
                fullWidth
                loading={loading}
                disabled={loading}
                className={styles.loginButton}
              >
                Login
              </Button>
            </form>

            {/* Security */}
            <div className={styles.security}>
              <div className={styles.securityIcon}>
                <ShieldCheck
                  size={22}
                  strokeWidth={2}
                />
              </div>

              <div>
                <strong>Login Aman</strong>

                <p>
                  Gunakan akun yang telah terdaftar untuk
                  mengakses sistem inventory.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <p className={styles.copyright}>
              © 2026 Inventory System. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}