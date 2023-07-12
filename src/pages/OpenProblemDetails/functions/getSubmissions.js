import axios from "axios"
async function getSubmissions(id){
    const openProblemId = id; 
    try{
        await axios.get(`http://${}`)
    }catch{}
}

export default getSubmissions