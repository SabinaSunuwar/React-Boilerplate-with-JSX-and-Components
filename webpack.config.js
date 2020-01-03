
import React from 'react';
import ReactDOM from 'react-dom';


React.createElement('input')

const lecture = 'react jsx';
const element = <h1>Testing{lecture}</h1>;
ReactDOM.render(element, document.getElementById('jsx'))

function Button (props){ //props to get property value

return <button type="submit">{props.label}</button> //jsx

}

// ReactDOM.render(<button type="submit"></button>, document.getElementById('jsx'))

//Button function is called, is actually cpmponent < /> 
//save
ReactDOM.render(<Button label="save"/>, document.getElementById('jsx'))
//cancel
ReactDOM.render(<Button label="cancel"/>, document.getElementById('jsx'))