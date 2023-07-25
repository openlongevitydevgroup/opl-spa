import apiClient from "./apiClient";


const apiSubmissions = {
    getSubmissionCount: async (params) => {
        const problemId = params.problemId; 
        try {
            const response = await apiClient.get(`posts/${problemId}/counts`)
            return response;
        }catch(error){
            return error;
        }
    }
}

export default apiSubmissions;