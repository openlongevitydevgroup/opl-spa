import Nav from '../../components/UI/Nav/Nav'
import { StyledEngineProvider, Typography } from '@mui/material'
import {Outlet} from 'react-router-dom'
import './RootLayout.css'
function RootLayout(){
    return <StyledEngineProvider inject first>
        <Nav/>
        <Outlet/>
        <footer>
            <Typography></Typography>
        </footer>
    </StyledEngineProvider>
}
export default RootLayout