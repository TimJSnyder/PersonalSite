import Card from './Card';
import list from './ProjectList';

function ProjectsCard() {
  return (
    <>
      <h1 id="projects" className="textCenter">Projects</h1>
      <p className="textCenter">Check out everything from my first HTML webpage to my current projects!</p>
      <div className="flexWrap">
        {list.map((listItem) => (
          <Card
            key={listItem.key}
            name={listItem.name}
            description={listItem.description}
            link={listItem.link}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsCard;
