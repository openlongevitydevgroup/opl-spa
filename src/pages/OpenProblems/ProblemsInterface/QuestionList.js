import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import QuestionAccordion from "./Accordion/QuestionAccordion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import getDetails from "../functions/getDetails";
///////Table view showing a list of questions to be rendered in the tree view function below//////
//List component

function ListComponent(props) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionData, setAccordionData] = useState(null);

  const onClickHandler = async () => {
    const { data: question_details } = await getDetails(
      props.question.question_id
    );
    setAccordionData(question_details);
    setAccordionOpen(!accordionOpen);
  };
  const id = props.question.question_id;
  const title = props.question.title;
  return (
    <div className="flex h-full flex-col" key={`d-${id}`}>
      <li
        className="flex flex-row justify-between bg-white px-2 py-2 shadow shadow-slate-500"
        key={id}
      >
        <h1 key={`h1-${id}`} className="text-md py-2 pl-2 md:text-lg">
          <Link className="hover:text-blue-500 hover:underline" to={`./${id}`}>
            {" "}
            {id}: {title}
          </Link>
        </h1>
        <button
          key={`but-${id}`}
          className="text-sm hover:text-blue-500 md:text-lg"
        >
          {props.children}
        </button>
        <Button onClick={onClickHandler} key={`but2-${id}`}>
          {" "}
          <ArrowDropDownIcon />
        </Button>
      </li>
      <div
        key={`d2-${id}`}
        className={`accordion-wrapper overflow-hidden pt-1 ${
          accordionOpen ? "max-h-[500px]" : "max-h-0"
        } duration-500 ease-in-out`}
      >
        {accordionOpen ? <QuestionAccordion data={accordionData} /> : null}
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
