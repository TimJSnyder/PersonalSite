import {
  AppBar,
  useTheme,
  IconButton,
  Tooltip,
} from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Mail from './Mail';

export default function Footer() {
  const theme = useTheme();
  const iconStyle = { color: theme.palette.secondary.contrastText };

  return (
    <AppBar id="contact" position="static">
      <div className="textCenter">
        <Tooltip title="GitHub" placement="left-start" arrow>
          <IconButton href="https://github.com/TimJSnyder" target="_blank">
            <GitHubIcon style={iconStyle} />
          </IconButton>
        </Tooltip>
        <Mail />
        <Tooltip title="Twitter" placement="right-start" arrow>
          <IconButton href="https://twitter.com/TimSnyd10543254" target="_blank">
            <TwitterIcon style={iconStyle} />
          </IconButton>
        </Tooltip>
      </div>
    </AppBar>
  );
}
