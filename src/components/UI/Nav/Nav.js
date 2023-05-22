import NavMenu from './NavMenu';
const { AppBar,Paper} = require("@mui/material");

// function Nav(){
//     return(
//         <Paper elevation={3}>
//         <AppBar position='sticky' className='bg-white'>
//         <NavMenu/>
//         </AppBar>
//         </Paper>

//     )
// }

export const Nav2 = () => {
    return(
        <nav className="nav bg-white shadow-lg shadow-inner flex justify-between items-center px-8 h-16">
            <NavMenu/>
        </nav>
    )
}

// export default Nav;