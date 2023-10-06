import useGetApi from "../../../../../utils/hooks/useApi";
import apiAnnotations from "../../../../../api/apiAnnotations";
import { useEffect, useState } from "react";
import extractAnnotationInformation from "../../../../AnnotationDetails/functions/extractAnnotationInformation";

function ClassificationComponent(props) {
  // props for params needed for the api call
  const problemId = props.problemId;
  const annotation = props.annotation.toLowerCase();
  const params = { annotation, problemId };

  // Get the list of annotation titles after getting api data.
  const [annotations, setAnnotations] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getAnnotationsForProblem() {
      try {
        const { data } = await apiAnnotations.getAnnotationsForProblem(params);
        const annotationArray = data.map((item) => item[annotation]);
        setAnnotations(annotationArray);
      } catch (error) {
        setError(error.message);
      }
    }
    getAnnotationsForProblem();
  }, []);

  return (
    <div className="classification-data">
      <ul>
        {error && <p> Error has occurred: {error}</p>}
        {annotations ? (
          annotations.map((annotation) => (
            <p
              className="underline hover:font-semibold hover:text-theme-blue"
              key={annotation.title}
            >
              {annotation.title}
            </p>
          ))
        ) : (
          <p> - </p>
        )}
      </ul>
    </div>
  );
}

export default ClassificationComponent;
