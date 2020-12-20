import React from 'react';
import {
  Card,
  Container,
  CardContent,
  Link,
  useTheme,
} from '@material-ui/core';
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
            <Link href={link} style={{ color: theme.palette.secondary.contrastText }} target="__blank">
              <h4 className="cardTitle effect-shine">
                {name}
              </h4>
            </Link>
            <p variant="body2" className="cardDescription">
              {description}
            </p>
          </CardContent>
        </Card>
      </Slide>
    </Container>
  );
}

export default ProjectCard;
