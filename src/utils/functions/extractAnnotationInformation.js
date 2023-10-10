function extractAnnotationInformation(annotation, category) {
  // Declare title and id variables before the switch statement
  let title, id, parent;

  // Function to extract titles and ids from annotation data to be used in the interface
  switch (category) {
    case "gene":
      title = annotation.geneName;
      id = annotation.geneId;
      parent = null;
      break;

    case "subject":
      title = annotation.title;
      id = annotation.id;
      parent = annotation.parent;
      break;

    case "compound":
      title = annotation.compound_name;
      id = annotation.compound_id;
      parent = null;

    default:
      // Handle other cases or provide a default value
      title = "N/A";
      id = "N/A";
      parent = null;
      break;
  }

  return { title, id, category, parent };
}

export default extractAnnotationInformation;
