import api from "../../../api/api";
import showModal from "../../../utils/functions/showModal";

async function submitComment(submissionId, data, dispatch) {
  const trimmedText = data.full_text.trim();
  if (trimmedText > 0) {
    try {
      const response = await api.postComment({ submissionId, data });
      if ((response.status = 201)) {
        showModal(
          dispatch,
          "Success",
          "Your comment has been submitted succesfully for review",
          "success"
        );
      }
    } catch (error) {
      showModal(dispatch, "failed", error.message, "failed");
    }
  } else {
    showModal(dispatch, "Failed", "Empty fields", "failed");
  }
}

export default submitComment;
