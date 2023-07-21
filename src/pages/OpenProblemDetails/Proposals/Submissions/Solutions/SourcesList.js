
function SourcesList(props){
    const sources = props.sources
    if(sources.length > 0){
        return(
            <ul>
                {sources.map((ref) => 
                <li key={ref.reference_id} className="list-disc">
                    {ref.type === "Link" ? <a className="text-sm hover:underline hover:text-theme-blue" href={ref.ref}>{ref.ref}</a> : <p className="text-sm">{ref.ref}</p>}
                </li>
                 )}
            </ul>
        )
    }else{
        return(
            <p className="text-sm py-2">None submitted.</p>
        )
    }

}

export default SourcesList