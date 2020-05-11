import React from 'react';
import './ColorBox.css';

function ColorBox(props) {
    const backgroundColor = props.show ? props.backgroundColor : "teal";
    return (
        <div className="color-box" onClick={() => props.showColor(props.id)} style={{backgroundColor}}></div>
    );
}

export default ColorBox;