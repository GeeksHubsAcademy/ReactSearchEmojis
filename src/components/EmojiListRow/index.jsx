import React, { Component } from 'react';
import './style.css';

class EmojiListRow extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="component-emoji-row">
                <span className="symbol"> { this.props.emoji.symbol } </span>
                <span className="title"> { this.props.emoji.title } </span>
            </div>
        )
    }
}

export default EmojiListRow;