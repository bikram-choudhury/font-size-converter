import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        return (
            <select>
                <option value="">Choose...</option>
                <option value="px">px</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
            </select>
        )
    }
}
