import React from 'react';
import ColorBox from './ColorBox';

function ColorBoxes(props) {
    return (
        <div>
            { props.boxes.map((box, i) => 
                <ColorBox key={i} 
                {...box}
                showColor={props.showColor}/>)
            }
        </div>
    );
}

export default ColorBoxes;