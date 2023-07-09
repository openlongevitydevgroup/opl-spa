import { ToggleButton, Tooltip, ToggleButtonGroup } from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../../state/Question/questionSlice";
import { formActions } from "../../../state/Question/questionFormSlice";
function TooltipWrapper(props) {
  const message = props.message;
  return <Tooltip title={message}>{props.children}</Tooltip>;
}
function StatbarButtonGroup() {
  const dispatch = useDispatch();
  const isMobileState = useSelector((state) => state.question.isMobile);
  const toggleTreeHandler = () => {
    dispatch(formActions.toggleFormClose());
    dispatch(questionActions.toggleTreeState());
  };
  const toggleTableHandler = () => {
    dispatch(formActions.toggleFormClose());
    dispatch(questionActions.toggleListState());
  };
  const toggleFilterHandler = () => {
    dispatch(questionActions.toggleFilter());
  };

  return (
    <ToggleButtonGroup size="small" className="w-1/4">
      {/* <TooltipWrapper message="Show filter menu"> */}
      {/* <ToggleButton value="filter" onClick={toggleFilterHandler} size="small" className={`${isMobileState ? 'w-1/3' : null}`}>
            <FilterAltIcon />
          </ToggleButton> */}
      {/* </TooltipWrapper> */}
      <TooltipWrapper message="View questions as flat list">
        <ToggleButton
          value="table"
          onClick={toggleTableHandler}
          className={`${isMobileState ? "w-1/3" : null}`}
        >
          <TableViewIcon />
        </ToggleButton>
      </TooltipWrapper>
      <TooltipWrapper message="View questions as hierarchical list">
        <ToggleButton
          value="tree"
          onClick={toggleTreeHandler}
          className={`${isMobileState ? "w-1/3" : null}`}
        >
          <AccountTreeIcon />
        </ToggleButton>
      </TooltipWrapper>
    </ToggleButtonGroup>
  );
}

export default StatbarButtonGroup;
