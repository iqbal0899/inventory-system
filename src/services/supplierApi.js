import axiosApi from "./axiosApi";

export async function getSuppliers() {
  const response = await axiosApi.get("/suppliers");
  return response.data;
}

export async function getSupplierById(id) {
  const response = await axiosApi.get(
    `/suppliers/${id}`
  );

  return response.data;
}

export async function createSupplier(data) {
  const response = await axiosApi.post(
    "/suppliers",
    data
  );

  return response.data;
}

export async function updateSupplier(id, data) {
  const response = await axiosApi.put(
    `/suppliers/${id}`,
    data
  );

  return response.data;
}

export async function deleteSupplier(id) {
  const response = await axiosApi.delete(
    `/suppliers/${id}`
  );

  return response.data;
}

