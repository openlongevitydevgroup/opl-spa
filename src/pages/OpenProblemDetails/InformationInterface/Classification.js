import InterfaceTemplate from "./InterfaceTemplate";

function TableRow(props){
  return(
    <>
    <tr className="even:bg-white odd:bg-gray-200 py-4">
      {props.children}
    </tr>
    </>
  )
}

function Classification() {
  return (
    <InterfaceTemplate title={"Classification"}>
      <div className="classification-table w-full pt-6 py-4">
        <table className="border border-1 p-4 w-full text-left">
          <tbody>
          <TableRow>
              <th className="w-1/5">ID</th>
              <td>TEST</td>
            </TableRow>
            <TableRow>
              <th>Description</th>
              <td>TEST</td>
            </TableRow>
            <TableRow>
              <th>Theory</th>
              <td>TEST</td>
            </TableRow>
            <TableRow>
              <th>Species</th>
              <td>TEST</td>
            </TableRow>
            <TableRow>
              <th>Genes</th>
              <td>TEST</td>
            </TableRow>
            <TableRow>
              <th>Proteins</th>
              <td>TEST</td>
            </TableRow>

          </tbody>

        </table>
      </div>
    </InterfaceTemplate>
  );
}

export default Classification;
