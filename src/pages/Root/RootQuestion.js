import './RootQuestion.css'
import {Outlet} from 'react-router-dom'
import {Fragment} from 'react'
import { Container,Typography } from '@mui/material'

import {Nav2} from '../../components/UI/Nav/Nav'

function RootQuestion(){
return(
    
<Fragment>
        <Nav2/>
        <section>
            <Container className='root-container'>
                <Typography variant='h3' sx={{textAlign:'center'}}>Questions</Typography>
            </Container>
        </section>
    <main className='w-full p-8'>
        <Container>
        <Outlet/>
        </Container>
    </main>

</Fragment>
)
}

export default RootQuestion;