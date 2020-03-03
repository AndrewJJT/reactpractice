import React from 'react';
import TriviaRoundAnswer from './TriviaRoundAnswer';
import Result from './Result';

class TriviaRound extends React.Component {
    constructor(props){
        super(props);
        this.triviaQuestion = props.testQuestion;
        this.handleHintClick = this.handleHintClick.bind(this)
        this.handleQuestionClick = this.handleQuestionClick.bind(this)
        
        this.state = {
            isAnswered: false,
            isCorrectResult: false,
            isQuestion: true,
            sec: 0,
            totalScore: 5,
        }
    }

    // addSec(){
    //     this.setState(prevState => ({
    //         sec: prevState.sec + 1
    //     }))
    // }

    // componentDidMount(){
    //   setInterval(() => this.addSec(), 1000)
        
    // }

    checkAnswer(isCorrect){  
        if(isCorrect){
            // check hint/ and sec
            let newscore = this.state.totalScore;
            this.state.sec > 10? this.state.sec > 20? newscore -= 4: newscore-=2 : newscore -= 0
            this.setState(() => ({totalScore: newscore, isAnswered: true, isCorrectResult: isCorrect}))
            
        }
        else{
            this.setState(() => ({totalScore:0, isAnswered: true, isCorrectResult: isCorrect}))
            
        }
       
    }


    handleQuestionClick(){
        this.setState(prevState => ({
            isQuestion: false,
            totalScore: prevState.totalScore -1 
        }));
    }

    handleHintClick(){
        this.setState({isQuestion:true});
    }

    Question(){
        return (
            <div onClick = {this.handleQuestionClick}>
                <h1>{this.triviaQuestion.topic.title}</h1>
                <h3>{this.triviaQuestion.description}</h3>
            </div>
        )
    }

    Hint(){
        return (
            <div onClick = {this.handleHintClick}>
                <h3>
                   { this.triviaQuestion.hint}
                </h3>
            </div>
        )
    }

    render(){
        const isQuestion = this.state.isQuestion;
        let quesHint;

        if(isQuestion){
            quesHint = this.Question()
        }
        else{
            quesHint = this.Hint()
        }

        let result;
        if(this.state.isAnswered){
           result = <Result isRight = {this.state.isCorrectResult} score={this.state.totalScore} />
        }
        else{
            result = "";
        }
        
        return (
            <div className="card" style={{width:"15rem"}}>
                <p>{this.state.sec} sec</p>
                <img src={this.triviaQuestion.topic.imageUrl} alt="pic here"></img>          
                {quesHint}
                <div>
                <TriviaRoundAnswer answers = {this.triviaQuestion.answers} checkans = { (isCorrect) => this.checkAnswer(isCorrect)}/>
                </div>
                {result}
            </div>
        )
    }
}


export default TriviaRound