import React from 'react';

class TriviaCard extends React.Component {
    constructor(props){
        super(props);
        // this.handleHintClick = this.handleHintClick.bind(this)
        // this.handleQuestionClick = this.handleQuestionClick.bind(this)
        this.state = {
            isQuestion: true
        }
    }

    handleQuestionClick(){
        this.setState({isQuestion:false});
    }

    handleHintClick(){
        this.setState({isQuestion:true});
    }

    Question(props){
        return (
            <div onClick = {this.handleQuestionClick.bind(this)}>
                <h1>{props.title}</h1>
                <h3>{props.question}]</h3>
            </div>
        )
    }

    Hint(props){
        return (
            <div onClick = {this.handleHintClick.bind(this)}>
                <h3>
                   { props.hint}
                </h3>
            </div>
        )
    }



    render(){
        const isQuestion = this.state.isQuestion;
        let quesHint;

        if(isQuestion){
            quesHint = this.Question(this.props)
        }
        else{
            quesHint = this.Hint(this.props)
        }

        return (
            <div className="card" style={{width:"18rem"}}>
                {quesHint}
            </div>
        )
    }
}


export default TriviaCard