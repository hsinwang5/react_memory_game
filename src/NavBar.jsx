import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    static defaultProps = {
        title: 'No Title Specified'
    }

    render() {
        const {newGame} = this.props;
        return (
            <nav>
                <a href="">{this.props.title}</a>
                <a 
                    href=""
                    onClick={newGame}
                >
                New Game
                </a>
            </nav>
        )
    }
}

export default NavBar;