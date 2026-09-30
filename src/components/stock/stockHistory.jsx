import { useState } from "react";
import { RefreshCw } from "lucide-react";

import Button from "../../components/common/button";
import Loading from "../../components/common/loading";
import StockMovementTable from "../../components/stock/stockMovementTable";

import styles from "../../css/stockHistory.module.css";

function StockHistory() {
  const [movements] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleRefresh = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>Riwayat Stok</h1>
          <p>
            Riwayat seluruh pergerakan stok produk.
          </p>
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
          text="Memuat riwayat stok..."
        />
      ) : (
        <StockMovementTable
          movements={movements}
          loading={loading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}

export default StockHistory;