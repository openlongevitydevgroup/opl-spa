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

export default useApi;