import React from 'react';

class Result extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        if(this.props.isRight){
            return (
                <div>
                    <h4>Correct! Score: + {this.props.score}</h4>
                    <button>Next Question</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h4>Wrong! Score: + {this.props.score}</h4>
                    <button>Next Question</button>
                </div>
            )
        }
       
    }
}


export default Result