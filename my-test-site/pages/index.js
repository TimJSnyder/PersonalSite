import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
import Appbar from '../Components/Appbar'



export default function Home() {
  const dispatch = useDispatch()
  const theme  = useTheme()

  const toggleTheme = () => {dispatch({ type: 'TOGGLE_THEME'})}

  return (

    <div className='flex' style={{backgroundColor: theme.palette.secondary.main}}>

    <Appbar />
    <Button position='fixed' variant="contained" color="primary" onClick = {toggleTheme}>
      Switch Theme
    </Button>

    <div style={{height:'1000rem', width:'1000rem'}}/>

    </div>
  
  )
}
