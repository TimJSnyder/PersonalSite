import React from 'react';
import {
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
} from '@material-ui/core/';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';

// Dispatch and useSelector grab the theme and allow the button to toggle it
// The <Links> use npm package react-scroll to scroll to ID's on the page
// Offset and smooth make the scroll more aesthetically pleasing
// The Ternary Operator changed the Icon based on the theme

export default function Appbar() {
  const dispatch = useDispatch();
  const toggleTheme = () => { dispatch({ type: 'TOGGLE_THEME' }); };
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <AppBar position="fixed">
        <div className="appbarWrapper">
          <div className="appbarMaxWidth">
            <h2 className="appbarName">Tim Snyder</h2>
            <div className="appbarItems">
              <Link offset={-90} to="about" smooth className="effect-shine"><h4>About</h4></Link>
              <Link offset={-90} to="skills" smooth className="effect-shine"><h4>Skills</h4></Link>
              <Link offset={-90} to="projects" smooth className="effect-shine"><h4>Projects</h4></Link>
              <Link offset={-90} to="contact" smooth className="effect-shine"><h4>Contact me</h4></Link>
              <Tooltip title="Change Theme">
                <IconButton onClick={toggleTheme}>
                  {theme === 'dark' ? <Brightness2Icon style={{ color: 'white' }} /> : <Brightness7Icon />}
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </AppBar>

      <Toolbar />
    </>
  );
}
