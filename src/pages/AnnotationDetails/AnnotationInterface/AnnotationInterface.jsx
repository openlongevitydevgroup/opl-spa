import RelatedProblems from "./Sections/RelatedProblems";
import RelatedReferences from "./Sections/RelatedReferences";
import { useLoaderData } from "react-router-dom";
function AnnotationInterface(props) {
  const { data: annotationData } = useLoaderData();

  return (
    <>
      {props.children}
      <RelatedProblems annotationData={annotationData} />
      <RelatedReferences annotationData={annotationData} />
    </>
  );
}

export default AnnotationInterface;
