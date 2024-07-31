import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

// Function to get users
const getCategories = async () => {
  try {
    const response = await axios.get(`${base_url}category`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data || error;
  }
};
const createCategory = async (catData) => {
  try {
    const response = await axios.post(`${base_url}category`, catData, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data || error;
  }
};
const categoryService = {
  getCategories,
  createCategory,
};

export default categoryService;
