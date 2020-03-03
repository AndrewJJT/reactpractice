import React from 'react';
import Jslibrary from './Jslibrary';


class Voting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
        }
    }


    render(){
        return (
            <div className="container">
                <h1>Vote Your Favorite JS Library</h1>
                <Jslibrary name="React"/>
                <Jslibrary name="Vue"/>
                <Jslibrary name="Angular"/>
                <Jslibrary name="Ember"/>
                </div>
                )
    }
}



export default Voting