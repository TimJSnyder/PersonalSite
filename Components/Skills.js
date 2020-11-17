import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Skills() {
  const circleColor = { color: '#64dd17' };
  return (
    <>
      <h1 className="textCenter">Skills</h1>
      <div className="skillsContainer flexWrap">
        <h2 className="skillsH2">
          HTML
          {' '}
          <CheckCircleOutlineIcon style={circleColor} />
        </h2>
        <h2 className="skillsH2">
          CSS
          {' '}
          <CheckCircleOutlineIcon style={circleColor} />
        </h2>
        <h2 className="skillsH2">
          Javascript
          {' '}
          <CheckCircleOutlineIcon style={circleColor} />
        </h2>
        <h2 className="skillsH2">
          NodeJS
          {' '}
          <CheckCircleOutlineIcon style={circleColor} />
        </h2>
        <h2 className="skillsH2">
          MongoDB
          {' '}
          <CheckCircleOutlineIcon style={circleColor} />
        </h2>
        <h2 className="skillsH2">
          MaterialUI
          {' '}
          <CheckCircleOutlineIcon style={circleColor} />
        </h2>
        <h2 className="skillsH2">
          React
          {' '}
          <CheckCircleOutlineIcon style={circleColor} />
        </h2>
      </div>
    </>
  );
}

export default Skills;
