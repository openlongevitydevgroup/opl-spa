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
  const viewState = useSelector((state) => state.question.viewType);
  // const toggleTreeHandler = () => {
  //   dispatch(formActions.toggleFormClose());
  //   dispatch(questionActions.toggleTreeState());
  // };
  // const toggleTableHandler = () => {
  //   dispatch(formActions.toggleFormClose());
  //   dispatch(questionActions.toggleListState());
  // };
  const toggleFilterHandler = () => {
    dispatch(questionActions.toggleFilter());
  };
  const handleView = (e, value) => {
    dispatch(formActions.toggleFormClose());
    dispatch(questionActions.setState({ key: "viewType", value: value }));
  };
  console.log(viewState);

  return (
    <ToggleButtonGroup
      value={viewState}
      onChange={handleView}
      exclusive
      size="small"
      className="w-1/4"
      aria-label="view-state"
    >
      {/* <TooltipWrapper message="Show filter menu"> */}
      {/* <ToggleButton value="filter" onClick={toggleFilterHandler} size="small" className={`${isMobileState ? 'w-1/3' : null}`}>
            <FilterAltIcon />
          </ToggleButton> */}
      {/* </TooltipWrapper> */}
      <ToggleButton
        value="table"
        className={`${isMobileState ? "w-1/3" : null}`}
        aria-label="view-list"
      >
        <TooltipWrapper message="View all problems">
          <TableViewIcon />
        </TooltipWrapper>
      </ToggleButton>
      <ToggleButton
        value="tree"
        className={`${isMobileState ? "w-1/3" : null}`}
        aria-label="view-tree"
      >
        <TooltipWrapper message="View problems a hierarchical list">
          <AccountTreeIcon />
        </TooltipWrapper>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default StatbarButtonGroup;
