import React from 'react';
// import Result from './Result';

class TriviaRoundAnswer extends React.Component {
    constructor(props){
        super(props);
        // this.checkAnswer = this.checkAnswer.bind(this);
        this.state = {
        }
    }

    render(){
        let answers = this.props.answers.map((answer) => {
            return <li className="card" style={{width:"15rem"}} key={answer.answerId} onClick={ ()  => this.props.checkans(answer.isCorrect)}>{answer.value}</li>
        })
        
        return (
            <div>
                {answers}  
            </div>
        )
    }
}


export default TriviaRoundAnswer