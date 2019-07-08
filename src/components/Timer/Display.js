import React, { Component } from 'react';
import "../../styles/Timer/Display.css";

export default class Display extends Component {
    render() {
        return (
            <div id="display">
                <div id="format">01:49:10:70</div>
                <input id="time" min="0" max="999999"/>
            </div>
        )
    }
}
