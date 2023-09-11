import React from 'react';

const regexMap = {
    numberOnly: /^\d+$/g,
    alphabetOnly: /^[a-zA-Z]+$/ig,
    alphaNumericOnly: /^[a-z0-9]+$/ig
}
export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { value } = event.target;
        const regex = this.props.numberOnly ? regexMap['numberOnly']: null;
        if(value && regex && !regex.test(value)) {
            return false;
        }
        this.setState({ value: event.target.value });
    }
    render() {
        // console.log(this.props)
        // const placeholer = this.props.placeholer;
        const { placeholder, type } = this.props;
        return (
            <input
                type={type}
                placeholder={placeholder}
                value={this.state.value}
                onChange={this.handleChange}
            />
        )
    }
}