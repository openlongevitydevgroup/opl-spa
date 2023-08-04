import InterfaceTemplate from "../../../../components/Template/InterfaceTemplate";
import { useLoaderData } from "react-router-dom";
import Genes from "./ClassificationComponents/Genes";
import Theory from "./ClassificationComponents/Theory";
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
  const openProblemId = openProblem.problem_id;
  const contact = data.contact


  // const parentData = data.parent_data;
  
  return (
    <InterfaceTemplate title={"Classification"}>
      <div className="classification-table">
        <table className="border border-1 p-2 w-full text-left">
          <tbody>
          <TableRow>
              <th className="w-2/5 pl-4">ID</th>
              <td>{openProblem['problem_id']}</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Category</th>
              <td><Theory id={openProblemId}/></td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Species</th>
              <td>-</td>
            </TableRow>
            <TableRow>
              <th className="pl-4">Genes</th>
              <td><Genes id={openProblemId}/></td>
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
              <td>{contact ? contact.first_name +" " +contact.last_name : '-'}</td>
            </TableRow>

          </tbody>

        </table>
      </div>
    </InterfaceTemplate>
  );
}

export default Classification;
