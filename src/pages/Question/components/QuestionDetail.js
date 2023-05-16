import { Box, Typography, Button, Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../../state/Question/questionFormReducer";
const BUTTON_CONTAINER_STYLES ={
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly',
}

function Details(props){
    const formState = useSelector(state => state.form)
    const dispatch = useDispatch()
    const onSubmitHandler = (parentTitle, parentId) => {
        dispatch(formActions.toggleFormOpen())
        dispatch(formActions.chooseParent({chosenParentTitle:parentTitle, parentId:parentId}))
    }
    //We need to obtain full question details rather than just the title, we should get the id? 
    return(
        <div>
                <Typography variant='subtitle1'className="excerpt">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate sint, odit minus quibusdam reiciendis excepturi aut est explicabo officiis sapiente optio, vitae voluptas voluptates itaque? 
    </Typography>

    <div className="buttons" style={BUTTON_CONTAINER_STYLES}>
        <Button onClick={(question) => props.onModalOpen(question=props.question)}>Question details</Button>
        <Button onClick={() => {onSubmitHandler(props.question.title, props.question.id)}}> Submit a subquestion</Button>
    </div>
        </div>
    )

}

function QuestionDetail(props){
    return (
        <Box>
            <Details onSubmitHandler ={props.onSubmitHandler} onModalOpen = {props.onModalOpen} question={props.question}/>
        </Box>
    )
}

export default QuestionDetail; 