import { useState } from "react";
import { RefreshCw, Plus } from "lucide-react";

import Button from "../../components/common/button";
import Loading from "../../components/common/loading";
import RequestTable from "../../components/requests/requestTable";
import RequestAction from "../../components/requests/requestAction";
import Sidebar from "../../components/layout/sidebar";
import Navbar from "../../components/layout/navbar";

import styles from "../../css/requests.module.css";

function Requests() {
  const [requests] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [action, setAction] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleView = (request) => {
    setSelectedRequest(request);
  };

  const handleAction = (type) => {
    setAction(type);
  };

  const handleConfirm = (request) => {
    console.log(action, request);
    setAction(null);
    setSelectedRequest(null);
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
              <h1>Permintaan Stok</h1>
              <p>
                Kelola permintaan stok dari pengguna.
              </p>
            </div>

            <div className={styles.headerActions}>
              <Button
                type="button"
                variant="outline"
                icon={RefreshCw}
                onClick={handleRefresh}
              >
                Refresh
              </Button>

              <Button
                type="button"
                variant="primary"
                icon={Plus}
              >
                Buat Request
              </Button>
            </div>
          </div>

          {loading ? (
            <Loading
              size="medium"
              text="Memuat request..."
            />
          ) : (
            <RequestTable
              requests={requests}
              loading={loading}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              onView={handleView}
            />
          )}

          <RequestAction
            isOpen={Boolean(action)}
            onClose={() => setAction(null)}
            request={selectedRequest}
            action={action}
            loading={false}
            onConfirm={handleConfirm}
          />
        </main>
      </div>
    </div>
  );
}

export default Requests;