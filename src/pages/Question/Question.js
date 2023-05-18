import {Fragment, useState} from 'react'
import { useLoaderData} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { questionActions } from '../../state/Question/questionSlice';
import QuestionView from './components/QuestionList'
import PermanentDrawer from './Drawer/PermanentDrawer';
import QuestionForm from './components/QuestionForm';
import Statbar from '../../pages/Question/components/Statbar';
import axios from 'axios'
import './Question.css'
import ModalInstance from '../../components/UI/Modal/Modal'; 
import SearchBar from './SearchBar/SearchBar';
import DrawerTailwind from './Drawer/DrawerTailwind';
const DIV_STYLES = {
    display:'flex', 
    flexDirection: 'row', 
    alignItems:'start',  
    width:'100%', 
    paddingBottom:'1rem'
}



function Question(props){
    const {recursiveData: recursiveQuestions, data:questions } = useLoaderData()
    const formState = useSelector(state => state.form)
    const questionState = useSelector(state => state.question)

    //For form details modal - to replace with redux 
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
        <SearchBar questions = {questions}/>
        <Statbar className='statbar' length={questions.length}/>
        <div className='flex flex-row w-full pb-2'>
            <DrawerTailwind/>
            <div className='questions-container'>
            {formState.submitFormOpen ? <QuestionForm questions={questions} parent={formState.chosenParent ? formState.formDetails.parentTitle : 'None'}/> :   
            <QuestionView state={questionState.viewType} onModalOpen={onModalOpen} onModalClose={onModalClose} questions={{recursive: recursiveQuestions, nonRecursive: questions}}></QuestionView>}
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