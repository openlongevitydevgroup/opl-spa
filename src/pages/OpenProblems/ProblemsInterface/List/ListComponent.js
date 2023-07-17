import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import QuestionAccordion from "../Accordion/QuestionAccordion";
import ButtonGroupComponent from "../ButtonGroup/ButtonGroupComponent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import getDetails from "../../../../utils/functions/getDetails";
import getRequest from "../../../../utils/functions/getRequest";

function ListComponent(props) {
  //Current questipn information
  const id = props.question.problem_id;
  const title = props.question.title;

  //States for accordion
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionData, setAccordionData] = useState(null);
  
  //States for postData 
  const [postData, setPostData] = useState(null)
  const onClickHandler = async () => {
    const { data: question_details } = await getDetails(
      props.question.problem_id
    );
    const postDataResponse = await getRequest(`${process.env.REACT_APP_POSTS_ENDPOINT}/${id}/counts`)
    setAccordionData(question_details);
    setAccordionOpen(!accordionOpen);
    setPostData(postDataResponse)
  };   

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
        {accordionOpen ? 
        <>
                <QuestionAccordion data={accordionData} />
        <div className="flex flex-row justify-center py-4 divide-y-2">
            <ButtonGroupComponent parent={{id,title}} postData={postData}/>
        </div>
        </>

         : null}
      </div>
    </div>
  );
}

export default ListComponent;