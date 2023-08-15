import apiProblems from "../../api/apiProblems";
const verifyToken = async (token) => {
  let apiResponse = [];
  try {
    const response = apiProblems.verifyToken({ token });
    apiResponse.push(response["data"]);
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
};

export default verifyToken;
