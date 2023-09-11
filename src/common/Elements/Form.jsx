import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        const { className, children } = this.props;
        return (
            <section className={className}>
                {children}
            </section>
        )
    }
}
