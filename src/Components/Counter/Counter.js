import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            blueRed : "btn btn-primary"
        }
    }

    
    updateCount() {
        // this.blueRed = (this.state.count >= 15)? "btn btn-danger": "btn btn-primary";
        this.setState(prevState => ({
            count: prevState.count + 1,
            blueRed: (this.state.count >= 15)? "btn btn-danger": "btn btn-primary"
        }))
    }


    render(){
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <button type="button" className = {this.state.blueRed }
                onClick = { () => this.updateCount()}
                >Click Me</button>
                <p>You clicked me {this.state.count}</p>
            </div>
        )
    }
}



export default Counter





