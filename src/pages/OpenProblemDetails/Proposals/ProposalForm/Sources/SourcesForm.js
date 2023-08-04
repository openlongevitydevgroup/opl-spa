import { useDispatch } from "react-redux";
import { detailsActions } from "../../../../../state/Details/detailsSlice";
import { useState } from "react";

function SourcesForm(props) {
  const id = props.id;
  const dispatch = useDispatch();

  //Local state for singular input
  const [selected, setSelected] = useState("DOI");
  const [input, setInput] = useState("");
  const [isValid, setValid] = useState(false);
  const removeHandler = (e) => {
    e.preventDefault();
    dispatch(detailsActions.removeReference({ id: id }));
  };
  const onChangeHandlerType = (e) => {
    const value = e.target.value;
    setSelected(value);
    setInput("");
    dispatch(detailsActions.setReference({ id, type: selected, value: input }));
  };
    const onChangeHandlerInput = (e) => {
      const value = e.target.value;
      setInput(value);
      dispatch(detailsActions.setReference({ id, type: selected, value: value }));
    };

  return (
    <div key={id} className="references flex flex-row py-2">
      <select
        onChange={onChangeHandlerType}
        key={id + "sel"}
        name="type"
        className="mr-4 border border-theme-blue px-4"
        value={selected}
      >
        <option key={id + "opt2"} value="DOI">
          DOI
        </option>
        <option key={id + "opt1"} value="PMID">
          PUBMED ID
        </option>
      </select>
      <input
        onChange={onChangeHandlerInput}
        key={id + "inp"}
        type="text"
        className="reference-input w-full border border-theme-blue px-2"
        value={input}
        maxLength={selected == "DOI" ? 30 : 8}
      ></input>
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
