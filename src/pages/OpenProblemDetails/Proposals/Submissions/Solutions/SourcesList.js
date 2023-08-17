import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import apiReferences from "../../../../../api/apiReferences";

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

  const renderReference = (reference) => {
    const fullCitation = reference.references.full_citation;
    const doiRegex = /(https?:\/\/(dx\.)?doi\.org\/[^\s.]+)/;

    const parts = fullCitation.split(doiRegex);
    const lastPartIndex = parts.length - 1;

    if (parts.length > 1) {
      const lastPart = parts[lastPartIndex];
      const isDOILink = lastPart.match(doiRegex);

      if (isDOILink) {
        parts[lastPartIndex] = (
          <a href={lastPart} target="_blank" rel="noopener noreferrer">
            {lastPart}
          </a>
        );
      }
    }

    return (
      <li key={reference.reference_id} className="list-disc text-sm">
        {parts.map((part, index) => {
          if (index % 2 === 0) {
            return (
              <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
            );
          } else {
            return (
              <a
                className="text-theme-blue"
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
              >
                {part}
              </a>
            );
          }
        })}
      </li>
    );
  };

  if (references.length > 0) {
    return <ul>{references.map((ref) => renderReference(ref))}</ul>;
  } else {
    return <p className="py-2 text-sm">None submitted.</p>;
  }
}

export default SourcesList;
