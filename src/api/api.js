import axios from "axios";

// Create an instance of Axios with default configuration
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Replace with API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Set appropriate headers if needed
  },
});

const api = {
  postComment: async (params) => {
    const submissionId = params.submissionId;
    const postData = params.data;
    try {
      const response = await apiClient.post(
        `posts/post/${submissionId}/comment/submit`,
        postData
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  getComments: async (params) => {
    const submissionId = params.submissionId;
    try {
      const {data} = await apiClient.get(
        `posts/get/${submissionId}/comments`
      );
      return data;
    } catch (error) {
      return error;
    }
  },
  getRootComments: async (params) => {
    const submissionId = params.submissionId; 
    try{
      const {data} = await apiClient.get(`posts/get/${submissionId}/comments`)
      return data;
    }catch(error){
      return error;
    }
  }
};

export default api;
