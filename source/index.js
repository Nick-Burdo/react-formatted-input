import { Component } from "react";
import PropTypes from "prop-types";

import { filterValue, formatValue } from "./filter.js";

export default class FormattedInput extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            value: this.props.value
        };
    }

    onValueChange(event) {
        const input = event.target;
        const newValue = filterValue(input.value, {
            maxLength: this.props.maxLength
        });
        this.setState({
            value: formatValue(newValue)
        });
    }

    render() {
        return (
            <input
                value={this.state.value}
                onChange={e => this.onValueChange(e)}
                placeholder={this.props.placeholder}
                />
        );
    }

}

FormattedInput.propTypes = {
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

FormattedInput.defaultProps = {
    maxLength: Infinity,
    placeholder: "",
    value: ""
};
