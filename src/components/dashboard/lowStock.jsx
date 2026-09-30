import { AlertTriangle, ArrowRight } from "lucide-react";

import Button from "../common/button";
import Loading from "../common/loading";

import styles from "../../css/lowStock.module.css";

function LowStock({
  products = [],
  loading = false,
  onViewAll,
}) {
  return (
    <div className={styles.lowStockCard}>
      <div className={styles.cardHeader}>
        <div>
          <h3>Stok Menipis</h3>
          <p>Produk dengan stok rendah</p>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="small"
          icon={ArrowRight}
          iconPosition="right"
          onClick={onViewAll}
        >
          Lihat Semua
        </Button>
      </div>

      <div className={styles.stockList}>
        {loading ? (
          <div className={styles.loading}>
            <Loading
              size="medium"
              text="Memuat stok..."
            />
          </div>
        ) : products.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>
              <AlertTriangle size={20} />
            </div>

            <p>Tidak ada produk dengan stok rendah.</p>
          </div>
        ) : (
          products.map((product) => (
            <div
              className={styles.stockItem}
              key={product.id}
            >
              <div className={styles.productInfo}>
                <div className={styles.productIcon}>
                  <AlertTriangle size={15} />
                </div>

                <div className={styles.productDetails}>
                  <div className={styles.productName}>
                    {product.name}
                  </div>

                  <div className={styles.productCategory}>
                    {product.category}
                  </div>
                </div>
              </div>

              <div className={styles.stockInfo}>
                <div className={styles.stockNumber}>
                  {product.stock}
                </div>

                <span className={styles.stockLabel}>
                  unit tersisa
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LowStock;