import ResearchComponent from "./ResearchComponent";
function Research(){
    return(
        <>
            <h1 className="text-lg md:text-xl py-2 pb-4 text-theme-blue">Submitted Relevant Research</h1>
            <div className="submitted-list py-2 border-y border-theme-blue">
                <ResearchComponent/>
            </div>
        </>
    )
}

export default Research; 