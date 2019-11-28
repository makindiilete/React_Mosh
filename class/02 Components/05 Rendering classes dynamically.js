/* Our badge is currently blue, now we want to tweak the app in such a way that when the count is zero, we change the badge color to yellow otherwise we render it as blue..... So we will render a bootstrap class for yellow badge and blue dynamically depending on the value of the count property. */

// 1
import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 0
    };



    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";

        return (
            <React.Fragment>
                <span className={classes}>{this.formatCount()}</span>
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


//CODE REFACTORING
import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 5
    };



    render() {

        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
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
        const {count} = this.state;
        return count === 0 ? "Zero" : count
    }


}

export default Counter;
