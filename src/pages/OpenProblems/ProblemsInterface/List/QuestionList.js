import { useSelector } from "react-redux";
import ListComponent from "./ListComponent";
///////Table view showing a list of questions to be rendered in the tree view function below//////
//List component

function QuestionList(props) {
  const allQuestions = props.questions;
  const filteredQuestions = useSelector(
    (state) => state.question.filteredResults
  );

  if (filteredQuestions && filteredQuestions.length > 0) {
    return (
      <ul>
        {filteredQuestions.map((question) => (
          <ListComponent question={question}></ListComponent>
        ))}
      </ul>
    );
  }
  if (!filteredQuestions) {
    return (
      <ul>
        {allQuestions.map((question) => (
          <ListComponent question={question} key={question.question_id} />
        ))}
      </ul>
    );
  }
}

export default QuestionList;
