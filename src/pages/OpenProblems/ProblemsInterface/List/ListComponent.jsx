import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import QuestionAccordion from "../Accordion/QuestionAccordion";
import ButtonGroupComponent from "../ButtonGroup/ButtonGroupComponent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import getDetails from "../../../../utils/functions/getDetails";

function ListComponent(props) {
  // THIS IS NOT USED //
  //Current questipn information
  const problemId = props.question.problem_id;
  const title = props.question.title;

  //States for accordion
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionData, setAccordionData] = useState(null);

  const onClickHandler = async () => {
    const { data: question_details } = await getDetails(
      props.question.problem_id
    );
    setAccordionData(question_details);
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="flex h-full flex-col" key={`d-${problemId}`}>
      <li
        className="flex flex-row justify-between bg-white px-2 py-2 shadow shadow-slate-500"
        key={problemId}
      >
        <h1 key={`h1-${problemId}`} className="text-md py-2 pl-2 md:text-lg">
          <Link
            className="hover:text-blue-500 hover:underline"
            to={`./${problemId}`}
          >
            {" "}
            {problemId}: {title}
          </Link>
        </h1>
        <button
          key={`but-${problemId}`}
          className="text-sm hover:text-blue-500 md:text-lg"
        >
          {props.children}
        </button>
        <Button onClick={onClickHandler} key={`but2-${problemId}`}>
          {" "}
          <ArrowDropDownIcon />
        </Button>
      </li>
      <div
        key={`d2-${problemId}`}
        className={`accordion-wrapper overflow-hidden pt-1 ${
          accordionOpen ? "max-h-[500px]" : "max-h-0"
        } duration-500 ease-in-out`}
      >
        {accordionOpen ? (
          <>
            <QuestionAccordion data={accordionData} />
            <div className="flex flex-row justify-center divide-y-2 py-4">
              <ButtonGroupComponent parent={{ problemId, title }} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ListComponent;
