import React from 'react'
import {
  Card,
  Container,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';



function ProjectCard(props) {
  const theme = useTheme();

  return (
    <Container className='cardContainer'>
      <Card
        className='card'
        variant="outlined"
        style={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText
        }}
      >
        <CardContent>
          <Typography className='cardTitle'>
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
