import { Box, Paper,ToggleButton, ToggleButtonGroup, Typography, Button } from "@mui/material";
import {useDispatch} from 'react-redux'
import TableViewIcon from '@mui/icons-material/TableView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import styles from './Statbar.module.css'
import { questionActions } from "../../../state/Question/questionSlice";
// This functon is for the statbar that allows the user to select whether to view the questions as a table or as a tree view instead
function Statbar(props){ 
    const dispatch = useDispatch(); 
    const treeButtonHandler = () => {
        dispatch(questionActions.toggleTreeState())
    }; 
    const listButtonHandler = () => {
        dispatch(questionActions.toggleListState())
    }
    return (
        <Box className={styles.statbar}>
            <Paper>
                <ToggleButtonGroup>
                    <ToggleButton value="list" onClick={listButtonHandler} ><TableViewIcon/></ToggleButton>
                    <ToggleButton value="tree" onClick={treeButtonHandler}> <AccountTreeIcon/></ToggleButton>
                </ToggleButtonGroup>

                <div className="stats">
                    <Typography>
                        {props.length} results
                    </Typography>

                </div>

                <Button onClick={() => {props.submitQuestion(null)}} variant='contained' endIcon={<FileDownloadIcon/>}> Submit a question </Button> 

            </Paper>
        </Box>
    )
}; 


export default Statbar;