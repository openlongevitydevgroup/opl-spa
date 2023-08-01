import { Box, Paper } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { formActions } from "../../../state/Question/questionFormSlice";
import StatbarButtonGroup from "./StatbarButtonGroup";
import scrollToView from "../../../utils/functions/scrollToView";
// This functon is for the statbar that allows the user to select whether to view the questions as a table or as a tree view instead

function Statbar(props) {
  const isMobileState = useSelector((state) => state.question.isMobile);
  const { data: questions } = useLoaderData();
  const dispatch = useDispatch();
  const submitQuestionHandler = () => {
    dispatch(formActions.toggleFormOpen());
    scrollToView('.form-title')
  };

  return (
    <Box className="h-full">
      <Paper className="flex h-12 w-full flex-row justify-evenly">
        <StatbarButtonGroup />
        <div className="w-2/4 items-center text-center">
          <p className="text:sm pt-3 font-bold md:text-base">
            {questions.length} results
          </p>
        </div>
        <div className="flex flex-col flex-1 h-full w-1/4 ml-8">
          <button
            onClick={submitQuestionHandler}
            className=" hidden h-full rounded-md border border-solid bg-white text-sm shadow-lg hover:bg-blue-500 hover:font-bold active:bg-blue-500 md:text-base"
          >
            {isMobileState ? (
              <FileUploadIcon className="h-full w-full" />
            ) : (
              "Submit open problem"
            )}
          </button>
        </div>
      </Paper>
    </Box>
  );
}

export default Statbar;
