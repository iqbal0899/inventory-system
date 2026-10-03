import axiosApi from "./axiosApi";

export async function fetchDashboard() {
  const response = await axiosApi.get("/dashboard");
  console.log("FETCH DASHBOARD RESPONSE:", response.data);
  return response.data;
}

export async function getDashboardStats() {
  const response = await axiosApi.get("/dashboard/stats");
  return response.data;
}

export async function getRecentStockMovements() {
  const response = await axiosApi.get("/dashboard/stock-movements");
  return response.data;
}

export async function getLowStockProducts() {
  const response = await axiosApi.get("/dashboard/low-stock");
  return response.data;
}