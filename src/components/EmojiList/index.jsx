import React, { Component } from 'react';

import EmojiListRow from '../EmojiListRow';

import './style.css';

class EmojiList extends Component {

    render() {
        return (
            <div className="component-emoji-list">
                { this.props.data.map( emoji => (
                    <EmojiListRow emoji={emoji} />
                )) }
            </div>
        )
    }

}

export default EmojiList;