function doiValidator(input) {
  // Regular expression to match DOI pattern
  return new Promise((resolve, reject) => {
    console.log(input)
    if(input.includes('.') && input.includes('/')){
      
      return resolve(input)
    }else{
      reject("Incorrect DOI input format")
    }
  });

}

export default doiValidator;
