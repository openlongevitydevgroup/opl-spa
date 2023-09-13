import useApi from "../../../../../utils/hooks/useApi";
function Genes(props) {
  const id = props.id;
  const endpoint = `${process.env.REACT_APP_ANNOTATIONS_ENDPOINT}${id}/genes`;
  const genes = useApi(endpoint);

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
