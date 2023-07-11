import { ListItemButton, ListItemText, ListItemIcon, Typography } from "@mui/material";
import {Fragment} from 'react';
function DrawerItem(props){
    return(
        <Fragment>
            <ListItemButton > <ListItemText> <ListItemIcon>{props.icon}</ListItemIcon> <Typography variant="body" sx={{textAlign:'center'}}>{props.text}</Typography> </ListItemText></ListItemButton>

        </Fragment>
    )
}



export default DrawerItem; 