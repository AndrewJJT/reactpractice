import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Components/Counter/Counter';

// import App from './App';
// import * as serviceWorker from './serviceWorker';
import ReactComp from './Components/ReactComp';
import TriviaCard from './Components/TriviaCard/TriviaCard';

const HelloReact = <h1>YOLO</h1>;

// const name ={
//     nm: 'Season'
// }

// ReactDOM.render(ReactComp(name), document.getElementById("root"));
ReactDOM.render(<TriviaCard title="Baseball" 
                question="Who holds the...."
                hint="This player stole...."/>, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById('root'));


