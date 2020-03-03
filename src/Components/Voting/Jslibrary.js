import React from 'react';

class Jslibrary extends React.Component {
    constructor(props){
        super(props);
        this.updateVote = this.updateVote.bind(this)
        this.state = {
            count: 0,
        }
    }

    updateVote(){
        this.setState(prevState => ({
            count: prevState.count + 1,
            // blueRed: (this.state.count >= 15)? "btn btn-danger": "btn btn-primary"
        }))
    }

    render(){
        return (
            <div>
                <h3>{this.state.count} {this.props.name}
                <button onClick = {this.updateVote}>Vote</button>
                </h3>
            </div>
        )
    }
}



export default Jslibrary