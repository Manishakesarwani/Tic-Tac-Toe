import './App.css';
import React from 'react';
import PlayerInfo from './components/player_info.component';
import Board from './components/Board.component';
import Turn from './components/Turn.component';
import Start from './components/start.component';
import Result from './components/Result';


class App extends React.Component {

  state = {
    Player1 : null,
    Player2 : null,
    chance : null,
    isgamestart : false,
    FirstChance : null,
    status : -1
  };

  getPlayerInfo = (player1, player2) =>{

    var val = Math.random();
    var flooredVal = Math.floor(val*2);
    var current = null;
    if(flooredVal === 0){
      current = player1;
    }
    else{
      current = player2;
    }

    this.setState({
      Player1 : player1,
      Player2 : player2,
      isgamestart : true,
      chance : current,
      FirstChance : current
    });
  }

  handleChanceChange = (isX) => {
    if(isX === true){
      if(this.state.FirstChance === this.state.Player1){
        this.setState({
          chance : this.state.Player2
        });
      }
      else{
        this.setState({
          chance:this.state.Player1
        });
      }
    }
    else{
      if(this.state.FirstChance === this.state.Player1){
        this.setState({
          chance : this.state.Player1
        });
      }
      else{
        this.setState({
          chance:this.state.Player2
        });
      }
    }
  }

  handleWinner = (winner) => {
    if(winner === 'X'){
      if(this.state.FirstChance === this.state.Player1){
      this.setState({
        status : 0
      });
    }
      else{
        this.setState({
          status : 1
        });
      }
    }
    else{
      if(this.state.FirstChance === this.state.Player1){
        this.setState({
          status : 1
        });
      }
      else{
        this.setState({
          status : 0
        });
      }
    }
  }

  handleDraw = () =>{
    this.setState({
      status : 2
    });
  }
  

  render(){

    var {Player1, Player2, chance, isgamestart, status} = this.state;
    return isgamestart ? (
      <div>
     
      <PlayerInfo player1 = {Player1} player2 = {Player2}/>
      <Turn chance = {chance}/>
      <Board chance = {this.handleChanceChange} winner = {this.handleWinner} drawn = {this.handleDraw}/>
      <Result state = {status} player1 = {Player1} player2 = {Player2}/>
      </div>
    ) : <Start info = {this.getPlayerInfo}/>;
  }  
}

export default App;
