function doiValidator(input) {
  // Regular expression to match DOI pattern
  return new Promise((resolve, reject) => {
    const doiPattern = /^(10\.\d{4,}(?:\.\d+)*\/\S+)$/;
    const isValid = doiPattern.test(input)
    if(isValid){
        return resolve(input)
    }else{
        reject("Incorrect DOI input format.")
    }
  });

}

export default doiValidator;
