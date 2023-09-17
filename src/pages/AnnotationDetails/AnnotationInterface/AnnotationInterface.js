import RelatedProblems from "./Sections/RelatedProblems";
import { useSelector } from "react-redux";

function AnnotationInterface() {
  const annotationData = useSelector((state) => state.annotation.details);
  return <>{annotationData && <RelatedProblems data={annotationData} />}</>;
}

export default AnnotationInterface;
