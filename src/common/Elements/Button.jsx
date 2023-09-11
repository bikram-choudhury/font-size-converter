import React from "react";

export default class Button extends React.Component {
    render() {
        const { className, children } = this.props;
        return (
            <div className={className}>
                <button className='btn'>{children}</button>
            </div>
        )
    }
}