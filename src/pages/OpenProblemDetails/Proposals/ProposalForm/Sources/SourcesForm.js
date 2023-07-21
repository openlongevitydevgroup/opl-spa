import { useDispatch } from "react-redux";
import { detailsActions } from "../../../../../state/Details/detailsSlice";
import { useState } from "react";

function SourcesForm(props) {
  const id = props.id;
  const dispatch = useDispatch();

  //Local state for singular input 
  const [selected, setSelected] = useState("Link")
  const [input, setInput] = useState("")
  const removeHandler = (e) => {
    e.preventDefault();
    dispatch(detailsActions.removeReference({ id: id }));
  };
  const onChangeHandler = (e, key) => {
    const value = e.target.value;
    const referenceKey = key;
    dispatch(detailsActions.setReference({ id, key: referenceKey, value }));
    if(referenceKey === "type"){
      setSelected(value);
    }else{
      setInput(value);
    }
    
  };


  return (
    <div key={id} className="references flex flex-row py-2">
      <select
        onChange={(e) => onChangeHandler(e, "type")}
        key={id + "sel"}
        name="type"
        className="mr-4 border border-theme-blue px-4"
        value={selected}
      >
        <option key={id + "opt1"} value="Link">
          Link
        </option>
        <option key={id + "opt2"} value="Reference">
          Reference
        </option>
      </select>
      <textarea
        onChange={(e) => onChangeHandler(e, "ref")}
        key={id + "inp"}
        type="text"
        className="reference-input w-full border border-theme-blue px-2"
        value={input}
      ></textarea>
      <button
        key={id + "btn"}
        onClick={removeHandler}
        className="pl-2 text-sm text-theme-blue underline"
      >
        Remove
      </button>
    </div>
  );
}

export default SourcesForm;
