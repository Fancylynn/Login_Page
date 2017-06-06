import React, { Component } from 'react';
import Greeting from '../components/Greeting';
import Name from '../components/Name';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            name: "",
        };
    };

    updateCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    updateName = (e) => {
        const name = e.target.value;
        this.setState({ name: name});
    };

    render() {
        return <div>
                    <Greeting name={this.state.name} />
                    <span> {this.state.count} </span>
                    <p>
                        <button onClick={this.updateCount}>GO</button>
                    </p>
                    <Name updateName={this.updateName}/>
                </div>;
    }
}

export default Counter;