import InterfaceTemplate from "../InterfaceTemplate";
import { useEffect, useState } from "react";
import getRequest from "../../../../utils/functions/getRequest";
function References(props) {
  const id = props.id;
  const [refState, setRefState] = useState();
  useEffect(() => {
    async function getReferences() {
      const data = await getRequest(
        `${process.env.REACT_APP_OPEN_PROBLEMS_ENDPOINT}${id}/references`
      );
      setRefState(data);
    }
    getReferences();
  }, []);
  return (
    <InterfaceTemplate title={"References"}>
      <div className="references-list pt-2">
        <ul className="list-disc">
          {refState ? refState &&
            refState.map((ref) => (
              <li key={ref.reference.ref_id} className="py-2">
                {ref.reference.full_citation}
              </li>
            )) : <p className="text-sm md:text-base font-semibold">None</p>}
          {}
        </ul>

      </div>
    </InterfaceTemplate>
  );
}

export default References;
