import { useNavigate } from "react-router-dom";
import { Edit, Eye, Trash2 } from "lucide-react";

import Button from "../common/button";
import Table from "../common/table";

import styles from "../../css/suppliers.module.css";

function SupplierTable({
  suppliers = [],
  loading = false,
  onEdit,
  onDelete,
}) {
  const navigate = useNavigate();

  const handleView = (supplier) => {
    if (!supplier?.id) {
      console.error("ID supplier tidak tersedia:", supplier);
      return;
    }

    navigate(`/suppliers/${supplier.id}`);
  };

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
      render: (supplier) => supplier.name || "-",
    },

    {
      key: "phone",
      label: "Telepon",
      render: (supplier) => supplier.phone || "-",
    },

    {
      key: "email",
      label: "Email",
      render: (supplier) => supplier.email || "-",
    },

    {
      key: "address",
      label: "Alamat",
      render: (supplier) => (
        <div className={styles.addressCell}>
          {supplier.address || "-"}
        </div>
      ),
    },

    {
      key: "createdAt",
      label: "Dibuat",
      render: (supplier) =>
        supplier.createdAt
          ? new Date(
              supplier.createdAt
            ).toLocaleDateString("id-ID")
          : "-",
    },

    {
      key: "actions",
      label: "Aksi",
      align: "center",

      render: (supplier) => (
        <div className={styles.actions}>
          {/* Detail */}
          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Eye}
            title="Lihat detail"
            onClick={() => handleView(supplier)}
          />

          {/* Edit */}
          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Edit}
            title="Edit supplier"
            onClick={() => onEdit(supplier)}
          />

          {/* Delete */}
          <Button
            type="button"
            variant="ghost"
            size="small"
            icon={Trash2}
            title="Hapus supplier"
            onClick={() => onDelete(supplier)}
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={suppliers}
      loading={loading}
      emptyMessage="Belum ada supplier."
      rowKey="id"
    />
  );
}

export default SupplierTable;

