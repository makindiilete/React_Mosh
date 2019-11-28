/* We want to learn how we can pass arguments to our defined event handlers and access them in our DOM */

//MEDIOCRE SOLUTION
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5
  };

  //Handling the click event and binding to the state property using arrow function
  handleIncrement = productId => {
    console.log(productId);
    // setting the count property of the state
    this.setState({ count: this.state.count + 1 });
  };

  // This method pass a parameter to the "handleIncrement()"
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm mr-2"
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

//APPROVED SOLUTION
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5
  };

  //Handling the click event and binding to the state property using arrow function
  handleIncrement = productId => {
    console.log(productId);
    // setting the count property of the state
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* Passing event arguments */}
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm mr-2"
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
