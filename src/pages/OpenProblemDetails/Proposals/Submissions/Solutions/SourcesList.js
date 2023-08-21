import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import apiReferences from "../../../../../api/apiReferences";
import SourceContent from "./SourceContent";

function SourcesList(props) {
  const id = useSelector((state) => state.details.submissionId);
  const [references, setReferences] = useState([]);
  useEffect(() => {
    async function getReferences() {
      try {
        const data = await apiReferences.getReferenceForSolution({
          submissionId: id,
        });
        setReferences(data);
      } catch (error) {
        setReferences([
          {
            reference_id: "error",
            references: {
              full_citation: "Error in retrieving references",
            },
          },
        ]);
      }
    }
    getReferences();
  }, []);

  if (references.length > 0) {
    return (
      <ul>
        {references.map((ref) => (
          <li key={ref.reference_id} className="list-disc text-sm">
            <SourceContent
              reference={ref.references.full_citation}
              doi={ref.references.doi ? references.references.doi : null}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default SourcesList;
