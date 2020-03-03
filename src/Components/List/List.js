import React from 'react';

class List extends React.Component {
    render(){
        let userList = this.props.users.map((user, index) => {
            return <li key={index}>{user}</li>;
      
        })        
        return (
            <div>
                <h1>The List Component</h1>
                <ul>
                    {userList}
                </ul>
            </div>
        )
    }

}








export default List