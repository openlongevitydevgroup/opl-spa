import Header from '../../components/Header/Header'
import {Box, Container, Typography, Paper, IconButton} from '@mui/material'
import StatUI from '../../components/UI/Card/CardUI'
import StorageIcon from '@mui/icons-material/Storage';
import ArticleIcon from '@mui/icons-material/Article';

const BOX_STYLES = {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
}

const CARD_STYLES = {
    width:'250px', 
}

const CONTAINER_STYLES = {
    display:'flex', 
    flexDirection: 'column',
    alignItems: 'center'
}

function Home(){
    return(
        <div className='h-4/5'>
            <Header /> 
            <section className='statistics'>

            <Container sx={CONTAINER_STYLES} maxWidth='m'>


            <Typography variant='h4' sx={{ paddingTop:'2.5rem' ,paddingBottom:'2.5rem', textDecoration:'underline'}}>Statistics</Typography>

            <Box sx={BOX_STYLES}>
            <StatUI type='question'/>
            <StatUI type='category'/>
            </Box>

            </Container>

            </section>

            <section className='useful-links'>
                <Container maxWidth='m' sx={{...CONTAINER_STYLES, paddingBottom:'4rem'}}>
                    <Typography variant='h4' sx={{paddingTop:'3rem', paddingBottom:'1rem', textDecoration:'underline'}}> Useful Links </Typography>
                    
                    <Box sx={BOX_STYLES}>
                        <IconButton aria-label='database-schema' size='large' sx={{padding:'0, 1rem'}}> <StorageIcon sx={{paddingRight:'1rem', transform:'scale(1.5)'}} /> Database Schema </IconButton>
                        <IconButton aria-label='funding'> <ArticleIcon sx={{paddingRight:'1rem', transform:'scale(1.5)'}}/> Documentation </IconButton>


                    </Box>
                </Container>
            </section>




        </div>
    )
}

export default Home