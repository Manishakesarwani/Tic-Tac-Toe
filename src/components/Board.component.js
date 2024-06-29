import React from 'react';
import '../components/Board.component.css';
import Square from '../components/Square.component';
import getWinner from '../helper/winner';
import isDraw from '../helper/draw';



class Board extends React.Component {

    state = {
        board: Array(9).fill(null),
        isX:true,
        flag:true,
        isWflag:false,
        isDflag:false
    };

    handleChange = (idx) => {
        var f=this.state.flag;
        var w=this.state.isWflag;
        var d=this.state.isDflag;
        var val = this.state.isX ? 'X' : '0';
        var copyBoard = [...this.state.board]; //this.state.board.slice() can also be used to copy the array.
        copyBoard[idx] = val;
        this.props.chance(this.state.isX);

        //check all the boards are filled
        //match drawn
        var draw = isDraw(copyBoard, 0);
        

        var winner = getWinner(copyBoard);
        if(winner === false && draw !== 8 && f){
            this.setState({
                board: copyBoard,
                isX: !this.state.isX
            });
            console.log("check");
            
        }
        else if(draw === 8 && d===false){
            this.setState({
                flag:false,
                isDflag:true
            });
            this.props.drawn();
        }
        else if(winner !== false && w===false){
            this.setState({
                flag:false,
                isWflag:true
            });
            this.props.winner(winner);
        }
    }

    handleReset = () => {
        this.setState({
            board: this.state.board.fill(null),
            isX : true,
            flag: true,
            isWflag:false,
            isDflag:false
        });
        this.props.reset();
    }
    handleNewChange = () => {
        this.props.change();
    }

    render(){
        return(
            <div className = 'board'>
                {this.state.board.map((value, idx) => {
                    return <Square key = {idx} type = {value} click = {this.handleChange} index = {idx}/>
                })}
                <div className='Buttons' id='btn'>
                <button onClick = {this.handleReset} className = 'button'>Clear Board</button>
                <button onClick = {this.handleNewChange} className = 'btn'>Begin Again</button>
                </div>
            </div>
        );
    }
}
export default Board;