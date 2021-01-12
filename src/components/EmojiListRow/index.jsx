import React, { Component } from 'react';
import './style.css';

class EmojiListRow extends Component {

    render() {
        return (
            <div 
                className="component-emoji-row copy-to-clipboard"
                data-clipboard-text={this.props.emoji.symbol}
            >
                <span className="symbol"> { this.props.emoji.symbol } </span>
                <span className="title"> { this.props.emoji.title } </span>
                <span className="info"> Click to copy emoji </span>
            </div>
        )
    }
}

export default EmojiListRow;