import { useTheme } from '@material-ui/core/styles';
import Appbar from '../Components/Header'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Leaves from '../Components/Leaves';
import ProjectsCard from '../Components/projects/Projects'

export default function Home() {
  const theme  = useTheme()

  

  return (

    <div className='flex' style={{backgroundColor: theme.palette.secondary.main}}>

    <Appbar />
    <About />
    <Leaves />
    <ProjectsCard />
    <Footer />

    </div>
  
  )
}
