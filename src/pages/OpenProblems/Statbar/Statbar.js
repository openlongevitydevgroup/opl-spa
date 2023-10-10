import { useState, useEffect } from "react";
import { Box, Paper } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../state/Question/questionFormSlice";
import StatbarButtonGroupView from "./StatbarButtonGroupView";
import scrollToView from "../../../utils/functions/scrollToView";
import { useLoaderData } from "react-router-dom";
// This functon is for the statbar that allows the user to select whether to view the questions as a table or as a tree view instead

function Statbar() {
  const allProblems = useLoaderData();
  const openProblems = allProblems.latest;
  const [problemsLength, setProblemsLength] = useState(0);
  const isMobileState = useSelector((state) => state.question.isMobile);
  const selectedSorting = useSelector(
    (state) => state.question.filters.sorting
  );

  const dispatch = useDispatch();
  const submitQuestionHandler = () => {
    dispatch(formActions.toggleFormOpen());
    scrollToView(".form-title");
  };
  useEffect(() => {
    function getLength() {
      if (selectedSorting === "root") {
        const length = allProblems.latest.length;
        setProblemsLength(length);
        return;
      }
      if (allProblems[selectedSorting]) {
        const length = allProblems[selectedSorting].length;
        setProblemsLength(length);
      }
    }
    getLength();
  }, [openProblems, selectedSorting]);
  return (
    <Box className="h-max">
      <Paper className="flex h-12 w-full items-center justify-between">
        <div className="h-full w-1/4">
          <StatbarButtonGroupView />
        </div>
        <div className="flex h-full w-1/4 flex-grow-0 items-center justify-center">
          <p className="text-center text-xs font-semibold md:text-base">
            {problemsLength} Total Open Problems
          </p>
        </div>
        <div className="flex h-full w-1/4 justify-end">
          <button
            onClick={submitQuestionHandler}
            className="h-full w-max rounded-md border border-solid bg-white text-sm shadow-lg hover:bg-blue-500 hover:font-bold active:bg-blue-500 md:text-base"
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
