import axios from "axios"
import { detailsActions } from "../../../state/Details/detailsSlice";
const submit = async (data, dispatch) => {
    const openProblemId = data.openProblem
    const date = new Date();
    const requestData = {
        full_text: data.description,
        type: data.type, 
        date: date,
        open_problem: openProblemId, 
        references: JSON.stringify(data.references), 
        is_active: false,
        type: data.type,

    }
    try{
        const response = await axios.post(`http://${process.env.REACT_APP_POST_REQUEST}/api/posts/${openProblemId}/submit`, requestData); 
        if(response.status == 201){
            dispatch(detailsActions.toggleModalOpen())
            dispatch(detailsActions.setSubmitState({title:"Post submitted" ,message:"This post has been submitted for review", status:"success"}))
        }
    }catch(error){
        dispatch(detailsActions.toggleModalOpen())
        dispatch(detailsActions.setSubmitState({title:"Unsuccessful submission", message:`${error.message}`, status:"failed"}))

    }
} 

export default submit