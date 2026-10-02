// function SupplierDetail({ supplier }) {
//   if (!supplier) {
//     return <p>Tidak ada data supplier.</p>;
//   }

//   return (
//     <div className="supplier-detail">
//       <div>
//         <strong>Nama Supplier</strong>
//         <p>{supplier.name || "-"}</p>
//       </div>

//       <div>
//         <strong>Nomor Telepon</strong>
//         <p>{supplier.phone || "-"}</p>
//       </div>

//       <div>
//         <strong>Email</strong>
//         <p>{supplier.email || "-"}</p>
//       </div>

//       <div>
//         <strong>Alamat</strong>
//         <p>{supplier.address || "-"}</p>
//       </div>

//       <div>
//         <strong>Dibuat</strong>
//         <p>
//           {supplier.createdAt
//             ? new Date(supplier.createdAt).toLocaleString("id-ID")
//             : "-"}
//         </p>
//       </div>

//       <div>
//         <strong>Diperbarui</strong>
//         <p>
//           {supplier.updatedAt
//             ? new Date(supplier.updatedAt).toLocaleString("id-ID")
//             : "-"}
//         </p>
//       </div>

//       {supplier.products && (
//         <div>
//           <strong>Jumlah Produk</strong>
//           <p>{supplier.products.length} produk</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SupplierDetail;

