import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#892cdc',
      contrastText: 'white',
    },
    secondary: {
      main: '#232931',
      contrastText: 'white',
      card: '#18222b',
    },
  },
});

export default theme;
