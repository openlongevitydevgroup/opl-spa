import axios from "axios";

async function getDetails(id){
    try{
        const response = await axios.get(`https://${process.env.REACT_APP_DB_REQUEST}/api/open-problems/`+id); 
        return response;
    }catch{
        throw new Error(`Could not get details for this entry.`)
    }
}



export default getDetails;