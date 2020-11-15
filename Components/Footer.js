import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useTheme } from '@material-ui/core/styles';





export default function Footer(){
	const theme = useTheme()
    //totally does I was just having a brain fart
    //btw Ill add you to the github repo so you can check shit out there too if you so desire
	return(
		<div>
			<AppBar position="static">
					<div  className='footer'>       
						<IconButton href=''>
								<GitHubIcon style={{color: theme.palette.secondary.contrastText}}/>
						</IconButton>

						<IconButton href=''>
								<InstagramIcon style={{color: theme.palette.secondary.contrastText}} />
						</IconButton>

						<IconButton href=''>
								<MailOutlineIcon style={{color: theme.palette.secondary.contrastText}}/>
						</IconButton>
					</div>
			</AppBar>
		</div>
	)
}