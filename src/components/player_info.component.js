import React from 'react';
import '../components/PlayerInfo.component.css';

function PlayerInfo({player1, player2}){
    return (
        <div className = 'Players'>
            <div className='GameHeading'><h1>Tic-Tac-Toe</h1></div>
            <div className='pinfo'>
                <p><span id = 'p1'>Player One: </span>{player1}</p>
                <p><span id = 'p2'>Player Two: </span>{player2}</p>
            </div>
        </div>
    );
}

export default PlayerInfo;