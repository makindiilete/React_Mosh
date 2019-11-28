/* Here we want to implement something in our app in such a way that if we have elements in the array, we will render it else we will render a message like "There are no elements in the array.*/

//Method 1
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return <React.Fragment>{this.renderTags()}</React.Fragment>;
  }
}

export default Counter;

//Method 2

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
    // tags: ["tag1", "tag2", "tag3"]
    tags: []
  };

  renderTags() {
    // EXPLANATION @ LINE 63
    if (this.state.tags.length === 0) return <p> There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;

/*

//The code starts checking from the left, if the first expression is true, it returns the second expression
  true && false
false

true && 'Hi'
"Hi"

//if the first expression is false/falsy, it returns the first expression becos the 2nd expression will not be executed
false && 'Hi'
false

false && true
false

true && ""
""

true && "Hi" && 1
1

true && 0
0
 */
