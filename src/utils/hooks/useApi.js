import { useEffect,useState } from "react";
import getRequest from "../functions/getRequest";
function useApi(endpoint){
    const [apiData, setApiData] = useState("");
    useEffect(() => {
        async function getApiData(){
            const data = await getRequest(endpoint); 
            setApiData(data); 
        }
        getApiData(); 
    }, [endpoint])
    return apiData;
};


// To replace useApi
export function useGetApi2(api, params){
    const [apiData, setApiData] = useState(""); 
    useEffect(()=>{
        async function getApiData(){
            const data = await api(params); 
            setApiData(data); 
        }
        getApiData();

    }, [])
    return apiData;
}

export function usePostApi(api, params){
    try{
        const response = api(params);
        if(response.ok){
            return response;
        }
    }catch(error){
        return error;
    }
}

export default useApi;