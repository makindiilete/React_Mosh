import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {/*  Rendering a list */}
        <ul>
          {this.state.tags.map(tag => (
            //  key here is needed to uniquely identify each of the element and we must set this to a unique value.. we using the "tag" parameter here as it contains different datas
            <li key={tag}>{tag}</li>
            //  In real world scenario, since id of the element cannot b d same so we can use the id as the unique key
            // <li key={tag.id}>{tag}</li>
          ))}
        </ul>
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
