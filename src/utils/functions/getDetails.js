import axios from "axios";

async function getDetails(id){
    try{
        const response = await axios.get(`${process.env.REACT_APP_OPEN_PROBLEMS_ENDPOINT}${id}`); 
        return response;
    }catch{
        throw new Error(`Could not get details for this entry.`)
    }
}



export default getDetails;