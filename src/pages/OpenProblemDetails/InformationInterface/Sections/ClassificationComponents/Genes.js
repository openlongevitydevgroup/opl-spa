import useGetApi from "../../../../../utils/hooks/useApi";
import apiAnnotations from "../../../../../api/apiAnnotations";
function Genes(props) {
  const id = props.id;
  //   Get all the genes for a problem
  const { apiData: genes } = useGetApi(
    apiAnnotations.getAnnotationsForProblem,
    {
      annotation: "genes",
      problemId: id,
    }
  );

  return (
    <div className="genes-classification">
      <ul className="gene-list inline-flex gap-2">
        {genes ? (
          genes.map((gene) => (
            <li key={gene.gene_id.gene_symbol}>{gene.gene_id.gene_symbol} </li>
          ))
        ) : (
          <p>-</p>
        )}
      </ul>
    </div>
  );
}
export default Genes;
