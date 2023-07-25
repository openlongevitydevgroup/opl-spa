import InterfaceTemplate from "../../../../components/Templates/InterfaceTemplate";
import { useGetApi2 } from "../../../../utils/hooks/useApi";
import apiReferences from "../../../../api/apiReferences";
function References(props) {
  const id = props.id;

  const { apiData } = useGetApi2(apiReferences.getReferenceForProblem, {
    openProblemId: id,
  });
  const references = apiData.data;

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
