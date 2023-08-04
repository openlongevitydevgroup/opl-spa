import InterfaceTemplate from "../../../../components/Template/InterfaceTemplate";
import { useGetApi2 } from "../../../../utils/hooks/useApi";
import apiReferences from "../../../../api/apiReferences";
import { useEffect } from "react";
import { useState } from "react";
function References(props) {
  const id = props.id;
  // const [references,setReferences] = useState(null)

  const { apiData:referenceData, isLoading } = useGetApi2(apiReferences.getReferenceForProblem, {
    openProblemId: id,
  });

  return (
    <InterfaceTemplate title={"References"}>
      <div className="references-list pt-2">
        <ul className="list-disc">
           {referenceData ? 
            referenceData.data.map((ref) => (
              <li key={ref.reference.ref_id} className="py-2">
                {ref.reference.full_citation}
              </li>
            ))
           : (
            <p className="text-sm font-semibold md:text-base">None</p>
          )}
        </ul>
      </div>
    </InterfaceTemplate>
  );
}

export default References;
