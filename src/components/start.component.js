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
                <div className='HeadDiv'><h1>Input Player Details</h1></div>
                <div className='formDiv'>
                <form onSubmit = {this.handlesubmit}>
                        <label htmlFor = 'Player1'>Player One</label>
                        <input onChange = {this.handleChange} type = 'text' id='Player1' required/><br></br>
                        <label htmlFor = 'Player2'>Player Two</label>
                        <input onChange = {this.handleChange} type = 'text' id='Player2' required/><br></br>
                        <input type = 'submit' value = 'Begin the Game' className = 'submit'/>
                </form>
                </div>
            </div>
        );
    }
}
export default Start;