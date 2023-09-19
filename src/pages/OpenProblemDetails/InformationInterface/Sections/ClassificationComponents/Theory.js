import { HashLink } from "react-router-hash-link";
import apiAnnotations from "../../../../../api/apiAnnotations";
import useGetApi from "../../../../../utils/hooks/useApi";
function TheoryListComponent(props) {
  const key = props.key;
  return (
    <li key={key} className={props.className}>
      <HashLink>{props.children}</HashLink>
    </li>
  );
}

function Theory(props) {
  const id = props.id;
  const { apiData: theories } = useGetApi(
    apiAnnotations.getAnnotationsForProblem,
    { annotation: "theories", problemId: id }
  );

  return (
    <div className="theory-classification">
      <ul className="reference">
        {theories ? (
          theories.map((theory) => (
            <TheoryListComponent key={theory.theory.thoery_title}>
              {theory.theory.theory_title}
            </TheoryListComponent>
          ))
        ) : (
          <p className="text-sm font-semibold md:text-base">-</p>
        )}
      </ul>
    </div>
  );
}

export default Theory;
