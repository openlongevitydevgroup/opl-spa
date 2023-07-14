import ButtonGroup from "@mui/material/ButtonGroup";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formActions } from "../../../../state/Question/questionFormSlice";
import { HashLink } from "react-router-hash-link";
function ButtonGroupComponent(props) {
  const { id, title } = props.parent;
  const { post_counts: counts } = props.postData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandlerForm = () => {
    dispatch(formActions.toggleFormOpen());
    dispatch(
      formActions.chooseParent({
        chosenParentTitle: title,
        parentId: id,
      })
    );
  };



  return (
    <>
      <ButtonGroup size="small" variant="text">
        <Tooltip title="view discussions">
          <Button sx={{ fontsize: 10 }}>
            <HashLink smooth to={`${id}#researchProposals`}>
              <ModeCommentIcon fontSize="small" /> {counts} Answers
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
