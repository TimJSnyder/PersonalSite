import Card from './Card';
import list from './ProjectList';

// Grabs info from projectslist.js and maps the info to the cards.
// The ID here will direct the appbar button where to scroll to

function ProjectsCard() {
  return (
    <>
      <h1 id="projects" className="textCenter">Projects</h1>
      <p className="textCenter">Check out everything from my first HTML webpage to my current projects</p>
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
