import React, { Component } from 'react'

export default class ClickEvent extends Component {
    constructor() {
        super();
        this.clickMethod = this.clickMethod.bind(this);
    }
    clickMethod(event) {
        console.log("event in clickMethod", event, this)
    }
    clickArrowFn = (event) => {
        console.log("event in clickArrowFn", event, this)
    }
    render() {
        return (
            <div>
                <button onClick={this.clickMethod}>Button with Method</button>
                <button onClick={this.clickArrowFn}>Button with arrow fn</button>
            </div>
        )
    }
}
