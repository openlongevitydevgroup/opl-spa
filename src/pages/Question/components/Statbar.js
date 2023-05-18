import { Box, Paper,ToggleButton, ToggleButtonGroup, Typography, Button } from "@mui/material";
import TableViewIcon from '@mui/icons-material/TableView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../state/Question/questionFormReducer";
import { questionActions } from "../../../state/Question/questionSlice";
import styles from './Statbar.module.css'
// This functon is for the statbar that allows the user to select whether to view the questions as a table or as a tree view instead
function Statbar(props){ 
    const formOpenState = useSelector(state => state.form.submitFormOpen)
    const questionState = useSelector(state => state.question)
    const dispatch = useDispatch();
    const submitQuestionHandler = () => {
        dispatch(formActions.toggleFormOpen())
    }
    const toggleTreeHandler = () => {
        dispatch(questionActions.toggleTreeState())
    }
    const toggleTableHandler = () => {
        dispatch(questionActions.toggleTableState())
    }
    return (
        <Box className={styles.statbar}>
            <Paper>
                <ToggleButtonGroup>
                <ToggleButton value='filter'><FilterAltIcon/></ToggleButton>
                    <ToggleButton value="table" onClick={toggleTableHandler} ><TableViewIcon/></ToggleButton>
                    <ToggleButton value="tree" onClick={toggleTreeHandler}> <AccountTreeIcon/></ToggleButton>
                </ToggleButtonGroup>

                <div className="stats">
                    <Typography className="pt-1">
                        {props.length} results
                    </Typography>

                </div>
                {/* {formOpenState ? <Button onClick={submitQuestionHandler} variant='contained' endIcon={<FileDownloadIcon/>} disabled > Submit a question </Button> : <Button onClick={submitQuestionHandler} variant='contained' endIcon={<FileDownloadIcon/>}> Submit a question </Button> } */}
                <button onClick={submitQuestionHandler} className="w-1/6 bg-white rounded-md shadow-lg shadow-inner border border-solid h-full hover:bg-blue-500 hover:font-bold">Submit Question</button>
            </Paper>
        </Box>
    )
}; 

export default Statbar;