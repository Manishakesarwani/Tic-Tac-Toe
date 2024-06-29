import '../components/result.css';

 function Result({state, player1, player2}) {
    switch (state) {
        case 0:
            return (
                <div className='result'>
                    <div className = 'p1'>{player1} is winner!</div>
                </div>
            ); 
        case 1:
            return (
                <div className='result'>
                    <div className = 'p2'>{player2} is winner!</div>
                </div>
            );
        case 2:
             return (
                 <div className = 'result'>
                     <div className = 'p3'>Match is Draw!</div>
                 </div>
             );   
        default:
            return('');
    } 
     
 }

 

 export default Result;