import React from 'react';

class TriviaCard extends React.Component {
    constructor(props){
        super(props);
        // 1st (better)way to refer back to this
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
            // 2nd way to refer back to this
            <div>
                <h1>{props.topic.title}</h1>
                <h3>{props.description}]</h3>
            </div>
        )
    }
    // onClick = {this.handleHintClick.bind(this)}
    Hint(props){
        return (
            <div >
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

        quesHint = this.Question

        return (
            <div className="card" style={{width:"18rem"}}>
                {quesHint}
            </div>
        )
    }
}


export default TriviaCard