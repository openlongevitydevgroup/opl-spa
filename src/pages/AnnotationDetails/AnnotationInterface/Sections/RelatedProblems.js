import InterfaceTemplate from "../../../../components/Templates/InterfaceTemplate";
import extractAnnotationInformation from "../../functions/extractAnnotationInformation";
import { useSelector } from "react-redux";
function RelatedProblems(props) {
    const category = useSelector((state) => state.annotation.annotation)
    const data = props.data;
    const {title,id} = extractAnnotationInformation(data,category);
    

    return (
      <InterfaceTemplate title="Related Problems">
        <p className="text-sm underline md:text-base py-2">
          Open Problems relating to {category} : {title}
        </p>
      </InterfaceTemplate>
    );
  }


export default RelatedProblems;
