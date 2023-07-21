import useApi from "../../../../../utils/hooks/useApi";
import CommentComponent from "./CommentComponent";
function Comments(props) {
  const submissionId = props.submissionId;

  // Get root comments first and then their children
  //For now we cannot have comments replying to comments    
  const rootEndpoint = `${process.env.REACT_APP_POSTS_ENDPOINT}/get/${submissionId}/comments`;
  const rootComments = useApi(rootEndpoint)

  return <>
    {rootComments && rootComments.map((comment) =>
    <div className="w-full flex content-center justify-center">
     <ul className="w-10/12 y-2">
    <CommentComponent comment={comment}/>
    </ul>
    <div className="add-comment">

    </div>
    </div>
)}
  </>;
}

export default Comments;
