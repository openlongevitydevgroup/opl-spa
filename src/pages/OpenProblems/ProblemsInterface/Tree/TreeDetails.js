import { useEffect, useState } from "react";
import QuestionAccordion from "../Accordion/QuestionAccordion";
import ButtonGroupComponent from "../ButtonGroup/ButtonGroupComponent";
import getDetails from "../../../../utils/functions/getDetails";
function TreeDetails(props) {
  const question = props.question;
  const { problem_id: problemId, title } = question;

  const isRoot = props.isRoot;

  //Set state for open problem details for accordion
  const [accordionData, setAccordionData] = useState(null);
  //Set state for meta data on posts - eg. number of posts

  // Get details of question for accordion
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetails(question.problem_id);
      // Getting post counts:
      if (data) {
        setAccordionData(data);
        // setPostData(postDataResponse);
      }
    };
    fetchData();
  }, []);

  // const viewWidthState = useSelector(state => state.question.viewWidth)
  return (
    <div>
      <h1 className="text-base font-semibold text-theme-blue">Open Problem: {problemId}</h1>
      {accordionData && (
        <>
          <div className="accordion pb-2">
            <QuestionAccordion data={accordionData} view={"tree"} />
          </div>
        </>
      )}

      <hr />
      <div className="buttons flex flex-row justify-center px-6 py-2">
        <ButtonGroupComponent parent={{ problemId, title }} />
      </div>

    </div>
  );
}

export default TreeDetails;
