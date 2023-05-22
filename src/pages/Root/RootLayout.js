import {Nav2}  from '../../components/UI/Nav/Nav'
import { StyledEngineProvider, Typography } from '@mui/material'
import {Outlet} from 'react-router-dom'
import './RootLayout.css'
import { Fragment } from 'react'
function RootLayout(){
    return (
        <Fragment>
        <Nav2/>
        <Outlet/>
        <footer>
            <Typography></Typography>
        </footer>
        </Fragment>
    )

}
export default RootLayout