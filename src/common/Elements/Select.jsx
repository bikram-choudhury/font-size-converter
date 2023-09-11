import React, { Component } from 'react'

export default class Select extends Component {
    constructor() {
        super();
        this.state = {
            selected: ''
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(event) {
        console.log(event.target.value)
    }
    render() {
        const { options } = this.props;
        return (
            <select onChange={this.handleSelect}>
                <option key="idx-" value="">Choose...</option>
                {
                    options.map((value, idx) => {
                        return (
                            <option key={`idx-${idx}`} value={value}>{value}</option>
                        )
                    })
                }
            </select>
        )
    }
}
