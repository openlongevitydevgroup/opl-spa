import {Form} from 'react-router-dom'; 
import {useReducer, useState } from 'react';
import { Typography, StyledEngineProvider,Button, Select , MenuItem, TextField} from '@mui/material';
import ModalInstance from '../../../components/UI/Modal/Modal';
import styles from './QuestionForm.module.css'
import formReducer from '../../../utils/formReducer'
import initialFormState from '../../../utils/formstate';
import axios from 'axios'


function QuestionForm(props) {
    const initialState = initialFormState;
    initialState.parentQuestion = props.parent ? props.parent : 'None';
    const [formState, formDispatch] = useReducer(formReducer, initialState)
    
    //Submission model 
    const [submitModalOpen, setSubmitModalOpen] = useState(false)
    const onSubmitModalClose = () => {
        setSubmitModalOpen(false)
    }



    const selectOnChange = (e, id) => {
        if(e.target.value === "None"){
            formDispatch({type: 'USER_SELECT', value: null})
        }
        formDispatch({type:'USER_SELECT', value:e.target.value, parentQuestionId: id.props.id})
    }

    const inputOnChange = (e,key) => {
        formDispatch({type:'USER_INPUT', value:e.target.value, key:key})
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault(); 

        //Reset Inputs
        formDispatch({type:"USER_SUBMIT"})
        const data={title: formState.title, 
            description: formState.description, 
            parent_question: formState.parentQuestionId,}
        
        //Send request 
        try{
            const response = await axios.post('http://localhost:8000/questions/submit', {data: data, headers: {'Content-Type': 'application/json', 'Accept':'application/json'}})
            console.log(response.status)
            console.log(submitModalOpen)
            if(response.status === 201){
                setSubmitModalOpen(true);
            }
        } catch(error){
            throw error
        }
        

    }

    return(
        <StyledEngineProvider injectFirst>
            <Typography variant='h3'> Submit a question </Typography>
            <Form className={styles.form} onSubmit={onSubmitHandler}>
                <div className={styles.inputs}>
                <label htmlFor="title"> <Typography variant='body1'>Title:</Typography> </label>
                <input id='title' onChange={(e) => inputOnChange(e,'title')} value={formState.title}></input>
                </div>

                <div className={styles.inputs}>
                <label htmlFor="description"><Typography>Description:</Typography></label>
                <TextField onChange={(e) => inputOnChange(e, 'description')} id='description' multiline rows={4} value={formState.description}></TextField> 
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="Parent-Question"> <Typography>Parent question</Typography> </label>

                    <Select sx={{width:'80%', marginLeft:'1.5rem'}}label='Parent Question' onChange={(e,id) => selectOnChange(e, id)} value={formState.parentQuestion}>
                        <MenuItem key='0' id={0} value='None'> None</MenuItem>
                        {props.questions.map((question) => {
                            return(
                                <MenuItem key={question.question_id} id={question.question_id} value={question.title}>{question.title}</MenuItem>
                            )
                        })}
                        </Select>
                </div>

{/* Need to refactor this bit due to repeats */}
                <div className={styles.inputs}>
                    <label htmlFor="species"> <Typography>Species (If applicable)</Typography> </label>
                    <input onChange={(e) => inputOnChange(e, 'species')} name="species" id="species" type="text" value={formState.species}/>
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="organ"> <Typography> Organ (If applicable)</Typography> </label>
                    <input onChange={(e) => inputOnChange(e, 'organ')} name="organ" id="organ" type="text" value={formState.organ} />
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="references"> <Typography> References (optional)</Typography> </label>
                    <textarea onChange={(e) => inputOnChange(e, 'citations')} name="references" id="references" rows={5} value={formState.citations} />
                </div>

                <div className={styles.buttons}>
                    <Button type='submit'> Submit </Button>
                    <Button onClick={props.exit}>Exit</Button>
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