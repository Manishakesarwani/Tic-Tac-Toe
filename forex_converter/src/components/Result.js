import '../components/result.css';

 function Result({state, player1, player2}) {
    switch (state) {
        case 0:
            return (
                <div>
                    <div className = 'p1'>
                        {player1} is winner!
                    </div> 
                    <img src = 'sparkle.png' alt = 'Butterfly' className = 'fimage'/>
                    
                </div>
            ); 
        case 1:
            return (
                <div>
                    <div className = 'p2'>
                        {player2} is winner!
                    </div>
                    <img src = 'sparkle.png' alt = 'Butterfly' className = 'fimage'/> 
                </div>
            );
        case 2:
             return (
                 <div className = 'draw'>
                     Match is Draw!
                 </div>
             );   
        default:
            return('');
    } 
     
 }
 

 export default Result;