import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import apiReferences from "../../../../../api/apiReferences";

function SourcesList(props) {
  const id = useSelector((state) => state.details.submissionId);
  const [references, setReferences] = useState({});
  useEffect(() => {
    async function getReferences() {
      try {
        const data = await apiReferences.getReferenceForSolution({
          submissionId: id,
        });
        setReferences(data);
      } catch (error) {
        setReferences({
          reference_id: "error",
          ref: "Error in retrieving references",
        });
      }
    }
    getReferences();
  }, []);
  if (references.length > 0) {
    return (
      <ul>
        {references.map((ref) => (
          <li key={ref.reference_id} className="list-disc text-sm">
            <p className="text-sm">{ref.references.full_citation}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p className="py-2 text-sm">None submitted.</p>;
  }
}

export default SourcesList;
