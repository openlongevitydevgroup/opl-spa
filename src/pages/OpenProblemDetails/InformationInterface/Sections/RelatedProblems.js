import InterfaceTemplate from "../InterfaceTemplate";
import { HashLink } from "react-router-hash-link";
function RelatedProblems(props) {
  const directChildren = props.children;
  return (
    <InterfaceTemplate title={"Related Problems"}>
      <div className="related-problems-list">
        {directChildren.length === 0 ? (
          <p className="pl-2 text-sm font-semibold md:text-base">None</p>
        ) : (
          <ul>
            {directChildren.map((child) => (
              <li key={child.problem_id}>
                <HashLink className=" pl-2 text-sm font-semibold hover:text-theme-blue hover:underline md:text-base" smooth to={"../"+child.problem_id+`#${child.problem_id}`}>
                  <p>{child.problem_id}: {child.title}</p>
                </HashLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </InterfaceTemplate>
  );
}

export default RelatedProblems;
