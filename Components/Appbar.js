import React from 'react';
import {
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
} from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';

import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';

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
              <h4 className="effect-shine">About</h4>
              <h4 className="effect-shine">Skills</h4>
              <h4 className="effect-shine">Projects</h4>
              <h4 className="effect-shine">Contact me</h4>
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
