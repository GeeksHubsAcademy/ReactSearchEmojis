import React, { Component } from 'react';

import data from '../../services/emojis.json';
import './style.css';

class EmojiList extends Component {

    render() {
        return (
            <div className="component-emoji-list">
                { data.map( emoji => (
                    <p> { emoji.title } </p>
                )) }
            </div>
        )
    }

}

export default EmojiList;