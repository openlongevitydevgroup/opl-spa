function pubmedValidator(input) {
  // Regular expression to match PubMed ID pattern (numeric value)
  return new Promise((resolve,reject) => {
    const pubmedIDPattern = /^\d+$/;
    const isValid = pubmedIDPattern.test(input);
    if(isValid){
        return resolve(input)
    }else{
        return reject("Incorrect pubmed pattern")
    }
  })


}

export default pubmedValidator;
