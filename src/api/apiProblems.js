import apiClient from "./apiClient";

const apiProblems = {
  getAllProblems: async () => {
    try {
      const response = await apiClient.get("open-problems");
      return response;
    } catch (error) {
      return error;
    }
  },
  getRootProblems: async () => {
    try {
      const response = await apiClient.get("open-problems/root");
      return response;
    } catch (error) {
      return error;
    }
  },
  getDetails: async (params) => {
    const id = params.id;
    try {
      const response = await apiClient.get("open-problems/" + id);
      return response;
    } catch (error) {
      return error;
    }
  },
  sortedDescendantsDescending: async () => {
    try {
      const response = await apiClient.get("open-problems/sorted/descendants");
      return response;
    } catch (error) {
      return error;
    }
  },
  sortedSubmissionsDescending: async () => {
    try {
      const response = await apiClient.get("open-problems/sorted/submissions");
      return response;
    } catch (error) {
      return error;
    }
  },
  verifyToken: async (params) => {
    const SECRET_KEY = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;
    const token = params.token;
    try {
      const response = await apiClient.post("open-problems/verify-token", {
        secret: SECRET_KEY,
        response: token,
      });
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default apiProblems;
