import React, { Component } from 'react'
import PropTypes from "prop-types";
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className = "content">
                        <i className="fas fa-hourglass-half fa-3x"></i>
                        <h2 id = "text">{this.props.title}</h2>
                    </div>
                </header>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: "Title"
};