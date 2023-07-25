import { useSelector, useDispatch } from "react-redux"
import { formActions } from "../../../../state/Question/questionFormSlice";

function Select(props){
    const formDetailsState = useSelector(state => state.form.formDetails)
    const isMobileState = useSelector(state => state.question.isMobile)
    const questions = props.questions; 
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        if (e.target.value === "None") {
            dispatch(
              formActions.chooseParent({
                chosenParentTitle: "",
                parentId: null,
              })
            );
          } else {
            const index = e.target.selectedIndex; 
            const el = e.target.childNodes[index]; 
            const optionId = el.getAttribute('id')
            dispatch(
              formActions.chooseParent({
                chosenParentTitle: e.target.value,
                parentId: optionId
              })
            );}
    }

    return(
        <div className={`${props.id} flex w-full ${isMobileState ? "flex-col" : "flex-row"} items-center py-[1.5rem] text-center`}>
            <label htmlFor={props.id} className={`inline-block ${isMobileState ? 'w-full' : "w-1/5"}`}>
                <p className="font-bold text-sm md:text-base">Associated Open Problem:</p>
                </label>
            <select onChange={(e,id) => changeHandler(e, id)} id={props.id} name={props.name} className={`h-fit-content h-auto ${isMobileState ? 'w-full' : 'w-4/5'} rounded border border-slate-500 bg-bg-grey p-2`} value={formDetailsState.parentTitle}>
            <option value={'None'} id="0">None</option>
            {questions.map(question => (
                <option value={question.title} key={question.problem_id} id={question.problem_id}>{question.title}</option>
            ))}

            </select>
        </div>
    )
}

export default Select;