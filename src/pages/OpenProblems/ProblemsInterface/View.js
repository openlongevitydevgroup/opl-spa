import { useSelector, useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { Fragment, useEffect } from "react";
import QuestionListTree from "./Tree/QuestionTree";
import QuestionList from "./List/QuestionList";
import { questionActions } from "../../../state/Question/questionSlice";

function View(props) {
  //Replace with redux store state
  const dispatch = useDispatch();

  const viewState = useSelector((state) => state.question.viewType);
  const { recursiveData: recursiveQuestions, data: questions } =
    useLoaderData();
  useEffect(() => {
    dispatch(
      questionActions.setState({ key: "allProblems", value: questions })
    );
    dispatch(
      questionActions.setState({
        key: "rootProblems",
        value: recursiveQuestions,
      })
    );
  });
  if (viewState === "tree") {
    return (
      <Fragment>
        <QuestionList/>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <QuestionList />
      </Fragment>
    );
  }
}

export default View;
