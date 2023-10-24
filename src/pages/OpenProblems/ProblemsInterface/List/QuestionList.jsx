import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MuiListComponent from "./MuiListComponent";
import apiProblems from "../../../../api/apiProblems";
import config from "../../../../utils/configs/SideNavConfig";
import { questionActions } from "../../../../state/Question/questionSlice";
import sortQuery from "../../../../utils/functions/dataManipulation/sortQuery";
import Spinner from "../../../../components/UI/Spinner/Spinner";
function QuestionList() {
  const filteredQuestions = useSelector(
    (state) => state.question.filteredResults
  );
  const filters = useSelector((state) => state.question.filters);
  const selectedSorting = useSelector(
    (state) => state.question.filters.sorting
  );
  const filtersOn = useSelector((state) => state.question.filterOpen);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  // We need to create a useEffect function to track filter states and order the openProblems accordingly
  //Use a config file to determine what annotations are being searched for
  const annotationConfig = config;
  const dispatch = useDispatch();

  //Use effect runs in order specified so we should check if filters have been applied
  useEffect(() => {
    function checkFilters(object) {
      for (let key in object) {
        if (Array.isArray(object[key]) && object[key].length > 0) {
          dispatch(
            questionActions.setState({ key: "filterOpen", value: true })
          );
          return;
        }
      }
      dispatch(questionActions.setState({ key: "filterOpen", value: false }));
      return;
    }
    checkFilters(annotationConfig);
  }, [filters]);

  useEffect(() => {
    setLoading(true);
    //Process the query parameters in appropriate format for get request
    const queryParams = sortQuery(filters);
    //Get the problems to apply these filters on
    async function applyFilters(queryParams) {
      //Get the correct array
      //Then filter by annotations
      try {
        const response = await apiProblems.getProblems({ queryParams });
        if (response.status === 200) {
          const filteredProblems = response.data;
          dispatch(
            questionActions.setState({
              key: "filteredResults",
              value: filteredProblems,
            })
          );
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    if (filtersOn || selectedSorting) {
      applyFilters(queryParams);
    }
  }, [filtersOn, filters, selectedSorting]);

  if (error) {
    return (
      <div>
        <p className="text-2xl"> {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center ">
        <Spinner />
      </div>
    );
  }

  if (filtersOn || selectedSorting) {
    return (
      <ul className="problem-list">
        {filteredQuestions &&
          filteredQuestions.length > 0 &&
          filteredQuestions.map((item) => (
            <MuiListComponent key={item.id} problem={item}></MuiListComponent>
          ))}
        {filteredQuestions && filteredQuestions.length === 0 && (
          <div>
            {" "}
            <p> No Open Problems matching this query.</p>
          </div>
        )}
      </ul>
    );
  }
}

export default QuestionList;
