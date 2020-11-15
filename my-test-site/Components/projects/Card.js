import React from 'react'
import {
  Card,
  Container,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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

function ProjectCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container className='cardContainer'>
      <Card
        className={classes.root}
        variant="outlined"
        style={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText
        }}
      >
        <CardContent>
          <Typography className={classes.title}>
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
  );
}

export default ProjectCard
