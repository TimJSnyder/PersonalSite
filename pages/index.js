import { useTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import Appbar from '../Components/Appbar';
import About from '../Components/About';
import Footer from '../Components/Footer';
import ProjectsCard from '../Components/projects/Projects';
import Skills from '../Components/Skills';
import Copyright from '../Components/Copyright';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Head>
          <title>Tim Snyder</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div
          className="flex"
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
          <div className="maxWidth">
            <Appbar />
            <About />
            <Skills />
            <ProjectsCard />
            <Copyright />
          </div>

          <Footer />

        </div>
      </SnackbarProvider>
    </>
  );
}
