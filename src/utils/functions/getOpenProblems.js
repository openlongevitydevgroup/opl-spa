import axios from "axios";
async function getOpenProblems() {
  const { data: recursiveData } = await axios.get(
    `http://${process.env.REACT_APP_DB_REQUEST}/api/open-problems/root`
  );
  const { data } = await axios.get(
    `http://${process.env.REACT_APP_DB_REQUEST}/api/open-problems/`
  );
  return { recursiveData, data };
}

export default getOpenProblems;
