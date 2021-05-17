import React from 'react';
import '../components/start.css';

class Start extends React.Component{
    
    state = {
        player1 : null,
        player2 : null
    }

    handlesubmit = (e) =>{
        e.preventDefault();
        this.props.info(this.state.player1, this.state.player2);
    }

    handleChange = (e) => {

        if(e.target.id === 'Player1'){
            this.setState({
                player1 : e.target.value
            });
        }
        else{
            this.setState({
                player2 : e.target.value
            });
        }
    }

    render(){
        return(
            <div  className = 'start'>
                <h5>Enter player information </h5>
                    <form onSubmit = {this.handlesubmit}>
                        <label htmlFor = 'Player1'>Player 1 :- </label>
                        <input onChange = {this.handleChange} type = 'text' id='Player1' required/>
                        <br />
                        <label htmlFor = 'Player2'>Player 2 :- </label>
                        <input onChange = {this.handleChange} type = 'text' id='Player2' required/>
                        <br/><br/>
                        <input type = 'submit' value = 'Start the game'/>
                    </form>
            </div>
        );
    }
}
export default Start;