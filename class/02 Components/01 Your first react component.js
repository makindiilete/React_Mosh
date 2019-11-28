/*We will be creating a new project "Counter_App" with incrememt, decremenet and counter badge with css and react.
Install Bootstrap
Import bootstrap in index.js
Create a new folder "components" >> Inside it create a new file "counter.jsx"*/

//index.js
import React from "react";
// We need to import this to render our "element" in the dom
import ReactDOM from "react-dom";
//import bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Import the component we want to render here
import Counter from "./components/counter";


//    Here we render our Counter
ReactDOM.render(<Counter/>, document.getElementById("root"));



//counter.jsx
import React, {Component} from "react";

class Counter extends Component {

    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

export default Counter;

