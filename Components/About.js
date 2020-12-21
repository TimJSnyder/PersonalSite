import Container from '@material-ui/core/Container';

export default function About() {
  return (

    <div id="about">
      <Container className="aboutContainer padding">
        <h1 className="textCenter">About Me</h1>
        <p className="aboutParagraph">
          Hello! My name is Tim Snyder, welcome to my website. I initially started
          this project as a way to learn NextJS and MaterialUI, but I ended up
          enjoying these frameworks so much I decided to build it all the way
          out and deploy it. My journey as a developer didn’t start here though,
          I began teaching myself a year ago by watching programming videos
          online and reading documentation. By doing this, I discovered a
          passion for learning new frameworks and languages as well as making
          awesome projects. Alongside teaching myself I am also pursuing a
          formal education in computer science at Bellevue College.
          Outside of school, I work at a non-profit that provides childcare
          to families in need as well as doing part-time warehouse work on
          the weekends.
        </p>
      </Container>

    </div>
  );
}
