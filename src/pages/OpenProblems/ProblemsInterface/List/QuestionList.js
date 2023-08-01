import {useSelector} from "react-redux";
import MuiList from "./List";
import MuiListComponent from "./MuiListComponent";
///////Table view showing a list of questions to be rendered in the tree view function below//////
//List component

function QuestionList(props) {
  const filteredQuestions = useSelector(
    (state) => state.question.filteredResults
  );

  if (filteredQuestions && filteredQuestions.length > 0) {
    return (
      <ul>
        {filteredQuestions.map((question) => (
          <MuiListComponent problem={question}></MuiListComponent>
        ))}
      </ul>
    );
  }
  if (!filteredQuestions) {
    return (
      <MuiList />
    );
  }
}

export default QuestionList;
