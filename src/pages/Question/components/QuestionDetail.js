import { Box,Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../../state/Question/questionFormReducer";
import { questionActions } from "../../../state/Question/questionSlice";
import { Fragment } from "react";
const BUTTON_CONTAINER_STYLES ={
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly',
}

function Details(props){
    const question = props.question
    const formState = useSelector(state => state.form)
    const dispatch = useDispatch()
    const onSubmitHandler = (parentTitle, parentId) => {
        dispatch(formActions.toggleFormOpen())
        dispatch(formActions.chooseParent({chosenParentTitle:parentTitle, parentId:parentId}))
    }
    const modalOpenHandler = () => {
        dispatch(questionActions.toggleModalOpen())
        dispatch(questionActions.setModalDetails({modalDetails:{
            title: question.title, 
            description: question.description,
            species: question.species,
            citation: question.citation, 
        }}))
    }
    return(
        <div>
            {formState.description && <p className="text-center text-sm md:text-base">{formState.description}</p>}

    <div className="buttons py-2" style={BUTTON_CONTAINER_STYLES}>
        <Button onClick={modalOpenHandler}>Question details</Button>
        <Button onClick={() => {onSubmitHandler(question.title, question.id)}}> Submit a subquestion</Button>
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