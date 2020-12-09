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
import Slide from 'react-reveal/Slide';

function ProjectCard({ name, description, link }) {
  const theme = useTheme();

  return (
    <Container className="cardContainer textCenter ">
      <Slide bottom>
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
              <IconButton href={link} target="_blank">
                <CodeIcon style={{ color: theme.palette.secondary.contrastText }} />
              </IconButton>
            </Tooltip>
          </CardActions>

        </Card>
      </Slide>
    </Container>
  );
}

export default ProjectCard;
