import { useEffect, useState } from "react";
import axios from "axios";
import SourcesList from "./SourcesList";
import setUserName from "../../../functions/setUserName";

function SolutionsComponent(props) {
    const {full_text:fullText, created_at:date, contact, submission_id:id, first_name:firstName, last_name:lastName, affiliation} = props.data
    const dateObj = new Date(date);
    const createdDate = dateObj.toDateString();
    const userName = setUserName({firstName,lastName,affiliation})

    const [references,setReferences] = useState([])
    // Use effect to get data for the post references
    useEffect(() => {
        const fetchPostDetails = async () => {
            const {data} = await axios.get(`https://${process.env.REACT_APP_DB_REQUEST}/api/posts/get/${id}`)
            setReferences(data.references)
        }
        fetchPostDetails();
    }, [])
    return (
    <div className="component py-4 ">
      <div className="submission-details flex flex-row justify-between">
        <p className="text-sm">Submitted by: {userName} </p>
        <p className="text-sm"> Date: {createdDate} </p>
      </div>
      <hr />
      <div className="post bg-gray-100 px-6 py-6">
        <p className="text-base">
          {fullText}
        </p>
      </div>
      <hr />
      <div className="sources bg-gray-100 py-2 px-6 pt-6">
        <h1 className="text-sm underline">Sources:</h1>
        <ul>
            {references && <SourcesList sources={references}/>}
        </ul>
      </div>
    </div>
  );
}

export default SolutionsComponent;
