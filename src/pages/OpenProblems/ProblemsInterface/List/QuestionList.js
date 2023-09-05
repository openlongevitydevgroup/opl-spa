import { useSelector } from "react-redux";
import MuiList from "./List";
import MuiListComponent from "./MuiListComponent";
///////Table view showing a list of questions to be rendered in the tree view function below//////
//List component

function QuestionList() {
  const filteredQuestions = useSelector(
    (state) => state.question.filteredResults
  );

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
    return <MuiList />;
  }
}

export default QuestionList;
