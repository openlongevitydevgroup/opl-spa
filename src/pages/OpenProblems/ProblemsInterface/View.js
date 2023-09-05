import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import QuestionList from "./List/QuestionList";

function View() {
  const viewState = useSelector((state) => state.question.viewType);

  if (viewState === "tree") {
    return (
      <Fragment>
        <QuestionList />
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
