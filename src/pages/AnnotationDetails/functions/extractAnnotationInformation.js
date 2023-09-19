function extractAnnotationInformation(annotation, category) {
  // Declare title and id variables before the switch statement
  let title, id;

  // Function to extract titles and ids from annotation data to be used in the interface
  switch (category) {
    case "gene":
      title = annotation.geneName;
      id = annotation.geneId;
      break;

    case "theory":
      title = annotation.title;
      id = annotation.id;
      break;

    default:
      // Handle other cases or provide a default value
      title = "N/A";
      id = "N/A";
      break;
  }

  return { title, id };
}

export default extractAnnotationInformation;
