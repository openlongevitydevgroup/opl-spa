import '@fontsource/roboto'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'
const {Container, StyledEngineProvider, Typography, Box, Button, Paper} = require('@mui/material')


function Header(){
    return(
        <StyledEngineProvider injectFirst>
        <Paper variant='outlined' elevation={3}>
        <Container maxWidth='md'>
            <Box className={styles.header_description}>
            <Typography variant='h1' className={styles.header_title}>Open Longevity Project</Typography>
            <Typography variant='h5' sx={{textAlign:'center'}}> A compilation of open questions and challenges in longevity science, driven by researchers in the field.</Typography>
            <Box className={styles.header_buttons}>
                <Link to='/about'>
                <Button >Learn more</Button>
                </Link>
                <Link to='/question'>
                <Button >Browse questions</Button>

                </Link>
            </Box>
            </Box>



        </Container>
        </Paper>

        </StyledEngineProvider>

    )
}  

export default Header;