import {
  Box,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Tooltip,
} from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch} from "react-redux";
import {useLoaderData} from 'react-router-dom'
import { formActions } from "../../../state/Question/questionFormReducer";
import { questionActions } from "../../../state/Question/questionSlice";
import styles from "./Statbar.module.css";
// This functon is for the statbar that allows the user to select whether to view the questions as a table or as a tree view instead
function TooltipWrapper(props) {
  const message = props.message;
  return <Tooltip title={message}>{props.children}</Tooltip>;
}
function Statbar(props) {
  const {data:questions} = useLoaderData()
  const dispatch = useDispatch();
  const submitQuestionHandler = () => {
    dispatch(formActions.toggleFormOpen());
    const element = document.querySelector('.form-title');
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }

  };
  const toggleTreeHandler = () => {
    dispatch(questionActions.toggleTreeState());
  };
  const toggleTableHandler = () => {
    dispatch(questionActions.toggleListState());
  };
  const toggleFilterHandler = () => {
    dispatch(questionActions.toggleFilter()); 
  };

  return (
    <Box className={styles.statbar}>
      <Paper>
        <ToggleButtonGroup>
          <TooltipWrapper message="Show filter menu">
            <ToggleButton value="filter" onClick={toggleFilterHandler}>
              <FilterAltIcon />
            </ToggleButton>
          </TooltipWrapper>


          <TooltipWrapper message='View questions as flat list'>
            <ToggleButton value="table" onClick={toggleTableHandler}>
              <TableViewIcon />
            </ToggleButton>
          </TooltipWrapper>
          <TooltipWrapper message="View questions as hierarchical list">
          <ToggleButton value="tree" onClick={toggleTreeHandler}>
            <AccountTreeIcon />
          </ToggleButton>
          </TooltipWrapper>

        </ToggleButtonGroup>

        <div className="items-center">
          <Typography className="pt-1">{questions.length} results</Typography>
        </div>
        <button
          onClick={submitQuestionHandler}
          className="w-1/6 bg-white rounded-md shadow-lg border border-solid h-full hover:bg-blue-500 active:bg-blue-500 hover:font-bold"
        >
          Submit Question
        </button>
      </Paper>
    </Box>
  );
}

export default Statbar;
