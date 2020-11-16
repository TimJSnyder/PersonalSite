import { useTheme } from '@material-ui/core/styles';
import Appbar from '../Components/Appbar';
import About from '../Components/About';
import Footer from '../Components/Footer';
import ProjectsCard from '../Components/projects/Projects';

export default function Home() {
  const theme = useTheme();

  return (
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
        <ProjectsCard />
      </div>

      <Footer />
    </div>
  );
}
