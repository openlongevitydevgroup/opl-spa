import useApi from "../../../../../utils/hooks/useApi";

function Theory(props){
    const id = props.id; 
    const endpoint = `${process.env.REACT_APP_ANNOTATIONS_ENDPOINT}${id}/theory`; 
    const theories = useApi(endpoint); 
    
    return(
        <div className="theory-classification">
            <ul className="reference">
                {theories ? theories.map((theory) => <li key={theory.theory.thoery_title}>{theory.theory.theory_title}</li>) : <p className="text-sm md:text-base font-semibold">None</p>}
            </ul>
        </div>
    )



}

export default Theory;