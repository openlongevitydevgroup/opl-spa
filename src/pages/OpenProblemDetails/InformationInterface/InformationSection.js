import Classification from "./Sections/Classification";
import References from "./Sections/References";
import RelatedProblems from "./Sections/RelatedProblems";
function InformationSection(props){
    const children = props.children
    return(
        <>
        <Classification/>
        <RelatedProblems children={children}/>
        <References/>
        </>
    )
}

export default InformationSection;