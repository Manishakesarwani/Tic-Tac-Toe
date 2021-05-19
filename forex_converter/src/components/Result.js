import '../components/result.css';

 function Result({state, player1, player2, change}) {
    switch (state) {
        case 0:
            return (
                <div>
                    <button onClick = {change} className = 'btn'>Restart</button>
                    <div className = 'p1'>
                        {player1} is winner!
                    </div> 
                    <img src = 'sparkle.png' alt = 'Butterfly' className = 'fimage'/>
                </div>
            ); 
        case 1:
            return (
                <div>
                    <button onClick = {change} className = 'btn'>Restart</button>
                    <div className = 'p2'>
                        {player2} is winner!
                    </div>
                    <img src = 'sparkle.png' alt = 'Butterfly' className = 'fimage'/>
                </div>
            );
        case 2:
             return (
                 <div className = 'draw'>
                     <button onClick = {change} className = 'btn'>Restart</button>
                     Match is Draw!
                 </div>
             );   
        default:
            return('');
    } 
     
 }

 

 export default Result;