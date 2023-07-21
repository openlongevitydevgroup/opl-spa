import InterfaceTemplate from "../InterfaceTemplate";

import useAnnotation from "../../../../utils/hooks/useApi";
function References(props) {
  const id = props.id;
  const references = useAnnotation(
    `${process.env.REACT_APP_OPEN_PROBLEMS_ENDPOINT}${id}/references`
  );

  return (
    <InterfaceTemplate title={"References"}>
      <div className="references-list pt-2">
        <ul className="list-disc">
          {references ? (
            references &&
            references.map((ref) => (
              <li key={ref.reference.ref_id} className="py-2">
                {ref.reference.full_citation}
              </li>
            ))
          ) : (
            <p className="text-sm font-semibold md:text-base">None</p>
          )}
          {}
        </ul>
      </div>
    </InterfaceTemplate>
  );
}

export default References;
