import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AnnotationInterface from "./AnnotationInterface/AnnotationInterface";
import apiAnnotations from "../../api/apiAnnotations";
import dispatchAnnotationDetails from "./functions/dispatchAnnotationDetails";
import AnnotationHeader from "./Header/AnnotationHeader";
import { annotationActions } from "../../state/Annotation/annotationSlice";
function AnnotationDetails() {
  const dispatch = useDispatch();
  const { category, id } = useParams();
  console.log(category, id);

  useEffect(() => {
    async function getAnnotation() {
      try {
        const { data } = await apiAnnotations.getAnnotationDetails({
          annotation: category,
          annotationId: id,
        });
        dispatchAnnotationDetails(dispatch, category, data);
      } catch (error) {
        dispatch(
          annotationActions.setState({ key: "annotation", value: "error" })
        );
        dispatch(
          annotationActions.setState({ key: "details", value: error.message })
        );
      }
    }
    getAnnotation();
  }, [category, dispatch, id]);
  return (
    <div>
      <hr className="border-theme-blue" />
      {<AnnotationHeader />}

      <section className="annotation-interface">
        <AnnotationInterface />
      </section>
    </div>
  );
}

export default AnnotationDetails;
