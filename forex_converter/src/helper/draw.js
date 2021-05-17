


function isDraw(board, count){
    if(!((board[0] === board[1] && board[1] === board[2] && board[2] === 'X') || (board[0] === board[1] && board[1] === board[2] && board[2] === '0'))&& board[0] !== null && board[1] !== null && board[2] !== null){
        count = count + 1;
    } 
    
    if(!((board[3] === board[4] && board[4] === board[5] && board[5] === 'X') || (board[3] === board[4] && board[4] === board[5] && board[5] === '0')) && board[3] !== null && board[4] !== null && board[5] !== null){
        count = count + 1;
    } 

    if(!((board[6] === board[7] && board[7] === board[8] && board[8] === 'X') || (board[6] === board[7] && board[7] === board[8] && board[8] === '0')) && board[6] !== null && board[7] !== null && board[8] !== null){
        count = count + 1;
    } 

    if(!((board[0] === board[3] && board[3] === board[6] && board[6] === 'X') || (board[0] === board[3] && board[3] === board[6] && board[6] === '0')) && board[0] !== null && board[3] !== null && board[6] !== null){
        count = count + 1;
    }
    
    if(!((board[1] === board[4] && board[4] === board[7] && board[7] === 'X') || (board[1] === board[4] && board[4] === board[7] && board[7] === '0')) && board[1] !== null && board[4] !== null && board[7] !== null){
        count = count + 1;
    }
    
    if(!((board[2] === board[5] && board[5] === board[8] && board[8] === 'X') || (board[2] === board[5] && board[5] === board[8] && board[8] === '0')) && board[2] !== null && board[5] !== null && board[8] !== null){
        count = count + 1;
    } 

    if(!((board[0] === board[4] && board[4] === board[8] && board[8] === 'X') || (board[0] === board[4] && board[4] === board[8] && board[8] === '0')) && board[0] !== null && board[4] !== null && board[8] !== null){
        count = count + 1;
    }
    
    if(!((board[2] === board[4] && board[4] === board[6] && board[6] === 'X') || (board[2] === board[4] && board[4] === board[6] && board[6] === '0')) && board[2] !== null && board[4] !== null && board[6] !== null){
        count = count + 1;
    }
    
    return count;
}

export default isDraw;