import axios from "axios";
const verifyToken = async (token) => {
    const secretKey = process.env.REACT_APP_RECAPTCHA_SECRET_KEY
    let apiResponse = []; 
    try {
        const response = await axios.post(`http://${process.env.REACT_APP_POST_REQUEST}/api/verify-token`, {
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