import { Box,Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../../state/Question/questionFormSlice";
// import { questionActions } from "../../../state/Question/questionSlice";
import { Fragment } from "react";
import getDetails from "../../../utils/functions/getDetails";

function Details(props){
    const question = props.question
    const formState = useSelector(state => state.form)
    const dispatch = useDispatch()
    // const viewWidthState = useSelector(state => state.question.viewWidth)
    const onSubmitHandler = (parentTitle, parentId) => {
        dispatch(formActions.toggleFormOpen())
        dispatch(formActions.chooseParent({chosenParentTitle:parentTitle, parentId:parentId}))
    }
    return(
        <div>
            {formState.description && <p className="text-center text-sm md:text-base">{formState.description}</p>}

    <div className="buttons flex flex-row py-2">
        {/* <Button onClick={modalOpenHandler} size={viewWidthState < 450 ? 'small' : 'medium'}>Question details</Button> */}
        <Button onClick={() => {onSubmitHandler(question.title, question.id)}} size='small'> Add a sub-problem</Button>
    </div>
        </div>
    ) 

}

function QuestionDetail(props){
    return (
        <Fragment>
        <Box>
            <Details question={props.question}/>
        </Box>
        </Fragment>

    )
}

export default QuestionDetail; 