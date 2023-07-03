import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { Fragment } from "react";
import QuestionListTree from "./QuestionTree"
import QuestionList from "./QuestionList";
function View(props) {
    //Replace with redux store state
    const viewState = useSelector(state => state.question.viewType)
    const { recursiveData: recursiveQuestions, data: questions } =
      useLoaderData();
    if (viewState === "tree") {
      return (
        <Fragment>
          <QuestionListTree questions={recursiveQuestions} />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <QuestionList questions={questions} />
        </Fragment>
      );
    }
  }
  
  export default View;