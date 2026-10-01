import { useState } from "react";
import { Plus, Search, RefreshCw } from "lucide-react";

import Button from "../../components/common/button";
import Loading from "../../components/common/loading";
import ProductTable from "../../components/products/productTable";
import ProductModal from "../../components/products/productModal";
import Sidebar from "../../components/layout/sidebar";
import Navbar from "../../components/layout/navbar";

import styles from "../../css/products.module.css";

function Products() {
  const [collapsed, setCollapsed] = useState(false);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleAdd = () => {
    setSelectedProduct(null);
    setModalOpen(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleView = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleDelete = (product) => {
    console.log("Delete:", product);
  };

  const handleSubmit = (data) => {
    console.log("Submit:", data);
    setModalOpen(false);
  };

  const handleRefresh = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.layout}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`${styles.mainContent} ${
          collapsed ? styles.collapsed : ""
        }`}
      >
        <Navbar />

        <main className={styles.page}>
          <div className={styles.header}>
            <div>
              <h1>Produk</h1>

              <p>
                Kelola seluruh data produk inventory.
              </p>
            </div>

            <Button
              type="button"
              variant="primary"
              icon={Plus}
              onClick={handleAdd}
            >
              Tambah Produk
            </Button>
          </div>

          <div className={styles.toolbar}>
            <div className={styles.search}>
              <Search size={18} />

              <input
                type="text"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari produk..."
              />
            </div>

            <Button
              type="button"
              variant="outline"
              icon={RefreshCw}
              onClick={handleRefresh}
            >
              Refresh
            </Button>
          </div>

          {loading ? (
            <Loading
              size="medium"
              text="Memuat produk..."
            />
          ) : (
            <ProductTable
              products={products}
              loading={loading}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}

          <ProductModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            product={selectedProduct}
            loading={false}
            onSubmit={handleSubmit}
          />
        </main>
      </div>
    </div>
  );
}

export default Products;