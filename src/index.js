import React from 'react';
import ReactDOM from 'react-dom';

const word = ' react jsx';
const element = <h1>Testing{word}</h1>;

ReactDOM.render(element, document.getElementById('heading'));

function Button (props){ //props to get property value

    return <button type="submit">{props.label}</button> //jsx
    
    }
    
    // ReactDOM.render(<button type="submit"></button>, document.getElementById('jsx'))
    
    //Button function is called, is actually component < /> 
    //save
    ReactDOM.render(<Button label="Save"/>, document.getElementById('save'));

    //save
    ReactDOM.render(<Button label="Delete"/>, document.getElementById('delete'));

    //cancel
    ReactDOM.render(<Button label="Cancel"/>, document.getElementById('cancel'));

