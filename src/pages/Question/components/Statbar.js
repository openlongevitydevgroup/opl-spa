import { Box, Paper,ToggleButton, ToggleButtonGroup, Typography, Button } from "@mui/material";
import TableViewIcon from '@mui/icons-material/TableView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import styles from './Statbar.module.css'
// This functon is for the statbar that allows the user to select whether to view the questions as a table or as a tree view instead
function Statbar(props){ 
    const {treeButton, tableButton} = props.viewClickHandlers
    return (
        <Box className={styles.statbar}>
            <Paper>
                <ToggleButtonGroup>
                    <ToggleButton value="table" onClick={tableButton} ><TableViewIcon/></ToggleButton>
                    <ToggleButton value="tree" onClick={treeButton}> <AccountTreeIcon/></ToggleButton>
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