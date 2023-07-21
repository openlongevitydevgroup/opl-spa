import { Button } from "@mui/material";
import useApi from "../../../../../utils/hooks/useApi";

function AddComment(props){
    const setState = props.setState;
    const submissionId = props.submissionId;
    const endpoint = `http://localhost:8000/api/posts/get/${submissionId}/comments` // This will be given via prop 
    
    const onClickHandler = () => {
        setState(true)
    }
    //Getting comments from api
    const comments = useApi(endpoint); 
    const numberOfComments = comments.length;
    return(
        <div >
            <Button onClick={onClickHandler} size="small">{numberOfComments} Comments</Button>
        </div>
    )
}

export default AddComment; 