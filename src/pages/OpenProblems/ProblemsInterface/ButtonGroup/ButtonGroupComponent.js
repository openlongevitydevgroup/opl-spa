import ButtonGroup from "@mui/material/ButtonGroup";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { formActions } from "../../../../state/Question/questionFormSlice";
import { HashLink } from "react-router-hash-link";
import apiSubmissions from "../../../../api/apiSubmissions";
import { useEffect, useState } from "react";
function ButtonGroupComponent(props) {
  const { problem_id: problemId, title } = props.problem;
  console.log(problemId);
  const isRoot = props.isRoot;
  const dispatch = useDispatch();

  // State for post counts
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    async function getSubmissionCount() {
      const response = await apiSubmissions.getSubmissionCount({ problemId });
      const counts = response.data.post_counts;
      setCounts(counts);
    }
    getSubmissionCount();
  });
  const onClickHandlerForm = () => {
    dispatch(formActions.toggleFormOpen());
    dispatch(
      formActions.chooseParent({
        chosenParentTitle: title,
        parentId: problemId,
      })
    );
  };

  return (
    <>
      <ButtonGroup size="small" variant="outlined">
        {isRoot && (
          <Tooltip title="view solutions">
            <Button sx={{ fontsize: 10 }}>
              <HashLink smooth to={`${problemId}#researchProposals`}>
                <ModeCommentIcon fontSize="small" /> {counts} Solutions
              </HashLink>
            </Button>
          </Tooltip>
        )}
        <Tooltip title="Add a connected problem">
          <Button onClick={onClickHandlerForm} sx={{ fontSize: 10 }}>
            <AddBoxIcon fontSize="small" /> Add Problem
          </Button>
        </Tooltip>
      </ButtonGroup>
    </>
  );
}

export default ButtonGroupComponent;
