import React from 'react';
import '../components/Board.component.css';
import Square from '../components/Square.component';
import getWinner from '../helper/winner';
import isDraw from '../helper/draw';


class Board extends React.Component {

    state = {
        board: Array(9).fill(null),
        isX:true
    };

    handleChange = (idx) => {
        var val = this.state.isX ? 'X' : '0';
        var copyBoard = [...this.state.board]; //this.state.board.slice() can also be used to copy the array.
        copyBoard[idx] = val;
        this.props.chance(this.state.isX);

        //check all the boards are filled
        //match drawn
        var draw = isDraw(copyBoard, 0);
        

        var winner = getWinner(copyBoard);
        if(winner === false && draw !== 8){
            this.setState({
                board: copyBoard,
                isX: !this.state.isX
            });
        }
        else if(draw === 8){
            this.props.drawn();    
        }
        else{
            this.props.winner(winner);
        }
    }

    handleReset = () => {
        this.setState({
            board: this.state.board.fill(null),
            isX : true
        });
        this.props.reset();
    }

    render(){
        return(
            <div className = 'board'>
                {this.state.board.map((value, idx) => {
                    return <Square key = {idx} type = {value} click = {this.handleChange} index = {idx}/>
                })}
                <button onClick = {this.handleReset} className = 'button'>Reset Board</button>
            </div>
        );
    }
}
export default Board;