import api from "@/lib/api";

export const fetchUserProfile = async () => {
  try {
    // AXIOS GET REQUEST - TOKEN IS AUTOMATICALLY INCLUDED
    const response = await api.get('/profile');
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.response?.data?.message };
  }
};