

function getWinner(board) { 


    if((board[0] === board[1] && board[1] === board[2] && board[2] === 'X') || (board[0] === board[1] && board[1] === board[2] && board[2] === '0')){
        return board[0];
    } 
    
    if((board[3] === board[4] && board[4] === board[5] && board[5] === 'X') || (board[3] === board[4] && board[4] === board[5] && board[5] === '0')){
        return board[3];
    } 

    if((board[6] === board[7] && board[7] === board[8] && board[8] === 'X') || (board[6] === board[7] && board[7] === board[8] && board[8] === '0')){
        return board[6];
    } 

    if((board[0] === board[3] && board[3] === board[6] && board[6] === 'X') || (board[0] === board[3] && board[3] === board[6] && board[6] === '0')){
        return board[0];
    }
    
    if((board[1] === board[4] && board[4] === board[7] && board[7] === 'X') || (board[1] === board[4] && board[4] === board[7] && board[7] === '0')){
        return board[1];
    }
    
    if((board[2] === board[5] && board[5] === board[8] && board[8] === 'X') || (board[2] === board[5] && board[5] === board[8] && board[8] === '0')){
        return board[2];
    } 

    if((board[0] === board[4] && board[4] === board[8] && board[8] === 'X') || (board[0] === board[4] && board[4] === board[8] && board[8] === '0')){
        return board[0];
    }
    
    if((board[2] === board[4] && board[4] === board[6] && board[6] === 'X') || (board[2] === board[4] && board[4] === board[6] && board[6] === '0')){
        return board[2];
    }
    
    return false;
}

export default getWinner;