import axios from "axios";
const verifyToken = async (token) => {
    const secretKey = process.env.REACT_APP_RECAPTCHA_SECRET_KEY
    console.log(process.env.REACT_APP_VERIFY_TOKEN_ENDPOINT)
    let apiResponse = []; 
    try {
        const response = await axios.post(process.env.REACT_APP_VERIFY_TOKEN_ENDPOINT, {
            secret: secretKey, 
            response: token,
        }); 
        apiResponse.push(response['data']); 
        return apiResponse 
    }catch (error) {
        console.log(error); 
    }
}

export default verifyToken;