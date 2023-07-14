import axios from "axios";

async function getRequest(url){
    try{
        const {data} = await axios.get(url)
        return data;
    }catch(error){
        return error;
    }
}

export default getRequest; 