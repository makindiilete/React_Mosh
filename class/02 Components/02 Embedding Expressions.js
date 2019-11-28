/*Now let us add a button below the paragraph*/
import React, {Component} from "react";

class Counter extends Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button>Increment</button>
            </div>
        );
    }
}

export default Counter;

/*This will wrap the jsx with 2 divs : One will be the div from the index.html root id and the other will be the parent div inside counter.jsx... To avoid this div duplicate, we can use React.Fragment*/

import React, {Component} from "react";

class Counter extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;

