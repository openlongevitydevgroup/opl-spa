import { useSelector, useDispatch } from "react-redux";
import { detailsActions } from "../../../../state/Details/detailsSlice";
function TextInput() {
  const textState = useSelector((state) => state.details.submission.description)
  const dispatch = useDispatch(); 
  const descriptionHandler = (e) => {
    const value = e.target.value; 
    dispatch(detailsActions.setFormValue({id:'description', value:value}))
  }
  return (
    <div className="flex flex-col px-6 py-2 pb-8 text-sm w-9/12 m-auto">
        <textarea onChange={descriptionHandler} value={textState} id="description" className="border p-2 border-theme-blue h-32" placeholder="What is your opinion?"></textarea>
    </div>
  );
}

export default TextInput;
