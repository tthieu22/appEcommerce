import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";
// Function to get users
const getBrand = async () => {
  try {
    const response = await axios.get(`${base_url}brand/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data || error;
  }
};
const createBrand = async (brand) => {
  try {
    const response = await axios.post(`${base_url}brand`, brand, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data || error;
  }
};
const brandService = {
  getBrand,
  createBrand,
};

export default brandService;
