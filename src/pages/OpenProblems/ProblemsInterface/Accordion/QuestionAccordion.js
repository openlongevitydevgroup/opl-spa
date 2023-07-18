
import AccordionContent from "./AccordionContent";
function QuestionAccordion(props) {
  const data = props.data;
  const contactData = data.contact
  const view = props.view
  const {
    question_id: id,
  } = data["open_problem"];
  if(view === "tree"){
    return(
      <div key={id} className="bg-grey px-8 py-4">
        <AccordionContent data={data}/>
      </div>
    )
  }else{
    return (
      // <div
      //   key={`acc-${id}`}
      //   className="accordion-item flex flex-col bg-white px-4 py-4"
      // >
      <>
              <AccordionContent data={data}/>

      </>

        // </div>
    );
  }


}

export default QuestionAccordion;
