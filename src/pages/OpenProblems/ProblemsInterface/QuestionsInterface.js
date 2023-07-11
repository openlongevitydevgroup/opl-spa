import { useSelector } from "react-redux";
import DrawerTailwind from "../Drawer/DrawerTailwind";
import View from "./View";
import QuestionForm from "../Form/QuestionForm";

function QuestionInterface(){
    const formState = useSelector(state =>  state.form)
    const viewWidth = useSelector(state => state.question.viewWidth)
    return(
        <div className={`flex ${viewWidth < 450 ? 'flex-col' : 'flex-row'} w-full pb-2`}>
            <DrawerTailwind/>
            <div className='questions-container'>
            {formState.submitFormOpen ? <QuestionForm parent={formState.chosenParent ? formState.formDetails.parentTitle : 'None'}/> :   
            <View></View>}
            </div>
        </div>
    )
}

export default QuestionInterface;