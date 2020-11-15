import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffc4d0',
      contrastText: 'black',
    },
    secondary: {
      main: '#fbf9fa',
      contrastText: 'black',
    },
  },
});

export default theme;
