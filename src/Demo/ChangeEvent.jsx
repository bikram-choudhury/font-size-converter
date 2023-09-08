import React, { Component } from 'react'

export default class ChangeEvent extends Component {
    constructor() {
        super();
        this.state = {
            input: 'React'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value)
        this.setState({ input: event.target.value });
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.input} onChange={this.handleChange} />
                <span>{this.state.input}</span>
            </div>
        )
    }
}
