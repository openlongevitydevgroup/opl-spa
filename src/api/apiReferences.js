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
    }, 
    verifyReference: async (params) => {
        const type = params.type; 
        const value = params.value;
        const data = {
            type: type, 
            value: value
        } 
        try{
            const response = await apiClient.post(`posts/verify-reference`, data); 
            if(response.status == 200){
                return response;
            }else if(response.status === 404){
                return "Unable to retrieve reference information"
            }
        }catch(error){
            return error;
        }
    }
}

export default apiReferences;