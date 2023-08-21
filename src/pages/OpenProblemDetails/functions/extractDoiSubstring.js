function extractDOIFromCitation(inputString) {
  // Regular expression to match DOI pattern in various formats
  const doiRegex =
    /(https?:\/\/dx\.doi\.org\/)?(10\.\d{4,}(?:\.\d+)*\/[^\s"<>#%{}|\^[\]`]+)/i;

  // Find DOI pattern match in the input string
  const match = inputString.match(doiRegex);

  if (match) {
    const doiPart = match[2];
    if (doiPart) {
      const doiURL = match[1] ? match[0] : `https://doi.org/${doiPart}`;
      return doiURL;
    }
  }

  return null; // Return null if no DOI match is found
}
export default extractDOIFromCitation;
