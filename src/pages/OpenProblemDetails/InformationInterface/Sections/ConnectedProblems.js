import InterfaceTemplate from "../../../../components/Templates/InterfaceTemplate";
import { HashLink } from "react-router-hash-link";
function ConnectedProblems(props) {
  const directChildren = props.children;
  return (
    <InterfaceTemplate title={"Connected Problems"}>
      <div className="description pb-2">
        Each "Connected Problem" represents a focused inquiry, providing valuable
        insights and a comprehensive understanding of broader problems.
        Navigate freely to gain a deeper appreciation of complexities and engage
        with areas of interest.
      </div>
      <hr className="border-theme-blue" />
      <div className="connected-problems-list">
        {directChildren.length === 0 ? (
          <p className="pl-2 text-sm font-semibold md:text-base py-4">None</p>
        ) : (
          <ul>
            {directChildren.map((child) => (
              <li key={child.problem_id}>
                <HashLink
                  className=" pl-2 text-sm font-semibold hover:text-theme-blue hover:underline md:text-base"
                  smooth
                  to={"../" + child.problem_id + `#${child.problem_id}`}
                >
                  <p>
                    {child.problem_id}: {child.title}
                  </p>
                </HashLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </InterfaceTemplate>
  );
}

export default ConnectedProblems;
