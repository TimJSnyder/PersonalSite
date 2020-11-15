import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';




export default function Footer(){
    
    return(
        <div>
            <AppBar position="static">
                <div className='footer'>       
                    <IconButton href=''>
                        <GitHubIcon />
                    </IconButton>

                    <IconButton href=''>
                        <InstagramIcon />
                    </IconButton>

                    <IconButton href=''>
                        <MailOutlineIcon />
                    </IconButton>

                </div>
            </AppBar>
        </div>
    )
}