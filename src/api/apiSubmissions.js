import apiClient from "./apiClient";

const apiSubmissions = {
  getSubmissions: async (params) => {
    const problemId = params.problemId;
    try {
      const response = await apiClient.get(`posts/${problemId}`);
      return response;
    } catch (error) {
      return error;
    }
  },
  getSubmissionCount: async (params) => {
    const problemId = params.problemId;
    try {
      const response = await apiClient.get(`posts/${problemId}/counts`);
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default apiSubmissions;
