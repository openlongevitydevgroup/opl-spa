import useApi from "../../../../../utils/hooks/useApi";
import CommentComponent from "./CommentComponent";
import AddCommentComponent from "./AddCommentComponent";
import { useState } from "react";
function Comments(props) {
  const submissionId = props.submissionId;

  // Get root comments first and then their children
  //For now we cannot have comments replying to comments
  const rootEndpoint = `${process.env.REACT_APP_POSTS_ENDPOINT}/get/${submissionId}/comments`;
  const rootComments = useApi(rootEndpoint);
  const [toAddComment, addComment] = useState(false);
  const onClickHandler = () => {
    addComment(true);
  };
  return (
    <div className="comments-list flex flex-col items-start">
      <div className="flex w-full flex-col items-center justify-center">
        {rootComments &&
          rootComments.map((comment) => (
            <ul className="y-2 align-center w-10/12">
              <CommentComponent comment={comment} />
            </ul>
          ))}
        <button onClick={onClickHandler} className="my-4 w-10/12 text-left text-theme-blue underline">
          Add comment
        </button>{" "}
        <div className=" w-10/12">{toAddComment && <AddCommentComponent setState={addComment} />}</div>
      </div>
    </div>
  );
}

export default Comments;
