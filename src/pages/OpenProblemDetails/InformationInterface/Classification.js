import InterfaceTemplate from "./InterfaceTemplate";
import { useLoaderData } from "react-router-dom";
function TableRow(props){
  return(
    <>
    <tr className="even:bg-white odd:bg-gray-200">
      {props.children}
    </tr>
    </>
  )
}

function Classification() {
  const {data} = useLoaderData();
  const openProblem = data.open_problem;
  console.log(openProblem)
  const parentData = data.parent_data;
  
  return (
    <InterfaceTemplate title={"Classification"}>
      <div className="classification-table">
        <table className="border border-1 p-2 mt-2 w-full text-left">
          <tbody>
          <TableRow>
              <th className="w-2/5 pl-4">ID</th>
              <td>{openProblem['question_id']}</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Description</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Theory</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Species</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Genes</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Proteins</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Compounds</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Submitted by</th>
              <td>{openProblem['contact'] ? openProblem['contact'] : "-"}</td>
            </TableRow>

          </tbody>

        </table>
      </div>
    </InterfaceTemplate>
  );
}

export default Classification;
