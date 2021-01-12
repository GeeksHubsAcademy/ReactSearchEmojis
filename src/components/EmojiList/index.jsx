import React, { Component } from 'react';
import Clipboard from "clipboard";
import EmojiListRow from '../EmojiListRow';

import './style.css';

class EmojiList extends Component {

    componentDidMount() {
        this.clipboard = new Clipboard(".copy-to-clipboard");
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    render() {
        return (
            <div className="component-emoji-list">
                { this.props.data.map( emoji => (
                    <EmojiListRow emoji={emoji} key={emoji.id} />
                )) }
            </div>
        )
    }

}

export default EmojiList;