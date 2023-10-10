import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import QuestionList from "./List/QuestionList";

function View() {
  const viewState = useSelector((state) => state.question.viewType);

  if (viewState === "tree") {
    return (
      <>
        <QuestionList />
      </>
    );
  } else {
    return (
      <>
        <QuestionList />
      </>
    );
  }
}

export default View;
