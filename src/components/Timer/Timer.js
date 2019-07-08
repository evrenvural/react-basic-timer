import React, { Component } from 'react'
import "../../styles/Timer/Timer.css";
import Controls from './Controls';
import Display from "./Display";

export default class Timer extends Component {
    constructor(){
        super();

        this.state = {play: true}
    }

    start = () =>{
        this.setState({
            play: false
        });
    }

    stop = () =>{
        this.setState({
            play: true
        });
    }

    reset = () =>{
        this.setState({
            play: true
        });
    }
    render() {
        return (
            <div id = "timer">
                <Display 

                />
                <Controls 
                status = {this.state.play}
                start = {this.start}
                stop = {this.stop} 
                reset = {this.reset}    
                />
            </div>
        )
    }
}
