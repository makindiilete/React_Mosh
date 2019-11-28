 /*Here we will learn how to set html attributes in JSX

 * normally in Html we can have image tag as <img src="#" alt="#" /> but we cannot do this in JSX because this is javascript an anything in between the quotes "are rendered as plain text"*/

// 1 : - IMG ATTRIBUTES
 import React, {Component} from "react";
 import logo from "../boys-over-flowers.jpg"

 class Counter extends Component {
     state = {
         count : 5,
         imageURL: logo
     };

     render() {
         return (
             <React.Fragment>
                 {/*SETTING IMG ATTRIBUTES*/}
                 <img src={this.state.imageURL} alt="img" />
                 <span>{this.formatCount()}</span>
                 <button>Increment</button>
             </React.Fragment>
         );
     }
     formatCount() {
         const {count} = this.state;
         return count === 0 ? "Zero" : count
     }
 }

 export default Counter;

// 2 : - CLASS
 import React, {Component} from "react";

 class Counter extends Component {
     state = {
         count : 0
     };

     render() {
         return (
             <React.Fragment>
                 {/*    here we use "class" attr but we are using className bcos class is a reserved keyword in JS*/}
                 <span className="badge badge-primary m-2">{this.formatCount()}</span>
                 {/*className*/}
                 <button className="btn btn-secondary btn-sm">Increment</button>
             </React.Fragment>
         );
     }
     formatCount() {
         const {count} = this.state;
         return count === 0 ? "Zero" : count
     }
 }

 export default Counter;


 // 3 : - STYLES
 import React, {Component} from "react";

 class Counter extends Component {
     state = {
         count : 0
     };

     //styles object
     styles = {
         // react will turn ds 15 to 15px
         fontSize: 15,
         fontWeight: "bold"
     };

     render() {
         return (
             <React.Fragment>
                 {/*    we ref our styles object here and ds apply all ds styles in d object to d element we pass t too */}
                 <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                 {/*inline styles*/}
                 <button style ={{color : "blue"}} className="btn btn-outline-secondary btn-sm">Increment</button>
             </React.Fragment>
         );
     }
     formatCount() {
         const {count} = this.state;
         return count === 0 ? "Zero" : count
     }
 }

 export default Counter;


