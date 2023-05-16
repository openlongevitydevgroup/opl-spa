
import { Drawer,List,ListItem, ListItemButton, StyledEngineProvider, Typography } from "@mui/material";
import DrawerItem from './DrawerItem'
import ArrowDropDownOutlinedIcon from'@mui/icons-material/ArrowDropDownOutlined';
import styles from './PermanentDrawer.module.css'
function PermanentDrawer(){ //Needs to be smaller on small screens
    const arrowDown = <ArrowDropDownOutlinedIcon/>
    const drawerWidth = 240;
    return(
        <StyledEngineProvider injectFirst={true}>
            <Drawer variant="permanent" anchor="left" className={styles.drawer} >
                <List>
                    <ListItem ><Typography variant="h5" sx={{textDecoration:'underline'}}>Filter</Typography></ListItem>
                    <DrawerItem icon={arrowDown} text='Test'></DrawerItem>
                </List>
        
            </Drawer>


        </StyledEngineProvider>
        

    )
}

export default PermanentDrawer