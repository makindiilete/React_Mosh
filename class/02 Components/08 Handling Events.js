/*We want to see how we can handle events e.g. click events etc......*/

// 1
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5
  };

  //Handling the click event
  handleIncrement() {
    console.log("Increment clicked");
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/*we ref the click handler method here*/}
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
