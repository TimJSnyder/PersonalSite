import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';




export default function Footer(){
    const preventDefault = (event) => event.preventDefault();
    return(
        <div>
            <AppBar position="static">
            
            <div className='footer'>

            
            <Link color = 'secondary' href='#' onClick={preventDefault}>
                <GitHubIcon /> 
            </Link>
            <Link color = 'secondary' href='#' onClick={preventDefault}>
                <InstagramIcon /> 
            </Link>
            <Link color = 'secondary' href='#' onClick={preventDefault}>
                <MailOutlineIcon /> 
            </Link>
            </div>
            
            </AppBar>
        </div>
    )
}