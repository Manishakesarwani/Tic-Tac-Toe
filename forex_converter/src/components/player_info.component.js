import React from 'react';
import '../components/PlayerInfo.component.css';

function PlayerInfo({player1, player2}){
    return (
        <div className = 'Players'>
            <p><span id = 'p1'>Player 1 :- </span>{player1}</p>
            <p><span id = 'p2'>Player 2 :- </span> {player2}</p>   
        </div>
    );
}

export default PlayerInfo;