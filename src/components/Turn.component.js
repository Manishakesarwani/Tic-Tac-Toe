import React from 'react';
import '../components/Turn.css';

function Turn({chance}){
    
    return(
        <div className = 'Turn'>
            <p><span id = 'turn'>Next Move: </span> {chance}</p>
        </div>
    );
}

export default Turn;