import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  // Quote Endpoints
  getQuote: async (data: { sqm: number; surfaceType: string; projectType: string }) => {
    const response = await apiClient.post("/quote", data);
    return response.data;
  },

  // Recommendation Endpoints
  getRecommendation: async (params: { climate: string; surface: string; type: string }) => {
    const response = await apiClient.get("/recommend", { params });
    return response.data;
  },

  // Lead Generation
  contactSales: async (data: any) => {
    const response = await apiClient.post("/contact", data);
    return response.data;
  },

  distributorSignup: async (data: any) => {
    const response = await apiClient.post("/distributor-signup", data);
    return response.data;
  },

  // Product Catalog
  getProducts: async () => {
    const response = await apiClient.get("/products");
    return response.data;
  },

  // Blog Endpoints
  getBlogPosts: async () => {
    const response = await apiClient.get("/blog");
    return response.data;
  },

  getBlogPostById: async (id: string) => {
    const response = await apiClient.get(`/blog/${id}`);
    return response.data;
  },

  createBlogPost: async (data: any) => {
    const response = await apiClient.post("/blog", data);
    return response.data;
  },
};

export default apiClient;
