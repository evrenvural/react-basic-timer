import React, { Component } from 'react';
import "../../styles/Timer/Display.css";
import PropTypes from "prop-types";
import Time from "../../lib/Time";

export default class Display extends Component {
    constructor() {
        super();

        this.state = {
            hour: 0, minutes: 0, seconds: 0,
            splitSeconds: 0
        }
    }
    onChange = (e) => {
        this.props.onChangeTime(e.target.value);
    }

    render() {
        return (
            <div id="display">
                <div id="format">
                    {Time.getTime(this.props.time)}
                </div>
                <input id="time" onChange={this.onChange} value={this.props.seconds} />
            </div>
        )
    }
}

Display.defaultProps = {
    times: 0,
    onChangeTime: () => console.log("Time was changed")
}
Display.propTypes = {
    times: PropTypes.number.isRequired,
    onChangeTime: PropTypes.func,
    seconds: PropTypes.number
}
