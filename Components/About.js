import Container from '@material-ui/core/Container';

export default function About() {
  return (

    <div id="about">
      <Container className="aboutContainer padding">
        <h1 className="textCenter">About Me</h1>
        <p className="aboutParagraph">
          Hello! My name is Tim Snyder. I am currently a student at Bellevue College,
          and I am pursuing a bachelor’s degree in computer science. I enjoy learning
          about software development and study languages and frameworks when I am not in school.
          Outside of school, I work at a nonprofit that provides childcare to in-need families.
          Right now, I am learning a lot about React and MaterialUI that I use for web projects
          such as this site but I also am learning java and python as well. Feel free to contact
          me anytime :)
        </p>
      </Container>

    </div>
  );
}
