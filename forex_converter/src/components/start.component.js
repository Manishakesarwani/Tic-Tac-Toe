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
            var p1 = e.target.value;
            var new_p1 = p1.toUpperCase();
            this.setState({
                player1 : new_p1
            });
        }
        else{
            var p2 = e.target.value;
            var new_p2 = p2.toUpperCase();
            this.setState({
                player2 : new_p2
            });
        }
    }

    render(){
        return(
            <div  className = 'start'>
                <h5>Enter player information </h5>
                    <form onSubmit = {this.handlesubmit}>
                        <label htmlFor = 'Player1'>First Player : </label>
                        <input onChange = {this.handleChange} type = 'text' id='Player1' required/>
                        <label htmlFor = 'Player2'>Second Player : </label>
                        <input onChange = {this.handleChange} type = 'text' id='Player2' required/>
                        <input type = 'submit' value = 'Start the game' className = 'submit'/>
                    </form>
            </div>
        );
    }
}
export default Start;