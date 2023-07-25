import apiClient from "./apiClient"

const apiReferences = {
    getReferenceForProblem: async (params) => {
        const openProblemId = params.openProblemId;
        try{
            const response = await apiClient.get(`open-problems/${openProblemId}/references`)
            if(response.status === 204){ //If no content return null
                return null;
            }
            return response;
        }catch(error){
            return error;
        }
    }
}

export default apiReferences;