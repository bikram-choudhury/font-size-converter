import React, { Component } from 'react'

export default class Lifecycles extends Component {
    constructor() {
        super();
        this.state = {
            x: 10
        };
    }
    static getDerivedStateFromProps(...args) {
        const [props, ownState] = args;
        // console.log(props, ownState)
        // console.log(this) => will return undefined
        return { ...props };
    }
    componentDidMount() {
        
    }
    render() {
        console.log("this.props = ", this.props);
        console.log("this.state = ", this.state);
        return null
    }
}
