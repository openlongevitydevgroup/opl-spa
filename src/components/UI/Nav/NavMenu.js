import logo from './logo.svg'
import styles from './NavMenu.module.css'
import {Link} from 'react-router-dom'
const {Toolbar, Typography, StyledEngineProvider, Box} = require("@mui/material");




function NavMenu() {
    const menuList = [{title:'Home', route:'/'}, {title:'About', route:'/about'}, {title:'Search', route:'/question'}]
    return (
        <StyledEngineProvider injectFirst> 
                    <Toolbar className={styles.Nav}>
                <Box className={styles.logo_container}>
                    <img className={styles.logo} src={logo} alt="" />
                    <Typography> Open Longevity</Typography>
                </Box>

                <Box className={styles.Nav_menu}>
 
                {menuList.map(item => {
                return (
                    <Link key={item.title} to={item.route}><Typography className={styles.Nav_items}> {item.title}</Typography></Link>
                )
            })}
</Box>

        </Toolbar>
        </StyledEngineProvider>


    ) 

}

export default NavMenu