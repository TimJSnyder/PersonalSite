import { ThemeProvider } from '@material-ui/core/styles';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import lightTheme from '../styles/themes/light-theme';
import darkTheme from '../styles/themes/dark-theme';

import 'fontsource-roboto';
import '../styles/layout.css';
import '../styles/card.css';
import '../styles/globals.css';
import { store, persistor } from '../redux/store';

function WrappedApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyApp Component={Component} pageProps={pageProps} />
      </PersistGate>
    </Provider>
  );
}

function MyApp({ Component, pageProps }) {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default WrappedApp;
