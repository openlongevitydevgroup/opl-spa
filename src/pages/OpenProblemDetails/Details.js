import { useLoaderData } from "react-router-dom"
function Details(){
    const {data} = useLoaderData(); 
    const openProblemDetails = data.open_problem; 
    const parentData = data.parent_data;
    return(
        <div>
            <hr className="border-1 border-slate-500"/>
            <div className="title pt-4">
                <h1>Open Problem: </h1>
            </div>

        </div>
    )
}


export default Details