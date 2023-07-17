import axios from "axios"
async function getSubmissions(id){
    const openProblemId = Number(id); 
    try{
        // CHANGE TO HTTPS 
        const {data} = await axios.get(`http://${process.env.REACT_APP_DB_REQUEST}/api/posts/${openProblemId}`)
        return data
    }catch(error){
        return error;
    }
}



export default getSubmissions