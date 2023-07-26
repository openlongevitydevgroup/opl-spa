function extractAnnotationInformation(annotation, category){

    switch(category){
        case "gene": 
        const title = annotation.geneName; 
        const id = annotation.geneId;
        return {title,id}

    }
}

export default extractAnnotationInformation;