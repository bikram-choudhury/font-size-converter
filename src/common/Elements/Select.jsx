import React, { Component } from 'react'

export default class Select extends Component {
    constructor() {
        super();
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(event) {
        this.props.onSelect(event.target.value);
    }
    render() {
        const { options, selected } = this.props;
        return (
            <select onChange={this.handleSelect} value={selected}>
                <option key="idx-" value="">Choose...</option>
                {
                    options.map((value, idx) => {
                        return (
                            <option
                                key={`idx-${idx}`}
                                value={value}
                                /* selected={selected == value} */
                            >{value}</option>
                        )
                    })
                }
            </select>
        )
    }
}
