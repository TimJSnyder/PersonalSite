import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
    maxWidth: 375,
    margin: '2%'
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
})




  function ProjectCard(props){
    const classes = useStyles();
      return (
        <div>
        <Container className='cardContainer'>
          <Card className={classes.root} variant="outlined" >
            <CardContent>
              <Typography className={classes.title}  color="textSecondary" >
                {props.name}
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
          </Container>
      </div>
    );
  }
   

export default ProjectCard

    
