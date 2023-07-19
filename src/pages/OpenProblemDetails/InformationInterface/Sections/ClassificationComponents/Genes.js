import useAnnotation from "../../../../../utils/hooks/useAnnotation";

function Genes(props){
    const id = props.id;
    const endpoint = `${process.env.REACT_APP_ANNOTATIONS_ENDPOINT}${id}/genes`; 
    const genes = useAnnotation(endpoint); 

    return(
        <div className="genes-classification">
            <ul className="gene-list flex flex-row justify-start">
                {genes ? genes.map((gene) => <li key={gene.gene_id.gene_symbol}>{gene.gene_id.gene_symbol}</li>) : <p>None</p>}

            </ul>
        </div>
    )
}; 
export default Genes; 