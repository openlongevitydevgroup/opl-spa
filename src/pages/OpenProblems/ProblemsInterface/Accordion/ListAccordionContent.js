import { List } from "@mui/material";
import MuiListComponent from "../List/MuiListComponent";
import ButtonGroupComponent from "../ButtonGroup/ButtonGroupComponent";
function ListAccordionContent(props) {
  const problem = props.problem;
  const children = problem.children;
  const parent = problem.parent_problem;
  const isRoot = parent ? true : false;

  return (
    <>
      <div className="description py-4">
        <p className="text-sm ">{problem.description && problem.description}</p>
      </div>
      <div className="buttons flex justify-center">
        <ButtonGroupComponent problem={problem} isRoot={isRoot} />
      </div>
      <div className="problems">
        <h1 className="text-lg underline">Connected Open Problems</h1>
        {children.length > 0 ? (
          <List sx={{ width: "100%" }} variant="outlined">
            {children.map((item, index) => (
              <MuiListComponent key={index} title={item.title} problem={item} />
            ))}
          </List>
        ) : (
          <p>None</p>
        )}
      </div>
    </>
  );
}

export default ListAccordionContent;
