import { useState } from "react";
import { Plus, Edit, Eye, Trash2, RefreshCw } from "lucide-react";

import Button from "../../components/common/button";
import Table from "../../components/common/table";
import Pagination from "../../components/common/pagination";
import Loading from "../../components/common/loading";
import Modal from "../../components/common/modal";

import Sidebar from "../../components/layout/sidebar";
import Navbar from "../../components/layout/navbar";

import styles from "../../css/suppliers.module.css";

function Suppliers() {
  const [suppliers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedSupplier, setSelectedSupplier] =
    useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const columns = [
    {
      key: "code",
      label: "Kode",
      render: (supplier) => (
        <strong>{supplier.code || "-"}</strong>
      ),
    },
    {
      key: "name",
      label: "Supplier",
      render: (supplier) =>
        supplier.name || "-",
    },
    {
      key: "phone",
      label: "Telepon",
      render: (supplier) =>
        supplier.phone || "-",
    },
    {
      key: "email",
      label: "Email",
      render: (supplier) =>
        supplier.email || "-",
    },
    {
      key: "address",
      label: "Alamat",
      render: (supplier) =>
        supplier.address || "-",
    },
    {
      key: "actions",
      label: "Aksi",
      align: "center",
      render: (supplier) => (
        <div className={styles.actions}>
          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Eye}
            onClick={() => {
              setSelectedSupplier(supplier);
              setModalOpen(true);
            }}
          />

          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Edit}
            onClick={() =>
              console.log("Edit:", supplier)
            }
          />

          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Trash2}
            onClick={() =>
              console.log("Delete:", supplier)
            }
          />
        </div>
      ),
    },
  ];

  const handleRefresh = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.layout}>
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={styles.mainContent}>
        <main className={styles.page}>
          <div className={styles.header}>
            <div>
              <h1>Supplier</h1>
              <p>
                Kelola data supplier inventory.
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
                Tambah Supplier
              </Button>
            </div>
          </div>

          {loading ? (
            <Loading
              size="medium"
              text="Memuat supplier..."
            />
          ) : (
            <>
              <Table
                columns={columns}
                data={suppliers}
                loading={loading}
                emptyMessage="Belum ada supplier."
                rowKey="id"
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}

          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Detail Supplier"
            size="medium"
          >
            {selectedSupplier && (
              <div className={styles.detail}>
                <div>
                  <span>Kode</span>
                  <strong>
                    {selectedSupplier.code || "-"}
                  </strong>
                </div>

                <div>
                  <span>Nama</span>
                  <strong>
                    {selectedSupplier.name || "-"}
                  </strong>
                </div>

                <div>
                  <span>Telepon</span>
                  <strong>
                    {selectedSupplier.phone || "-"}
                  </strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    {selectedSupplier.email || "-"}
                  </strong>
                </div>

                <div>
                  <span>Alamat</span>
                  <strong>
                    {selectedSupplier.address || "-"}
                  </strong>
                </div>
              </div>
            )}
          </Modal>
        </main>
      </div>
    </div>
  );
}

export default Suppliers;