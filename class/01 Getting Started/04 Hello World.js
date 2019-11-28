/*
Delete Everything inside the src folder and we will start by writing everything from scratch.

>>  Add a new file "index.js" >> Add the code*/

//index.js
import React from "react";
// We need to import this to render our "element" in the dom
import ReactDOM from "react-dom";

//our element variable which takes d value of html element
const element = <h1>Hello World </h1>;
//    Here we use our ReactDOM to render the element using the "render()" which takes 2 args (the thing/variable we want to render, where in the dom/index.html/container we want it rendered)
ReactDOM.render(element, document.getElementById("root"));

/*This is a simple app, In a real world app, we will render an app component inside of a simple variable*/
