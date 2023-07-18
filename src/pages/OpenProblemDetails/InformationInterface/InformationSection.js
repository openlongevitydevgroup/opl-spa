import Classification from "./Sections/Classification";
import References from "./Sections/References";
import RelatedProblems from "./Sections/RelatedProblems";
function InformationSection(props){
    const children = props.children;
    const id = props.id; 
    return(
        <>
        <Classification/>
        <RelatedProblems children={children}/>
        <References id={id}/>
        </>
    )
}

export default InformationSection;