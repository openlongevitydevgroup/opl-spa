import AccordionContent from "./AccordionContent";
function QuestionAccordion(props) {
  const data = props.data;
  const view = props.view;
  const { question_id: id } = data["open_problem"];
  if (view === "tree") {
    return (
      <div key={id} className="bg-grey px-8 py-4">
        <AccordionContent data={data} />
      </div>
    );
  } else {
    return (
      <>
        <AccordionContent data={data} />
      </>
    );
  }
}

export default QuestionAccordion;
