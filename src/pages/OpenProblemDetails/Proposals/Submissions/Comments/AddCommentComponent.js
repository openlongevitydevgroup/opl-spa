import { Button } from "@mui/material";
import TextArea from "../../../../../components/UI/Inputs/TextArea";
import { useState } from "react";

function AddCommentComponent(props) {
  const setCommentBoxState = props.setState;
  const isDisplayed = props.state;
  const [comment, setComment] = useState("");
  const cancelHandler = () => {
    setCommentBoxState(false);

  };

  return (
    <div className="comment-section w-full py-2">
      <form action="" className="flex flex-col items-center justify-center">
        <TextArea
          className="w-10/12 border border-solid border-theme-blue bg-gray-100 p-2"
          setState={setComment}
          placeHolder="Reply to this post."
        />
        <div className="btns py-2">
          <Button size="small" onClick={cancelHandler}>
            Cancel
          </Button>
          <Button size="small">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default AddCommentComponent;
