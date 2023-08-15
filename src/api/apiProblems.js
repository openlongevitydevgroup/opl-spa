import apiClient from "./apiClient";

const apiProblems = {
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
