import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function Skills() {
  return (
    <div className="skillsContainer">
      <h1 id="skills" className="textCenter">My Skills</h1>
      <div className="skills flexWrap textCenter">
        <Box component="fieldset" mb={3} borderColor="transparent">
          <h2>HTML</h2>
          <Rating value={5} readOnly />
        </Box>
        <Box component="fieldset" mb={5} borderColor="transparent">
          <h2>CSS</h2>
          <Rating value={4} readOnly />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <h2>Bootstrap</h2>
          <Rating value={4} readOnly />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <h2>Javascript</h2>
          <Rating value={3} readOnly />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <h2>MaterialUI</h2>
          <Rating value={3} readOnly />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <h2>NodeJs</h2>
          <Rating value={3} readOnly />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <h2>Express</h2>
          <Rating value={3} readOnly />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <h2>React</h2>
          <Rating value={2} readOnly />
        </Box>
      </div>
    </div>
  );
}

export default Skills;
