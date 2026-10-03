import axiosApi from "./axiosApi";

export async function getStocks() {
  const response = await axiosApi.get("/stocks");
  return response.data;
}

export async function getStockByProductId(productId) {
  const response = await axiosApi.get(
    `/stocks/${productId}`
  );

  return response.data;
}

export async function getStockMovements(productId) {
  const response = await axiosApi.get(
    `/stocks/${productId}/movements`
  );

  return response.data;
}

export async function stockIn(productId, data) {
  const response = await axiosApi.post(
    `/stocks/${productId}/in`,
    {
      quantity: Number(data.quantity),
      note: data.note || null,
    }
  );

  return response.data;
}

export async function stockOut(productId, data) {
  const response = await axiosApi.post(
    `/stocks/${productId}/out`,
    {
      quantity: Number(data.quantity),
      note: data.note || null,
    }
  );

  return response.data;
}

export async function adjustStock(productId, data) {
  const response = await axiosApi.patch(
    `/stocks/${productId}/adjust`,
    {
      stock: Number(data.stock),
      note: data.note || null,
    }
  );

  return response.data;
}