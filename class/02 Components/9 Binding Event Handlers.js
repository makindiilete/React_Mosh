/*
Currently we have learnt that inside our handleClick() {}, we cannot bind to the state with this... So in other to fix this, we change the function to an arrow function.
*/

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5
  };

  //Handling the click event and binding to the state property using arrow function
  handleIncrement = () => {
    console.log("Increment clicked", this.state.count);
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  //This method is responsible for rendering our badge color dynamically
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  //This method is responsible for formatting our count
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
