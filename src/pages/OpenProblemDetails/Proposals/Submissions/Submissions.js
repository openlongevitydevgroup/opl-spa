import { useDispatch, useSelector } from "react-redux";
import { detailsActions } from "../../../../state/Details/detailsSlice";
import Research from "./Interface/Research";
import Solutions from "./Interface/Solutions";
function Submissions() {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.details.researchSolutionsView);
  const researchHandler = () => {
    const view = "Research";
    dispatch(detailsActions.changeView({ view: view }));
  };
  const solutionsHandler = () => {
    const view = "Solution";
    dispatch(detailsActions.changeView({ view: view }));
  };

  return (
        <>
        <div className="header flex flex-row">
          <button
            onClick={researchHandler}
            className={`Solutions px-3 text-base text-gray-600 hover:font-semibold hover:text-theme-blue md:text-lg ${
              viewState === "Research" ? "text-theme-blue" : null
            }`}
          >
            Research
          </button>
          <button
            onClick={solutionsHandler}
            className={`Research px-3 text-base text-gray-600 hover:font-semibold hover:text-theme-blue md:text-lg`}
          >
            Solutions
          </button>
        </div>
        <hr className="border-theme-blue" />
        <div className="view py-4 pl-2">
          <div className="submissions">
            {viewState === "Research" ? <Research /> : <Solutions />}
          </div>
        </div>
        </>
  );
}

export default Submissions;
