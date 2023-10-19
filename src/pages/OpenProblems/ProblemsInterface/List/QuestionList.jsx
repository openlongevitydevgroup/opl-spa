import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import MuiList from "./List";
import MuiListComponent from "./MuiListComponent";

function QuestionList() {
  const filteredQuestions = useSelector(
    (state) => state.question.filteredResults
  );
  const query = useSelector((state) => state.question.searchQuery);
  const filters = useSelector((state) => state.question.filters);
  // We need to create a useEffect function to track filter states and order the openProblems accordingly
  const data = useLoaderData();
  useEffect(() => {
    const selectedSorting = filters.sorting;

    async function applyFilters(loaderData) {
      //Get the correct array
      const selectedProblems = data[selectedSorting];
      //Then filter by annotations
    }
    applyFilters();
  }, []);

  if (filteredQuestions && filteredQuestions.length > 0) {
    return (
      <ul>
        {filteredQuestions.map((item) => (
          <MuiListComponent problem={item.item}></MuiListComponent>
        ))}
      </ul>
    );
  }
  if (!filteredQuestions) {
    //Default
    return <MuiList />;
  }
}

export default QuestionList;
