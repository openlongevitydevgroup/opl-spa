import SourcesForm from "./SourcesForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { detailsActions } from "../../../../../state/Details/detailsSlice";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
function SourcesInput() {
  //Redux state to track references
  const references = useSelector((state) => state.details.submission.references)
  const [isInitialMount, setIsInitialMount] = useState(true); // New state to track initial source addition

  const dispatch = useDispatch()
  const addRefHandler = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(detailsActions.addReference({type:"", ref:"", id:id}))
  };
  // useEffect(() => {
  //   // Check if it's the initial mount and add an empty reference
  //   if (isInitialMount) {
  //     addRefHandler({ preventDefault: () => {} });
  //     setIsInitialMount(false); // Set the flag to false after the initial mount
  //   }
  // }, [isInitialMount]); 

  return (
    <div className="sources-input pt-6">
      <div className="sources-input title">
        <h1 className="text-lg font-semibold text-theme-blue">Add sources (at least one required):</h1>
      </div>
      <div className="sources flex flex-col px-6 py-2 ">
      {references.map((ref) => 
        <SourcesForm key={ref.id} id={ref.id}/>
      )}
      </div>
      <button onClick={addRefHandler}
        className="px-6 text-theme-blue underline"
      >
        Add a source
      </button>
    </div>
  );
}

export default SourcesInput;
