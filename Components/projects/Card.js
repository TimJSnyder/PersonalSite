import React from 'react';
import {
  Card,
  Container,
  CardActions,
  CardContent,
  Tooltip,
  useTheme,
  IconButton,
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

// Cards made with material ui and take in the props name and description from projects.js

function ProjectCard({ name, description }) {
  const theme = useTheme();

  return (
    <Container className="cardContainer textCenter ">
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
          <Tooltip title="View on Github">
            <IconButton>
              <CodeIcon style={{ color: theme.palette.secondary.contrastText }} />
            </IconButton>
          </Tooltip>
        </CardActions>

      </Card>
    </Container>
  );
}

export default ProjectCard;
