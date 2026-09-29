import { AlertTriangle } from "lucide-react";

import styles from "../../css/lowStock.module.css";

function LowStock() {
  const products = [
  ];

  return (
    <div className={styles.lowStockCard}>
      <div className={styles.cardHeader}>
        <div>
          <h3>Stok Menipis</h3>
          <p>Produk dengan stok rendah</p>
        </div>

        <button className={styles.viewAllButton}>
          Lihat Semua
        </button>
      </div>

      <div className={styles.stockList}>
        {products.map((product, index) => (
          <div className={styles.stockItem} key={index}>
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
        ))}
      </div>
    </div>
  );
}

export default LowStock;