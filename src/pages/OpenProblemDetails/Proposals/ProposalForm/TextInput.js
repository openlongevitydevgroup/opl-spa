import { useSelector, useDispatch } from "react-redux";
import { detailsActions } from "../../../../state/Details/detailsSlice";
function TextInput() {
  const submissionState = useSelector((state) => state.details.submission);
  const dispatch = useDispatch(); 
  const descriptionHandler = (e) => {
    const value = e.target.value; 
    dispatch(detailsActions.setFormValue({id:'description', value:value}))
  }
  return (
    <div className="flex flex-col px-6 pb-4 text-sm">
        <textarea onChange={descriptionHandler} id="description" className="border p-2 border-theme-blue" placeholder=""></textarea>

    </div>
  );
}

export default TextInput;
