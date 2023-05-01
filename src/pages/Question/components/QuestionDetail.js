import { Box, Typography, Button, Card } from "@mui/material";

const BUTTON_CONTAINER_STYLES ={
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly',
}

function Details(props){
    return(
        <div>
                <Typography variant='subtitle1'className="excerpt">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate sint, odit minus quibusdam reiciendis excepturi aut est explicabo officiis sapiente optio, vitae voluptas voluptates itaque? 
    </Typography>

    <div className="buttons" style={BUTTON_CONTAINER_STYLES}>
        <Button onClick={(question) => props.onModalOpen(question=props.question)}>Question details</Button>
        <Button onClick={() => {props.onSubmitHandler(props.question.title)}}> Submit a subquestion</Button>
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