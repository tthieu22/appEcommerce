import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

// Function to get users
const getColor = async () => {
  try {
    const response = await axios.get(`${base_url}color`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data || error;
  }
};
const createColor = async (colorData) => {
  try {
    const response = await axios.post(`${base_url}color`, colorData, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data || error;
  }
};
const colorService = {
  getColor,
  createColor,
};

export default colorService;
