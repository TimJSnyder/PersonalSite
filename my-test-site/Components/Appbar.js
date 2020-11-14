import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch} from 'react-redux'
import Brightness2Icon from '@material-ui/icons/Brightness2';

export default function Appbar(){
    const dispatch = useDispatch()
    const toggleTheme = () => {dispatch({ type: 'TOGGLE_THEME'})}


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
                        <Brightness2Icon />
                        </IconButton>
                        </div>
                </Toolbar>
            </AppBar>


            <Toolbar />
        </div>
    )
}