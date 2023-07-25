import apiClient from "./apiClient"

const apiReferences = {
    getReferenceForProblem: async (params) => {
        const openProblemId = params.openProblemId;
        try{
            const response = await apiClient.get(`open-problems/${openProblemId}/references`)
            return response;
        }catch(error){
            return error;
        }
    }
}

export default apiReferences;