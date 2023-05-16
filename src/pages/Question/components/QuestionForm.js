import {Form} from 'react-router-dom'; 
import {useReducer, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Typography, StyledEngineProvider,Button, Select , MenuItem, TextField} from '@mui/material';
import ModalInstance from '../../../components/UI/Modal/Modal';
import styles from './QuestionForm.module.css'
import { formActions } from '../../../state/Question/questionFormReducer';


function QuestionForm(props) {
    const dispatch = useDispatch();
    const formDetailsState = useSelector(state => state.form.formDetails)
    //Will not need - will be replaced by redux state
    //Submission modal 
    const [submitModalOpen, setSubmitModalOpen] = useState(false)
    const onSubmitModalClose = () => {
        setSubmitModalOpen(false)
    }

    const selectOnChange = (e, id) => {
        if(e.target.value === "None"){
            dispatch(formActions.chooseParent({
                chosenParentTitle: '', 
                parentId: null,
            }))
        }else{
            dispatch(formActions.chooseParent({
                chosenParentTitle: e.target.value, 
                parentId: id.props.id
            }))
        }    }

    const inputOnChange = (e,key) => {
        dispatch(formActions.inputChange({id:key, value:e.target.value}))
    }

    const onSubmitHandler = async (e) => {
        console.log(formDetailsState)
        e.preventDefault(); 
        //Send request 
        try{
            const response = await axios.post('http://localhost:8000/questions/submit', {
                title: formDetailsState.title,
                excerpt: formDetailsState.description, 
                parent_question: formDetailsState.parentId,
                species: formDetailsState.species, 
                citation: formDetailsState.citation
            }, {headers: {'Content-Type': 'application/json', 'Accept':'application/json'}})
            if(response.status === 201){
                setSubmitModalOpen(true);
                dispatch(formActions.resetForm()) //Reset form after sucessfull submission

            }
        } catch(error){
            throw error
        }
        

    }

    //Exit button handler 
    const exitButtonHandler = () => {
        dispatch(formActions.toggleFormClose())
        dispatch(formActions.resetForm())
    }

    return(
        <StyledEngineProvider injectFirst>
            <Typography variant='h3'> Submit a question </Typography>
            <Form className={styles.form} onSubmit={onSubmitHandler}>

            <div className={styles.inputs}>
                    <label htmlFor="Parent-Question"> <Typography>Parent question</Typography> </label>
                    <Select sx={{width:'80%', marginLeft:'1.5rem'}}label='Parent Question' onChange={(e,id) => selectOnChange(e, id)} value={formDetailsState.parentTitle}>
                        <MenuItem key='0' id={0} value='None'> None</MenuItem>
                        {props.questions.map((question) => {
                            return(
                                <MenuItem key={question.question_id} id={question.question_id} value={question.title}>{question.title}</MenuItem>
                            )
                        })}
                        </Select>
                </div>

                <div className={styles.inputs}>
                <label htmlFor="title"> <Typography variant='body1'>Title:</Typography> </label>
                <input id='title' onChange={(e) => inputOnChange(e,'title')} value={formDetailsState.title}></input>
                </div>

                <div className={styles.inputs}>
                <label htmlFor="description"><Typography>Description:</Typography></label>
                <TextField onChange={(e) => inputOnChange(e, 'description')} id='description' multiline rows={4} value={formDetailsState.description}></TextField> 
                </div>

{/* Need to refactor this bit due to repeats */}
                <div className={styles.inputs}>
                    <label htmlFor="species"> <Typography>Species (If applicable)</Typography> </label>
                    <input onChange={(e) => inputOnChange(e, 'species')} name="species" id="species" type="text" value={formDetailsState.species}/>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="references"> <Typography> References (optional)</Typography> </label>
                    <textarea onChange={(e) => inputOnChange(e, 'citation')} name="references" id="references" rows={5} value={formDetailsState.citation} />
                </div>

                <div className={styles.buttons}>
                    <Button type='submit'> Submit </Button>
                    <Button onClick={exitButtonHandler}>Exit</Button>
                </div>

                {submitModalOpen &&<ModalInstance open={submitModalOpen} close={onSubmitModalClose} width={300} height={150}>
                    <Typography variant='h5' sx={{paddingTop:'3rem'}}> Question was submitted </Typography>
                    <Button onClick={onSubmitModalClose}>Exit</Button>
                </ModalInstance>}



            </Form>
        </StyledEngineProvider>

    )
}

export default QuestionForm; 