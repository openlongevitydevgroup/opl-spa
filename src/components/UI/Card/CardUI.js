import React from 'react'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
const {StyledEngineProvider,Box ,Typography} = require('@mui/material')
const BOX_STYLES = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop:'1rem',
    paddingLeft:'2rem',
    paddingRight:'2rem'
}


function RenderIcon(props){
    const type=props.type
    switch(type){
        case 'question':
            return(
                <Box sx={BOX_STYLES}>
                <QuestionMarkIcon fontSize='large' sx={{transform:'scale(2.5)', paddingBottom:'1rem'}} />
                <Typography variant='h6'> 'N' </Typography>
                <Typography variant='subtitle1'> Questions submitted</Typography>
                </Box>


            )
        case 'category':
            return(
                <Box sx={BOX_STYLES}>
                <CategoryOutlinedIcon fontSize='large' sx={{transform:'scale(2.5)', paddingBottom:'1rem'}} />
                <Typography variant='h6'> 'N' </Typography>
                <Typography variant='subtitle1'> Categories</Typography>
                </Box>
            )
        default: 
            return(null)


    }
}

function StatUI(props){

    return (
        <StyledEngineProvider injectFirst>
                <RenderIcon type={props.type}/>

        </StyledEngineProvider>
    )
}

export default StatUI;