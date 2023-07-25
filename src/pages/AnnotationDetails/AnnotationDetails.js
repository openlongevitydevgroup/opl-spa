import { useParams } from "react-router-dom";

function AnnotationDetails(){
    const {category, id} = useParams(); 


    return(
        <>
                <h1>{category}</h1>
        <h1>{id}</h1>
        </>

    )

}
export default AnnotationDetails; 