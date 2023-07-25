import { Button } from "@mui/material";
import useApi from "../../../../../utils/hooks/useApi";
import api from "../../../../../api/api";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useGetApi2 } from "../../../../../utils/hooks/useApi";
import { useSelector } from "react-redux";
function CommentsButton(props){
    const setState = props.setState;
    const submissionId = useSelector((state) => state.details.submissionId);
    const isDisplayed = props.state;
    const onClickHandler = () => {
        setState(!isDisplayed)
    }

    //Getting comments from api
    const {apiData:comments} = useGetApi2(api.getComments, {submissionId});

    return(
        <div >
            <Button onClick={onClickHandler} size="small"> {comments && comments.length} Comments {isDisplayed ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}</Button>
        </div>
    )
}

export default CommentsButton; 