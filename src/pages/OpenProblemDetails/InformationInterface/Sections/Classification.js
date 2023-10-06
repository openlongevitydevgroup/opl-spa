import InterfaceTemplate from "../../../../components/Template/InterfaceTemplate";
import { useLoaderData } from "react-router-dom";
import ClassificationComponent from "./ClassificationComponents/ClassificationComponent";
function TableRow(props) {
  return (
    <>
      <tr className="odd:bg-gray-200 even:bg-white">{props.children}</tr>
    </>
  );
}

function Classification() {
  const { data } = useLoaderData();
  const openProblem = data.open_problem;
  const openProblemId = openProblem.problem_id;
  const contact = data.contact;
  const CLASSIFICATION_COMPONENTS = [
    { title: "Subjects", annotation: "subject" },
    { title: "Species", annotation: "species" },
    { title: "Genes", annotation: "gene" },
    { title: "Compounds", annotation: "compound" },
  ];
  return (
    <InterfaceTemplate title={"Classification"}>
      <div className="classification-table">
        <table className="border-1 w-full border p-2 text-left">
          <tbody>
            <TableRow>
              <th className="pl-4">ID</th>
              <td className="pl-4">{openProblem["problem_id"]}</td>
            </TableRow>
            {CLASSIFICATION_COMPONENTS.map((component) => (
              <TableRow>
                <th className="pl-4">{component.title}</th>
                <td className="pl-4">
                  <ClassificationComponent
                    annotation={component.annotation}
                    problemId={openProblemId}
                  />
                </td>
              </TableRow>
            ))}
            {/* <TableRow>
              <th className="pl-4">SubjectS</th>
              <td>
                <Theory id={openProblemId} />
              </td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Species</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Genes</th>
              <td>
                <Genes id={openProblemId} />
              </td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Proteins</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Compounds</th>
              <td>-</td>
            </TableRow> */}
            <TableRow>
              <th className="pl-4">Submitted by</th>
              <td className="pl-4">
                {contact ? contact.first_name + " " + contact.last_name : "-"}
              </td>
            </TableRow>
          </tbody>
        </table>
      </div>
    </InterfaceTemplate>
  );
}

export default Classification;
