import { annotationActions } from "../../../state/Annotation/annotationSlice";
function dispatchAnnotationDetails(dispatch, category, data) {
  dispatch(annotationActions.setState({ key: "annotation", value: category }));
  switch (category) {
    case "theory":
      dispatch(
        annotationActions.setState({
          key: "details",
          value: {
            id: data.theory_id,
            title: data.theory_title,
            description: data.theory_description,
            parent: data.theory_id,
          },
        })
      );
      break;

    case "gene":
      dispatch(
        annotationActions.setState({
          key: "details",
          value: {
            id: data.gene_id,
            title: data.gene_name,
            geneSymbol: data.gene_symbol,
            species: data.gene_species,
          },
        })
      );
      break;
    case "protein":
      dispatch(
        annotationActions.setState({
          key: "details",
          value: {
            id: data.protein_id,
            title: data.protein_name,
            species: data.species,
          },
        })
      );
  }
}

export default dispatchAnnotationDetails;
