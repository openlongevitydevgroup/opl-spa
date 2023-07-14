import { Link } from "react-router-dom";
function AccordionContent(props) {
  const data = props.data;
  const {
    description,
    children,
    contact,
    question_id: id,
  } = data["open_problem"];
  const { parent_data } = data;
  const subquestionCount = children.length;

  return (
    <>
      <div className="accordion-title">
        <h1 className="pb-2 text-sm font-semibold underline md:text-base">
          Summary
        </h1>
      </div>
      <div className="description flex flex-row py-2">
        <h2 className="text-sm font-semibold">Description:</h2>
        <p className="pl-2 text-sm">{description ? description : "None"}</p>
      </div>
      <table className="w-full py-2 text-sm">
        <tbody>
          <tr className="border bg-theme-blue px-2 pb-6 text-center text-sm text-white">
            <th>PARENT PROBLEM</th>
            <th>NO. RELATED QUESTIONS</th>
            <th>CATEGORIES</th>
          </tr>
          <tr className=" text-center text-sm">
            <td>
              {" "}
              {parent_data ? (
                <Link
                  to={`./${parent_data.question_id}`}
                  className="hover:text-blue-500 hover:underline"
                >
                  {parent_data.title}
                </Link>
              ) : (
                "None."
              )}
            </td>
            <td className="underline hover:bg-sky-200">
              <Link
                className="hover:text-theme-blue"
                to={`/open-problems/${id}`}
              >
                {subquestionCount}
              </Link>
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <div className="contact flex flex-row pt-4">
        <h2 className="text-sm font-semibold">Submitted by:</h2>
        <p className="pl-2 text-sm">{contact ? contact : "-"}</p>
      </div>
    </>
  );
}

export default AccordionContent;
