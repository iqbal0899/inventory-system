import { useState } from "react";
import { RefreshCw, SlidersHorizontal } from "lucide-react";

import Button from "../../components/common/button";
import Loading from "../../components/common/loading";
import Modal from "../../components/common/modal";
import StockTable from "../../components/stock/stockMovmentTable";
import StockAdjustment from "../../components/stock/stockAdjusment";
import Sidebar from "../../components/layout/sidebar";
import Navbar from "../../components/layout/navbar";

import styles from "../../css/stock.module.css";

function Stock() {
  const [products] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [adjustmentOpen, setAdjustmentOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleView = (product) => {
    setSelectedProduct(product);
    setDetailOpen(true);
  };

  const handleAdjustment = () => {
    setDetailOpen(false);
    setAdjustmentOpen(true);
  };

  const handleSubmitAdjustment = (data) => {
    console.log("Stock adjustment:", data);
    setAdjustmentOpen(false);
  };

  const handleRefresh = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.layout}>
      <Navbar />
      <Sidebar />

      <div className={styles.mainContent}>
        <main className={styles.page}>
          <div className={styles.header}>
            <div>
              <h1>Stok</h1>
              <p>Pantau dan sesuaikan stok produk.</p>
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
              text="Memuat stok..."
            />
          ) : (
            <StockTable
              products={products}
              loading={loading}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              onView={handleView}
            />
          )}

          <Modal
            isOpen={detailOpen}
            onClose={() => setDetailOpen(false)}
            title="Detail Stok"
            size="small"
          >
            {selectedProduct && (
              <div className={styles.detail}>
                <div>
                  <span>Produk</span>
                  <strong>{selectedProduct.name}</strong>
                </div>

                <div>
                  <span>Kode</span>
                  <strong>{selectedProduct.code || "-"}</strong>
                </div>

                <div>
                  <span>Stok</span>
                  <strong>
                    {selectedProduct.stock ?? 0} unit
                  </strong>
                </div>

                <Button
                  type="button"
                  variant="primary"
                  icon={SlidersHorizontal}
                  fullWidth
                  onClick={handleAdjustment}
                >
                  Sesuaikan Stok
                </Button>
              </div>
            )}
          </Modal>

          <StockAdjustment
            isOpen={adjustmentOpen}
            onClose={() => setAdjustmentOpen(false)}
            product={selectedProduct}
            loading={false}
            onSubmit={handleSubmitAdjustment}
          />
        </main>
      </div>
    </div>
  );
}

export default Stock;