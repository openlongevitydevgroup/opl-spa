import SolutionsComponent from "./SolutionsComponent";
import getSubmissions from "../../../functions/getSubmissions";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { detailsActions } from "../../../../../state/Details/detailsSlice";
function Solutions() {
  const dispatch = useDispatch();
  // openProblem Id
  const openProblem = useSelector(
    (state) => state.details.submission.openProblem
  );
  const [hasLoaded, setLoaded] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  
  useEffect(() => {
    if (openProblem) {
      setLoaded(true);
      getSubmissions(openProblem).then((result) => 
      setSubmissions(result),
      dispatch(detailsActions.setPostsLength({length:submissions.length}))
      );
    }
  }, [openProblem, hasLoaded, submissions.length]);
  return (
    <>
      <h1 className="py-2 pb-4 text-lg font-semibold text-theme-blue md:text-xl">
        Submitted Solutions
      </h1>
      <div className="submitted-list border-y border-theme-blue py-2">
        <ul className="list">
        {hasLoaded &&
          submissions.map((sub) => 
          <li key={sub.submission_id} className="divide-y-2">
            <SolutionsComponent data={sub} />
          </li>
          )}

          {hasLoaded && submissions.length === 0 &&
          <div className="placegolder text-center">
            <h1>
              No submitted solutions
            </h1>

          </div>
         
          }
        </ul>

      </div>
    </>
  );
}
export default Solutions;
