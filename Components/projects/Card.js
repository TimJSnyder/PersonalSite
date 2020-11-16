import React from 'react';
import {
  Card,
  Container,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';

function ProjectCard({ name, description }) {
  const theme = useTheme();

  return (
    <Container className="cardContainer textCenter">
      <Card
        className="card"
        variant="outlined"
        style={{
          backgroundColor: theme.palette.secondary.card,
          color: theme.palette.secondary.contrastText,
        }}
      >
        <CardContent>
          <h4 className="cardTitle">
            {name}
          </h4>

          <p variant="body2" className="cardDescription">
            {description}
          </p>
        </CardContent>

        <CardActions>
          <IconButton>
            <CodeIcon style={{ color: theme.palette.secondary.contrastText }} />
          </IconButton>
        </CardActions>

      </Card>
    </Container>
  );
}

export default ProjectCard;
