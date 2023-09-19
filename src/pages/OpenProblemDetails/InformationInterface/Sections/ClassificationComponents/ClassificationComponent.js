import useGetApi from "../../../../../utils/hooks/useApi";
import apiAnnotations from "../../../../../api/apiAnnotations";
import { useEffect, useState } from "react";
import extractAnnotationInformation from "../../../../AnnotationDetails/functions/extractAnnotationInformation";

function ClassificationComponent(props) {
  // props for params needed for the api call
  const problemId = props.id;
  const annotation = props.annotation;
  const params = { annotation, problemId };

  const { apiData: annotationData } = useGetApi(
    apiAnnotations.getAnnotationsForProblem,
    params
  );

  // Get the list of annotation titles after getting api data.
  const [annotations, setAnnotations] = useState([]);
  useEffect(() => {
    if (annotationData) {
      const annotationArr = annotationData.map((annotationItem) =>
        extractAnnotationInformation(annotationItem[annotation], annotation)
      );
      setAnnotations(annotationArr);
    }
  }, [annotationData]);

  return (
    <div className="classification-data">
      <ul>
        {annotationData ? (
          annotations.map((annotation) => (
            <p key={annotation.title}>{annotation.title}</p>
          ))
        ) : (
          <p> - </p>
        )}
      </ul>
    </div>
  );
}

export default ClassificationComponent;
