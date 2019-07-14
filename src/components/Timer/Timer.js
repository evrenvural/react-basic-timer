import React, { Component } from 'react'
import "../../styles/Timer/Timer.css";
import Controls from './Controls';
import Display from "./Display";

export default class Timer extends Component {
    constructor() {
        super();

        this.state = {
            play: true,
            time: 0,
            seconds: 0
        }
    }

    start = () => {
        this.setState({
            play: false
        });
    }

    stop = () => {
        this.setState({
            play: true
        });
    }

    reset = () => {
        this.setState({
            play: true
        });
    }

    onChangeTime = (seconds) => {
        seconds = parseInt(seconds);

        if (seconds && typeof seconds === 'number') {
            if (seconds <= 359999) {
                this.setState({ seconds: seconds, time: seconds * 1000 });
            }
        } 
        else {
            this.setState(() => ({ seconds: 0, time: 0 }));
        }
    }

    render() {
        return (
            <div id="timer">
                <Display
                    time={this.state.time}
                    onChangeTime={this.onChangeTime}
                    seconds={this.state.seconds}
                />
                <Controls
                    status={this.state.play}
                    start={this.start}
                    stop={this.stop}
                    reset={this.reset}
                />
            </div>
        )
    }
}
