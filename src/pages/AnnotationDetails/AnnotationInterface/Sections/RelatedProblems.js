import InterfaceTemplate from "../../../../components/Template/InterfaceTemplate";
import extractAnnotationInformation from "../../functions/extractAnnotationInformation";
import { useSelector } from "react-redux";
function RelatedProblems(props) {
  const annotation = props.data;
  const category = useSelector((state) => state.annotation.annotation);
  const { title } = extractAnnotationInformation(annotation, category);
  console.log(title);

  return (
    <InterfaceTemplate title="Related Problems">
      <p className="py-2 text-sm underline md:text-base">
        Open Problems relating to {category} : {title}
      </p>
    </InterfaceTemplate>
  );
}

export default RelatedProblems;
