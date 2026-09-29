import styles from "../../css/requestTable.module.css";

function RequestTable() {
  const requests = [

  ];

  const statusLabel = {

  };

  return (
    <div className={styles.tableCard}>
      <div className={styles.cardHeader}>
        <div>
          <h3>Permintaan Stok</h3>
          <p>Permintaan stok terbaru dari kasir</p>
        </div>

        <button className={styles.viewAllButton}>
          Lihat Semua
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID Request</th>
              <th>Produk</th>
              <th>Jumlah</th>
              <th>Requester</th>
              <th>Tanggal</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>
                  <strong className={styles.requestId}>
                    {request.id}
                  </strong>
                </td>

                <td>
                  <span className={styles.productName}>
                    {request.product}
                  </span>
                </td>

                <td>
                  <span className={styles.quantity}>
                    {request.quantity} unit
                  </span>
                </td>

                <td>
                  <span className={styles.requester}>
                    {request.requester}
                  </span>
                </td>

                <td>
                  <span className={styles.date}>
                    {request.date}
                  </span>
                </td>

                <td>
                  <span
                    className={`${styles.status} ${styles[request.status]}`}
                  >
                    {statusLabel[request.status]}
                  </span>
                </td>

                <td>
                  <button className={styles.detailButton}>
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestTable;