import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List/List';


class App extends React.Component{
  render(){
    let users = ["eddy", "brendan", "goose", "eli", "marcos"];
    return (
        <div className="container">
            <List users={users} />
        </div>
    )
}



}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
