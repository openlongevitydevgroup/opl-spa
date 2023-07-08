import { useSelector } from "react-redux";
import TextInput from "./TextInput";
import SourcesInput from "./SourcesInput";
import Chip from "../../../../components/UI/Chip/Chip";
function ProposalForm(){
    // Redux state for switching post request to correct api endpoint.
    const viewState = useSelector((state) => state.details.researchSolutionsView)
    return(
        <div className="proposal-form px-2 py-2 flex flex-col ">
            <h1 className="title text-lg text-theme-blue font-semibold pb-4">Submit {viewState === "Solution" ? "a solution" : "additional research" } </h1>
            <TextInput/>
            <SourcesInput/>
            <Chip><button>Submit</button></Chip>
        </div>
    )
}; 

export default ProposalForm;