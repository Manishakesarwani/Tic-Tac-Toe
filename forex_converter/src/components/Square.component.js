import React from 'react';
import '../components/Square.component.css';

function Square({type, click, index}){

    function handlechange() {
        if(type === null)
        click(index);
       
    }
    return(
        <div className = 'square' onClick = {handlechange}>
            {type}
        </div>
    );
}

export default Square;