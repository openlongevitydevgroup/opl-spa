import doiValidator from "../../../../utils/functions/validators/doiValidator";
import pubmedValidator from "../../../../utils/functions/validators/pubmedIDValidator";

async function validateReferences(references) {
  const valid = [];
  const invalid = [];
  for (const reference of references) {
    const index = reference.indexOf(":");
    const referenceType = reference.substring(0, index);
    const referenceValue = reference.substring(index + 1);
    if (referenceType === "doi") {
      try {
        const validDOI = await doiValidator(referenceValue);
        if (validDOI) {
          valid.push(reference);
        }
      } catch (error) {
        invalid.push(reference);
      }
    } else if (referenceType === "pmid") {
      try {
        const validPMID = await pubmedValidator(referenceValue);
        if (validPMID) {
          valid.push(reference);
        }
      } catch (error) {
        invalid.push(reference);
      }
    }
  }
  return { valid, invalid };
}

async function handleValidation(references, invalidPrefixes) {
  if (!invalidPrefixes) {
    try {
      const { valid, invalid } = await validateReferences(references);
      return { valid, invalid };
    } catch (error) {
      console.log(error); //log error for now but erros should be within the invalid array
    }
  }
}

export default handleValidation;
