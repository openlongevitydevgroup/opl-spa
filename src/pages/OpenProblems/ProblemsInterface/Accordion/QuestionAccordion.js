import { Button } from "@mui/material";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import AccordionContent from "./AccordionContent";
function QuestionAccordion(props) {
  const data = props.data;
  const {
    question_id: id,
  } = data["open_problem"];
  return (
    <div
      key={`acc-${id}`}
      className="accordion-item flex flex-col bg-white px-4 py-4"
    >
      <AccordionContent data={data}/>
      <div className="buttons m-auto">
        <Button>
          <PublishOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

export default QuestionAccordion;
