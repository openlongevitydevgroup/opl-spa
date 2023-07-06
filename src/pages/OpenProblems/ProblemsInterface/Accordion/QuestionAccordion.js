import { Button } from "@mui/material";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
function QuestionAccordion(props) {
  const data = props.data;
  const {
    question_id: id,
    description,
    children,
    contact,
  } = data["open_problem"];
  const { parent_data } = data;
  const subquestionCount = children.length;
  return (
    <div
      key={`acc-${id}`}
      className="accordion-item flex flex-col bg-white px-4 py-4"
    >
      <div className="accordion-title">
        <h1 className="pb-2 text-sm font-semibold md:text-base">Summary</h1>
      </div>
      <div className="description flex flex-row">
        <h2 className="text-sm font-semibold">Description:</h2>
        <p className="pl-2 text-sm">{description ? description : "None"}</p>
      </div>
      <table className="w-full py-2 text-sm">
        <tr className="border bg-slate-800 text-sm text-white">
          <th>PARENT PROBLEM</th>
          <th>NO. RELATED QUESTIONS</th>
          <th>CATEGORIES</th>
        </tr>
        <tr className="text-center pt-2">
          <td>
            {" "}
            {parent_data ? (
              <a className="hover:text-blue-500 hover:underline" href="">
                {parent_data.title}
              </a>
            ) : (
              "Top level open problem."
            )}
          </td>
          <td className="underline">{subquestionCount}</td>
          <td>-</td>
        </tr>
      </table>
      <div className="contact flex flex-row pt-4">
        <h2 className="text-sm font-semibold">Submitted by:</h2>
        <p className="pl-2 text-sm">{contact ? contact : "-"}</p>
      </div>
      <div className="buttons m-auto">
        <Button>
          <PublishOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

export default QuestionAccordion;
