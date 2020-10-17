import '../styles/globals.css'
import 'fontsource-roboto'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#f7f2e7'
    },
    secondary: {
      main: '#41444b'
    }
  }
});

function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
