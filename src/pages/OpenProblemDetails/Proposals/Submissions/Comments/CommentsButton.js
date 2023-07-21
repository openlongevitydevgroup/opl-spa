import { Button } from "@mui/material";
import useApi from "../../../../../utils/hooks/useApi";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function CommentsButton(props){
    const setState = props.setState;
    const submissionId = props.submissionId;
    const endpoint = `${process.env.REACT_APP_POSTS_ENDPOINT}/get/${submissionId}/comments` // This will be given via prop 
    const isDisplayed = props.state;
    const onClickHandler = () => {
        setState(!isDisplayed)
    }
    //Getting comments from api
    const comments = useApi(endpoint); 
    const numberOfComments = comments.length;
    return(
        <div >
            <Button onClick={onClickHandler} size="small">{numberOfComments} Comments {isDisplayed ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}</Button>
        </div>
    )
}

export default CommentsButton; 