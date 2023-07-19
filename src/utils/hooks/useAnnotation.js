import { useEffect,useState } from "react";
import getRequest from "../functions/getRequest";
function useAnnotation(endpoint){
    const [annotation, setAnnotation] = useState("");
    useEffect(() => {
        async function getAnnotation(){
            const data = await getRequest(endpoint); 
            setAnnotation(data); 
        }
        getAnnotation(); 
    }, [endpoint])
    return annotation;
};

export default useAnnotation;