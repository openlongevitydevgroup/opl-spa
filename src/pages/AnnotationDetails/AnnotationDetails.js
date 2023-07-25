import { useParams } from "react-router-dom";
import { useGetApi2 } from "../../utils/hooks/useApi";
import apiAnnotations from "../../api/apiAnnotations";
import { useEffect } from "react";
function AnnotationDetails(){
    const {category, id} = useParams(); 
    const {apiData: annotationData, isLoading} = useGetApi2(apiAnnotations.getAnnotationDetails, {annotation:category, annotationId: id})
    console.log(annotationData)
    return(
        <div>
        <hr className="border-theme-blue"/>
              <div className="title flex flex-row pt-8 ">
        <h1 className="text-lg md:text-2xl" id={id}>
            {category}
        </h1>
      </div>
        <h1>{category}</h1>
        <h1>{id}</h1>
        </div>

    )

}
export default AnnotationDetails; 