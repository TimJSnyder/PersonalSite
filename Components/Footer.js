import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import Mail from './Mail';

export default function Footer() {
  const theme = useTheme();
  const iconStyle = { color: theme.palette.secondary.contrastText };

  return (
    <AppBar position="static">
      <div className="textCenter">
        <IconButton href="https://github.com/TimJSnyder" target="_blank">
          <GitHubIcon style={iconStyle} />
        </IconButton>

        <IconButton href="" target="_blank">
          <InstagramIcon style={iconStyle} />
        </IconButton>

        <Mail />
      </div>
    </AppBar>
  );
}
