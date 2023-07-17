import axios from "axios";
async function getOpenProblems() {
  const { data: recursiveData } = await axios.get(process.env.REACT_APP_OPEN_PROBLEMS_ROOT_ENDPOINT
  );
  const { data } = await axios.get(process.env.REACT_APP_OPEN_PROBLEMS_ENDPOINT
  );
  return { recursiveData, data };
}

export default getOpenProblems;
