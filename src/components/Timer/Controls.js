import React, { Component } from 'react'
import PropTypes from "prop-types";
import "../../styles/Timer/Controls.css";

export default class Controls extends Component {
    render() {
        return (
            <div id="controls">
                {
                    this.props.status ?
                        <button className="play" onClick={this.props.start}>
                            <i className="fas fa-play fa-2x i-play"></i>
                        </button>
                        :
                        <button className="stop" onClick={this.props.stop}>
                            <i className="fas fa-stop fa-2x i-stop"></i>
                        </button>
                }
                <button className="reset" onClick={this.props.reset}>
                    <i className="fas fa-sync-alt fa-2x i-reset"></i>
                </button>
            </div>
        )
    }
}

Controls.defaultProps = {
    status: true,
    start: () => console.log("started"),
    stop: () => console.log("stopped"),
    reset: () => console.log("reset")
}

Controls.propType = {
    status: PropTypes.bool,
    start: PropTypes.func,
    stop: PropTypes.func,
    reset: PropTypes.func
}

