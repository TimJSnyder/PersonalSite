import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useTheme } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

export default function Footer() {
  const theme = useTheme();
  const iconStyle = { color: theme.palette.secondary.contrastText };

  return (
    <AppBar position="static">
      <div className="footer">
        <IconButton href="">
          <GitHubIcon style={iconStyle} />
        </IconButton>

        <IconButton href="">
          <InstagramIcon style={iconStyle} />
        </IconButton>

        <IconButton href="">
          <MailOutlineIcon style={iconStyle} />
        </IconButton>
      </div>
    </AppBar>
  );
}
