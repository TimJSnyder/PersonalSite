import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function ProjectCard(props){
  
  
    return (
      <Card variant="outlined" >
      <CardContent>
        <Typography color="textSecondary" >
          {props.name}
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button href="" size="small" variant="contained" disableElevation>
        view source
      </Button>
      </CardActions>
    </Card>
  );
}
   

export default ProjectCard

    
