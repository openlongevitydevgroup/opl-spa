import useApi from "../../../../../utils/hooks/useApi";
import { useGetApi2 } from "../../../../../utils/hooks/useApi";
import api from "../../../../../api/api";
import CommentComponent from "./CommentComponent";
import AddCommentComponent from "./AddCommentComponent";
import ModalT from "../../../../../components/UI/Modal/Modal";
import SubmissionModalContent from "../../../../../components/UI/Modal/SubmissionModalContent";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generalActions } from "../../../../../state/generalStateSlice";

function Comments(props) {
  const dispatch = useDispatch();
  // const submissionId = props.submissionId;
  const modalState = useSelector((state) => state.general.modal); 
  const submissionId = useSelector((state) => state.details.submissionId);

  // Get root comments first and then their children
  //For now we cannot have comments replying to comments
  const {apiData:rootComments} = useGetApi2(api.getRootComments, {submissionId})
  const [toAddComment, addComment] = useState(false);

  const onClickHandler = () => {
    addComment(true);
  };
  const modalCloseHandler = () => {
    dispatch(generalActions.toggleModal())
  }
  return (
    <div className="comments-list flex flex-col items-start">
      <div className="flex w-full flex-col items-center justify-center">
        {rootComments &&
          rootComments.map((comment) => 
            <ul className="y-2 align-center w-10/12">
              <CommentComponent comment={comment} />
            </ul>
          )}
        <button onClick={onClickHandler} className="my-4 w-10/12 text-left text-theme-blue underline">
          Add comment
        </button>{" "}
        <div className=" w-10/12">{toAddComment && <AddCommentComponent setState={addComment} />}</div>
      </div>
      {modalState.isOpen && 
          <ModalT open={modalState.isOpen}>
            <SubmissionModalContent close={modalCloseHandler} submitStatus={modalState.content}/>
          </ModalT>
      }

    </div>
  );
}

export default Comments;
