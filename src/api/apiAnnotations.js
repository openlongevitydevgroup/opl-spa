import apiClient from "./apiClient";


const apiAnnotations = {
    getAnnotationDetails: async (params) => { //Get request for getting a single annotation and its details from the api
        const annotation = params.annotation; 
        const annotationId = params.annotationId;
        try{
            const response = await apiClient.get(`annotations/${annotation}/${annotationId}`);
            return response;
        }catch(error){
            return error;
        }
    }
}; 

export default apiAnnotations