import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DrawerTailwind from "../Drawer/DrawerTailwind";
import { questionActions } from "../../../state/Question/questionSlice";
import QuestionView from "./QuestionList";
import QuestionForm from "../Form/QuestionForm";

function QuestionInterface(){
    const formState = useSelector(state =>  state.form)
    const questionState = useSelector(state => state.question)
    const viewWidth = useSelector(state => state.question.viewWidth)
    const dispatch = useDispatch(); 
    useEffect(()=>{ // Handle resizing of window and keep track of the inner width
      const handleResize = () => {
        dispatch(questionActions.setWidth({viewWidth: window.innerWidth}))
        dispatch(questionActions.setIsMobile())
      }
      window.addEventListener('resize', handleResize); 
      return () => {
        window.removeEventListener('resize', handleResize) //Cleanup function to prevent memory leak 
      }
    }, [dispatch, viewWidth])

    return(
        <div className={`flex ${viewWidth < 450 ? 'flex-col' : 'flex-row'} w-full pb-2`}>
            <DrawerTailwind/>
            <div className='questions-container'>
            {formState.submitFormOpen ? <QuestionForm parent={formState.chosenParent ? formState.formDetails.parentTitle : 'None'}/> :   
            <QuestionView state={questionState.viewType}></QuestionView>}
            </div>
        </div>
    )
}

export default QuestionInterface;