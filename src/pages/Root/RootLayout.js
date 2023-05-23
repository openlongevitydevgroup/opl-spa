import {Nav2}  from '../../components/UI/Nav/Nav'
import {Outlet} from 'react-router-dom'
import './RootLayout.css'
import { Fragment } from 'react'
function RootLayout(){
    return (
        <Fragment>
        <Nav2/>
        <Outlet/>
        <footer>
        </footer>
        </Fragment>
    )

}
export default RootLayout