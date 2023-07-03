import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import QuestionAccordion from "./UI/QuestionAccordion";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
///////Table view showing a list of questions to be rendered in the tree view function below//////
//List component

function ListComponent(props) {
  const dispatch = useDispatch();
  const [accordionOpen, setAccordionOpen] = useState(false);
  const onClickHandler = (parentTitle, parentId) => {
    // dispatch(formActions.toggleFormOpen());
    // dispatch(
    //   formActions.chooseParent({
    //     chosenParentTitle: parentTitle,
    //     parentId: parentId,
    //   })
    // );
    setAccordionOpen(!accordionOpen);
  };
  const id = props.id;
  return (
    <div className="flex h-full flex-col">
      <li
        className="flex flex-row justify-between bg-white py-2  pl-2 shadow shadow-slate-500"
        key={id}
      >
        <button className="text-sm hover:text-blue-500 md:text-lg">
          {props.children}
        </button>
        <Button onClick={onClickHandler}> <ArrowDropDownIcon/></Button>
      </li>
      <div
        key={id}
        className={`accordion-wrapper overflow-hidden py-2 pl-2 ${
          accordionOpen ? "max-h-[500px]" : "max-h-0"
        } duration-500 ease-in-out`}
      >
        {accordionOpen ? <QuestionAccordion /> : null}
      </div>
    </div>
  );
}

function QuestionList(props) {
  const allQuestions = props.questions;
  const filteredQuestions = useSelector(
    (state) => state.question.filteredResults
  );

  if (filteredQuestions && filteredQuestions.length > 0) {
    return (
      <ul>
        {filteredQuestions.map((question) => (
          <ListComponent id={question.question_id} title={question.title}>
            {question.title}
          </ListComponent>
        ))}
      </ul>
    );
  }
  if (!filteredQuestions) {
    return (
      <ul>
        {allQuestions.map((question) => (
          <ListComponent id={question.question_id} title={question.title}>
            {question.title}
          </ListComponent>
        ))}
      </ul>
    );
  }
}

export default QuestionList;
