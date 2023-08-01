import MuiList from "../List/List";
import ButtonGroupComponent from "../ButtonGroup/ButtonGroupComponent";
function ListAccordionContent(props) {
  const problem = props.problem;
  const children = problem.children;
  const parent = problem.parent_problem; 
  const isRoot = parent ? true : false
  return (
    <>
      <div className="description py-4">
        <p className="text-sm ">{problem.description && problem.description}</p>
      </div>
      <div className="buttons flex justify-center">
        <ButtonGroupComponent problem={problem} isRoot={isRoot}/>
      </div>
      <div className="problems">
        <h1 className="text-lg underline">Connected Open Problems</h1>
        {children.length > 0 ? <MuiList children={children} /> : <p>None</p>}
      </div>
    </>
  );
}

export default ListAccordionContent;
