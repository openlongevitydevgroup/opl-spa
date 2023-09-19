import { HashLink } from "react-router-hash-link";
import apiAnnotations from "../../../../../api/apiAnnotations";
import useGetApi from "../../../../../utils/hooks/useApi";
import { useMemo } from "react";
function SubjectListComponent(props) {
  const key = props.key;
  return (
    <li key={key} className={props.className}>
      <HashLink>{props.children}</HashLink>
    </li>
  );
}

function Subject(props) {
  const id = props.id;
  const { apiData: subjects } = useGetApi(
    apiAnnotations.getAnnotationsForProblem,
    { annotation: "subjects", problemId: id }
  );
  console.log(subjects);

  return (
    <div className="subject-classification">
      <ul className="reference">
        {/* {theories ? (
          theories.map((theory) => (
            <SubjectListComponent key={}>
              {theory.theory.theory_title}
            </SubjectListComponent>
          ))
        ) : (
          <p className="text-sm font-semibold md:text-base">-</p>
        )} */}
      </ul>
    </div>
  );
}

export default Subject;
