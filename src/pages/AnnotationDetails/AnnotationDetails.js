import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import AnnotationInterface from "./AnnotationInterface/AnnotationInterface";
import { useGetApi2 } from "../../utils/hooks/useApi";
import apiAnnotations from "../../api/apiAnnotations";
import dispatchAnnotationDetails from "./functions/dispatchAnnotationDetails";
import AnnotationHeader from "./Header/AnnotationHeader";
function AnnotationDetails() {
  const dispatch = useDispatch();
  const { category, id } = useParams();

  const { apiData, isLoading } = useGetApi2(
    apiAnnotations.getAnnotationDetails,
    { annotation: category, annotationId: id }
  );

  useEffect(() => {
    if (apiData && isLoading === false) {
      const data = apiData.data;
      dispatchAnnotationDetails(dispatch, category, data)
    }
  }, [apiData, isLoading]);
  return (
    <div>
      <hr className="border-theme-blue" />
      {!isLoading  && <AnnotationHeader/>}
      
      <section className="annotation-interface">
        <AnnotationInterface />
      </section>
    </div>
  );
}

export default AnnotationDetails;
