import React, { Component } from 'react'

export default class StateDemo extends Component {
    constructor() {
        super();
        this.state = {
            name: 'John Capelio',
            list: ['React', 'Java', 'C++']
        };
    }
    getState = () => this.state;
    getStateMethod() {
        return this.state;
    }
    render() {
        const { name, list } = this.state;
        console.log(this.getState());
        console.log(this.getStateMethod());
        return (
            <>
                <div>{name}</div>
                <ul>{list.map((v, i) => <li key={i}>{v}</li>)}</ul>
            </>
        )
    }
}
