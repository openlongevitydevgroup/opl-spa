import Classification from "./Sections/Classification";
import References from "./Sections/References";
import ConnectedProblems from "./Sections/ConnectedProblems";
function InformationSection(props){
    const children = props.children;
    const id = props.id; 
    return(
        <>
        <Classification/>
        <ConnectedProblems children={children}/>
        <References id={id}/>
        </>
    )
}

export default InformationSection;