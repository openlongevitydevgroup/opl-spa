import {Fragment, useState, useContext} from 'react'
import { useLoaderData, useActionData } from 'react-router-dom';
import QuestionView from './components/QuestionList'
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

    //State to switch between table and tree view: 
    const [viewType, setViewType] = useState('tree'); 
    const treeButtonClickHandler = () => {
        setViewType('tree');
    }
    const tableButtonClickHandler = () => {
        setViewType('table');
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

    //Search bar lifting data - now need to create a table view 
    const [searchInput, setSearchInput] = useState(''); 
    const onChangeSearch = (e) => {
        setSearchInput(e.target.value)
    } 
    //Search bar - dealing with submitted query - basic functionality. 
    const searchFunction = () => {
        if(searchInput.trim().length ===0) return; 
        if (searchInput.length > 0){
            const filteredQuestions = questions.filter((entry) => entry.title.toLowerCase().includes(searchInput.toLowerCase())
            )
            console.log(filteredQuestions)
        }
    }


    return(
    <Fragment>
        <SearchBar questions = {questions} searchFunctions = {{onChange:onChangeSearch, state:searchInput, onSubmit:searchFunction}}/>
        <Statbar className='statbar' length={questions.length} submitQuestion={onSubmitHandler} viewClickHandlers = {{treeButton: treeButtonClickHandler, tableButton:tableButtonClickHandler}}/>
        <div style={DIV_STYLES}>
            <PermanentDrawer/>
            <div className='questions-container'>
            {submitOpen.open ? <QuestionForm questions={questions}exit={exitSubmitHandler} parent={submitOpen.chosenParent ? submitOpen.chosenParent : null}/> :   
            <QuestionView state={viewType} onSubmitHandler={onSubmitHandler} onModalOpen={onModalOpen} onModalClose={onModalClose} questions={{recursive: recursiveQuestions, nonRecursive: questions}} searchQuery={searchInput}></QuestionView>}
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