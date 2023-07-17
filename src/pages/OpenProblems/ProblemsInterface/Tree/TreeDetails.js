import { useEffect, useState } from "react";
import QuestionAccordion from "../Accordion/QuestionAccordion";
import ButtonGroupComponent from "../ButtonGroup/ButtonGroupComponent";
import getDetails from "../../../../utils/functions/getDetails";
import getRequest from "../../../../utils/functions/getRequest";

function TreeDetails(props) {
  const question = props.question;
  const {problem_id:id, title} = question

  //Url data for post metadata
  const postUrl = `http://localhost:8000/api/posts/${id}/counts`   

  //Set state for open problem details for accordion
  const [accordionData, setAccordionData] = useState(null);
  //Set state for meta data on posts - eg. number of posts
  const [postData, setPostData] = useState(null)


  // Get details of question for accordion
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetails(question.problem_id);
      const postDataResponse = await getRequest(postUrl); 
      if (data) {
        setAccordionData(data);
      }
      setPostData(postDataResponse)
    };
    fetchData();
  },[]);

  // const viewWidthState = useSelector(state => state.question.viewWidth)
  return (
    <div>
      <h1 className="text-base font-semibold">Open Problem: {id}</h1>
      {accordionData && (
        <>
        <div className="accordion pb-2">
        <QuestionAccordion data={accordionData} view={"tree"} />
        </div>
          <hr/>
          <div className="buttons flex flex-row justify-center px-6 py-2">
            <ButtonGroupComponent postData={postData}  parent={{id, title}} />
          </div>
        </>
      )} 
    </div>
  );
}


export default TreeDetails;
