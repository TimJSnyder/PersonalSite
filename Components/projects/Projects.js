import React from 'react';
import Card from './Card';
import list from './ProjectList';

function ProjectsCard() {
  return (
    <>
      <h1 className="textCenter">Projects</h1>
      <div className="flexWrap">
        {list.map((listItem) => (
          <Card
            key={listItem.key}
            name={listItem.name}
            description={listItem.description}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsCard;
