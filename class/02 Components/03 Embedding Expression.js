/*Now instead of hardcoding the h1 text, we want to render it dynamically....
To do this, we will put the value inside "state" object

STATE : - This is where the data a component needs is kept*/

//1
import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 7
    };

    render() {
        return (
            <React.Fragment>
                {/*    we render our state property value dynamically here*/}
                {/*INSIDE THE {}, WE CAN RENDER ANY JS EXPRESSION.... EXPRESSION IS SOMETHING THAT PRODUCE A VALUE*/}
                <span>{this.state.count}</span>
                <span>{2 + 2}</span>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        //object destructuring.
        const {count} = this.state;
        //if this.state.count = 0, we return the string else we return the count value
        return count === 0 ? "Zero" : count
    }
}

export default Counter;

//2 :- Using JSX inside functions
import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 3
    };

    render() {
        return (
            <React.Fragment>
                {/*    we render our state property value dynamically here*/}
                {/*INSIDE THE {}, WE CAN RENDER ANY JS EXPRESSION.... EXPRESSION IS SOMETHING THAT PRODUCE A VALUE*/}
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h3>Zero</h3> : <h3>{count}</h3>
    }
}

export default Counter;

