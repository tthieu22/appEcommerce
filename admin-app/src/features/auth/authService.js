import axios from "axios";
import { base_url } from "../../utils/base_url";

const login = async (userData) => {
  try {
    const response = await axios.post(`${base_url}/user/admin-login`, userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

const authService = {
  login,
};

export default authService;
