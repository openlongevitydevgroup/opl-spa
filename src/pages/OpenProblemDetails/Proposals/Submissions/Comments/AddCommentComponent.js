import { Button } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import TextArea from "../../../../../components/UI/Inputs/TextArea";
import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";

function AddCommentComponent(props){
    const setCommentBoxState = props.setState;
    const isDisplayed = props.state
    const [comment, setComment] = useState(""); 
    const cancelHandler = () => {
        setCommentBoxState(false);
    }

    return(
        <div className="comment-section w-full flex flex-col justify-center py-2">
            <form action="">
            <TextArea className="border border-solid border-theme-blue w-1/2" setState={setComment}/>
            </form>
            <div className="btns">
                <Button size="small" onClick={cancelHandler}>Cancel {isDisplayed ? <ArrowDropUpIcon/> : <ArrowDropDown/>}</Button>
                <Button size="small">Submit</Button>
            </div>
        </div>

    )
}


export default AddCommentComponent; 