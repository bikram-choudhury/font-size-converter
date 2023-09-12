import React from 'react';

const regexMap = {
    numberOnly: /^[0-9]*$/,
    alphabetOnly: /^[a-zA-Z]+$/ig,
    alphaNumericOnly: /^[a-z0-9]+$/ig
}
export default class Input extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { value } = event.target;
        const regex = this.props.numberOnly ? regexMap['numberOnly']: null;
        if(value && regex && !regex.test(value)) {
            return false;
        }
        this.props.onInput(value);
    }
    render() {
        const { placeholder, type, value } = this.props;
        return (
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={this.handleChange}
            />
        )
    }
}