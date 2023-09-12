import React from "react";

export default class Button extends React.Component {
    render() {
        const { className, children, onClick: handleClick } = this.props;
        return (
            <div className={className}>
                <button onClick={handleClick} className='btn'>{children}</button>
            </div>
        )
    }
}