import RelatedProblems from "./Sections/RelatedProblems";
import { useSelector } from "react-redux";

function AnnotationInterface() {
  const annotation = useSelector((state) => state.annotation.annotation);
  const annotationData = useSelector((state) => state.annotation[annotation]);
    return (
      <>
      {annotationData &&
              <RelatedProblems data={annotationData} />

      }
      </>
    );
  }


export default AnnotationInterface;
