import ButtonGroup from "@mui/material/ButtonGroup";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LaunchIcon from "@mui/icons-material/Launch";
import { Button, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { formActions } from "../../../../state/Question/questionFormSlice";
import { HashLink } from "react-router-hash-link";
import { useGetApi2 } from "../../../../utils/hooks/useApi";
import apiSubmissions from "../../../../api/apiSubmissions";
import { useEffect, useState } from "react";
function ButtonGroupComponent(props) {
  const { problemId, title } = props.parent;  
  const dispatch = useDispatch();

  // State for post counts
  const [counts, setCounts] = useState(0)
  

  const {apiData,isLoading} = useGetApi2(apiSubmissions.getSubmissionCount, {problemId})
  useEffect(()=>{
    if(!isLoading && counts){
      const counts = apiData.data.post_counts
      setCounts(counts)
    }
  })
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
        <Tooltip title="view discussions">
          <Button sx={{ fontsize: 10 }}>
            <HashLink smooth to={`${problemId}#researchProposals`}>
              <ModeCommentIcon fontSize="small" /> {counts} Answers
            </HashLink>
          </Button>
        </Tooltip>
        <Tooltip title="Show problem details">
          <Button sx={{ fontSize: 10 }}>
            <HashLink smooth to={`${problemId}#${problemId}`}>
              <LaunchIcon fontSize="small" /> Open
            </HashLink>
          </Button>
        </Tooltip>
        <Tooltip title="Add a related problem">
          <Button onClick={onClickHandlerForm} sx={{ fontSize: 10 }}>
            <AddBoxIcon fontSize="small" /> Add a sub-problem
          </Button>
        </Tooltip>
      </ButtonGroup>
    </>
  );
}

export default ButtonGroupComponent;
