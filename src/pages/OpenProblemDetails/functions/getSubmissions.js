import axios from "axios"
async function getSubmissions(id){
    const openProblemId = Number(id); 
    try{
        // CHANGE TO HTTPS 
        const {data} = await axios.get(`${process.env.REACT_APP_GET_SUBMISSION_ENDPOINT}/${openProblemId}`)
        return data
    }catch(error){
        return error;
    }
}



export default getSubmissions