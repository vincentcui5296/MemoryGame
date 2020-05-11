import React from 'react';
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="navbar">
            <h1>Memory Game</h1>
            <p onClick={props.newGame}>New Game</p>
        </div>
    )
}

export default Navbar;