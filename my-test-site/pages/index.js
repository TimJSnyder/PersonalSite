import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

export default function Home() {
  const theme  = useTheme();

  return (
    <div className='flex' style={{backgroundColor: theme.palette.secondary.main}}>
    <Button variant="contained" color="primary" onClick = {()=>{}}>
      Switch Theme
    </Button>


    <div style={{height:'100px', width:'200px'}}/>
    </div>
  )
}
