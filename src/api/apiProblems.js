import apiClient from "./apiClient";

const apiProblems = {
    getRootProblems: async () =>{
        try{
            const response = await apiClient.get('open-problems/root'); 
            return response;
        }catch(error){
            return error;
        }
    }
}

export default apiProblems