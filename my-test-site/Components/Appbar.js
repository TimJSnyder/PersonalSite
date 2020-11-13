import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Appbar(){
    return (
        <div className = 'appbar'>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <h4><a className = 'effect-shine' href='' >About</a></h4>
                    <h4><a className = 'effect-shine' href='' >Projects</a></h4>
                    <h4><a className = 'effect-shine' href='' >Contact me</a></h4>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}