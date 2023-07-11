import {Fragment} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { questionActions } from '../../state/Question/questionSlice';
import ModalContent from './ProblemsInterface/ModalContent';
import Statbar from './Statbar/Statbar';
import './Question.css'
import SearchBar from './SearchBar/SearchBar';
import QuestionInterface from './ProblemsInterface/QuestionsInterface';
import ModalT from '../../components/UI/Modal/Modal';

function OpenProblems(){
    const modalState = useSelector(state => state.question.modalOpen)
    const questionDetails = useSelector(state => state.question.modalDetails)
    const dispatch = useDispatch()
    const modalCloseHandler = () =>{dispatch(questionActions.toggleModalClose())}
    return(
    <Fragment>
        <div className='text-center py-2 pb-6 text-sm md:text-lg'>
            <p><strong>This is our initial selection of high level open problems in longevity and ageing science. We invite you to submit your open problems to help us improve our database and classify these problems.</strong> </p>
        </div>
        <div>
        <p className='text-sm md:text-base pb-2'> If you want to add an open problem that falls under the high-level problems provided, select the open problem and click the "add a subproblem" button. Otherwise use the submit open problem button in the bar below.</p>

        </div>
        <SearchBar/>
        <Statbar className='statbar'/>
        <QuestionInterface/>
        <ModalT open={modalState} close={modalCloseHandler}>
            <ModalContent questionDetails={questionDetails} close={modalCloseHandler}/>
        </ModalT>
    </Fragment>

)
}
export default Question; 
export async function loader(){
    const {data:recursiveData} = await axios.get(`https://${process.env.REACT_APP_DB_REQUEST}/api/open-problems/root`)
    const {data} = await axios.get(`https://${process.env.REACT_APP_DB_REQUEST}/api/open-problems/`)
    return {recursiveData, data}
}
