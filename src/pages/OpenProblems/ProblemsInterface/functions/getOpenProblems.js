import apiProblems from "../../../../api/apiProblems";

const sortingObj = {
  latest: apiProblems.getAllProblems,
  top: apiProblems.sortedDescendantsDescending,
  answered: apiProblems.sortedSubmissionsDescending,
  root: apiProblems.getRootProblems,
};

export async function getProblems() {
  const sortedData = {};
  for (const key in sortingObj) {
    try {
      const apiCall = sortingObj[key];
      const { data } = await apiCall();
      sortedData[key] = data;
    } catch (error) {
      sortedData[key] = error;
    }
  }

  return sortedData;
}
