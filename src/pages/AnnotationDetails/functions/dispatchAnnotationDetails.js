import { annotationActions } from "../../../state/Annotation/annotationSlice";
function dispatchAnnotationDetails(dispatch, category, data) {
  dispatch(annotationActions.setState({key:"annotation", value: category}))
  switch (category) {
    case "theory":
      dispatch(
        annotationActions.setState({
          key: "theory",
          value: {
            theoryId: data.theory_id,
            title: data.theory_title,
            description: data.theory_description,
            parent: data.theory_id,
          },
        })
      );
    case "gene":
      dispatch(
        annotationActions.setState({
          key: "gene",
          value: {
            geneId: data.gene_id,
            geneName: data.gene_name,
            geneSymbol: data.gene_symbol,
            species: data.gene_species,
          },
        })
      );
    case "protein":
      dispatch(
        annotationActions.setState({
          key: "protein",
          value: {
            proteinId: data.protein_id,
            proteinName: data.protein_name,
            species: data.species,
          },
        })
      );
  }
}

export default dispatchAnnotationDetails;
