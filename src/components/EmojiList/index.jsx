import React, { Component } from 'react';

import EmojiListRow from '../EmojiListRow';

import data from '../../services/emojis.json';
import './style.css';

class EmojiList extends Component {

    render() {
        return (
            <div className="component-emoji-list">
                { data.map( emoji => (
                    <EmojiListRow emoji={emoji} />
                )) }
            </div>
        )
    }

}

export default EmojiList;