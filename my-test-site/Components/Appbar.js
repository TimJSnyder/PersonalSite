import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';

export default function Appbar(){
  const dispatch = useDispatch()
  const toggleTheme = () => {dispatch({ type: 'TOGGLE_THEME'})}
  const theme = useSelector(state => state.theme)

  return (
    <div className = 'appbar'>
      <AppBar position="fixed">
        <Toolbar variant="dense">
            <h2 className='appbarName'>Tim Snyder</h2>
              <div className='appbarItems'>
              <h4><a className = 'effect-shine' href='' >About</a></h4>
              <h4><a className = 'effect-shine' href='' >Projects</a></h4>
              <h4><a className = 'effect-shine' href='' >Contact me</a></h4>

              <IconButton onClick = {toggleTheme}>
                {theme === 'dark' ? <Brightness2Icon style={{color: 'white'}} /> : <Brightness7Icon />}
              </IconButton>
              </div>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </div>
  )
}