import {Fragment, useState, useContext} from 'react'
import { useLoaderData } from 'react-router-dom';
import QuestionListTree from './components/QuestionList'
import PermanentDrawer from './Drawer/PermanentDrawer';
import QuestionForm from './components/QuestionForm';
import Statbar from '../../pages/Question/components/Statbar';
import axios from 'axios'
import './Question.css'
import ModalInstance from '../../components/UI/Modal/Modal'; 
import SearchBar from '../../components/SearchBar/SearchBar';

const DIV_STYLES = {
    display:'flex', 
    flexDirection: 'row', 
    alignItems:'start',  
    width:'100%', 
    paddingBottom:'1rem'
}


function Question(props){
    const {recursiveData: recursiveQuestions, data:questions } = useLoaderData()
    
    //States to handle opening form 
    const [submitOpen, setSubmitOpen] = useState({
        open:false, 
        chosenParent:null,
    })
    const onSubmitHandler = (parent) => {
        setSubmitOpen({open:true, chosenParent:parent})
    }
    const exitSubmitHandler = (e) => {
        e.preventDefault();
        setSubmitOpen({open:false, chosenParent:null})
    
    }

    //For form details modal 
    const [modalOpen, setModalOpen] = useState({
        open:false, 
        question: null,
    })
    const onModalOpen = (question) => {
        setModalOpen({open:true,question:question})
        
    }
    const onModalClose = () => {
        setModalOpen({open:false})
        
    }

    return(
    <Fragment>
        <SearchBar/>
        <Statbar className='statbar' length={questions.length} submitQuestion={onSubmitHandler}/>
        <div style={DIV_STYLES}>
            <PermanentDrawer/>
            <div className='questions-container'>
            {submitOpen.open ? <QuestionForm questions={questions}exit={exitSubmitHandler} parent={submitOpen.chosenParent ? submitOpen.chosenParent : null}/> :   
            <QuestionListTree onSubmitHandler={onSubmitHandler} onModalOpen = {onModalOpen} onModalClose = {onModalClose} questions={recursiveQuestions} />}
        
            </div>
            {modalOpen.question && <ModalInstance open={modalOpen.open} close={onModalClose} content={modalOpen.question}/>}




        </div>


    </Fragment>

)
}

export default Question; 

export async function loader(){
    const {data:recursiveData} = await axios.get("http://localhost:8000/questions/recursive")
    const {data} = await axios.get("http://localhost:8000/questions")
    return {recursiveData, data}
}