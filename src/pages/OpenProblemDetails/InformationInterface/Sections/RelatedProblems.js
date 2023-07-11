import InterfaceTemplate from "../InterfaceTemplate";
import { Link } from "react-router-dom";
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
              <li key={child.question_id}>
                <Link className=" pl-2 text-sm font-semibold hover:text-theme-blue hover:underline md:text-base" to={"../"+child.question_id}>
                  <p>{child.question_id}: {child.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </InterfaceTemplate>
  );
}

export default RelatedProblems;
