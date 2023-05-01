import NavMenu from './NavMenu';
const { AppBar,Paper} = require("@mui/material");

function Nav(){
    return(
        <Paper elevation={3}>
        <AppBar position='sticky' sx={{backgroundColor:'#000033'}}>
        <NavMenu/>
        </AppBar>
        </Paper>

    )
}

export default Nav;