import { useDispatch } from "react-redux";
import { detailsActions } from "../../../../../state/Details/detailsSlice";
function SourcesForm(props) {
  const id = props.id;
  const dispatch = useDispatch();
  const removeHandler = (e) => {
    e.preventDefault();
    dispatch(detailsActions.removeReference({ id: id }));
  };
  const onChangeHandler = (e, key) => {
    const value = e.target.value;
    const referenceKey = key;
    dispatch(detailsActions.setReference({ id, key: referenceKey, value }));
  };

  return (
    <div key={id} className="references flex flex-row py-2">
      <select
        onChange={(e) => onChangeHandler(e, "type")}
        key={id + "sel"}
        name="type"
        className="mr-4 border border-theme-blue px-4"
        defaultValue="Link"
      >
        <option key={id + "opt1"} value="Link">
          Link
        </option>
        <option key={id + "opt2"} value="Reference">
          Reference
        </option>
      </select>
      <input
        onChange={(e) => onChangeHandler(e, "ref")}
        key={id + "inp"}
        type="text"
        className="reference-input w-full border border-theme-blue px-2"
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
